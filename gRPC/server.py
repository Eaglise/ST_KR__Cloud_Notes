from concurrent import futures
import logging

import grpc
import minio_pb2
import minio_pb2_grpc
from MinIO.s3_methods import MinioClass


class MinioServicer(minio_pb2_grpc.MinioMethodsServicer):

    def __init__(self):
        try:
            self.minio = MinioClass()
        except ConnectionError:
            print('Minio connection failed')
        except Exception:
            print('Unknown error')
        else:
            print('Minio connection succeed')

    def GetList(self, request, context):
        print('New request: Get List')
        note_list = []
        note = self.minio.get_note(request.user, 'title1')
        note_pb = minio_pb2.NoteResponse(user=request.user, title='title1', content=note, date='date')
        note_list.append(note_pb)
        for n in note_list:
            yield n

    def AddNote(self, request, context):
        print('New request: Add Note')
        try:
            self.minio.add_note(request.user, request.title, request.content)
        except ValueError:
            status = minio_pb2.Status(status=False, error_message='Minio note add failed')
        except ConnectionError:
            status = minio_pb2.Status(status=False, error_message='Unknown minio error')
        except Exception:
            status = minio_pb2.Status(status=False, error_message='Unknown grpc error')
        else:
            status = minio_pb2.Status(status=True)
        return status

    def EditNote(self, request, context):
        print('New request: Edit Note')
        return minio_pb2.Status(status='ok')

    def DeleteNote(self, request, context):
        print('New request: Delete Note')
        return minio_pb2.Status(status='ok')

    def AddUser(self, request, context):
        print('New request: Add User')
        try:
            self.minio.add_user(request.user)
        except ValueError:
            status = minio_pb2.Status(status=False, error_message='Minio user add failed (Probably this username already taken)')
        except ConnectionError:
            status = minio_pb2.Status(status=False, error_message='Unknown minio error')
        except Exception:
            status = minio_pb2.Status(status=False, error_message='Unknown grpc error')
        else:
            status = minio_pb2.Status(status=True)
        return status

    def GetDate(self, request, context):
        print('New request: Get Date')
        return minio_pb2.NoteDate(date='some date')


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    minio_pb2_grpc.add_MinioMethodsServicer_to_server(
        MinioServicer(), server)
    server.add_insecure_port('[::]:50051')
    server.add_insecure_port('0.0.0.0:30000')
    server.start()
    print('gRPC Server started successfully')

    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
