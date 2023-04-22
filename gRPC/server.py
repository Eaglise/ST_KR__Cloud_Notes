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
        except Exception as e:
            print('Unknown error ', e)
        else:
            print('Minio connection succeed')

    def GetList(self, request, context):
        print('New request: Get List')

        try:
            note_list = self.minio.get_notes(request.user)

            for note in note_list:
                print(note)
                yield minio_pb2.NoteResponse(user=note['user'], title=note['title'], content=note['content'], date=note['date'])

        except Exception as e:
            print(e)


    def AddNote(self, request, context):
        print('New request: Add Note')
        try:
            self.minio.add_note(request.user, request.title, request.content)
        except ValueError:
            status = minio_pb2.Status(status=False, status_code=400)
        except ConnectionError:
            status = minio_pb2.Status(status=False, status_code=500)
        except Exception:
            status = minio_pb2.Status(status=False, status_code=500)
        else:
            status = minio_pb2.Status(status=True, status_code=200)
        return status

    def EditNote(self, request, context):
        print('New request: Edit Note')
        try:
            if request.old_title is not None:
                self.minio.delete_note(request.user, request.old_title)
            self.minio.add_note(request.user, request.title, request.content)
        except ValueError:
            status = minio_pb2.Status(status=False, status_code=400)
        except ConnectionError:
            status = minio_pb2.Status(status=False, status_code=500)
        except Exception:
            status = minio_pb2.Status(status=False, status_code=500)
        else:
            status = minio_pb2.Status(status=True, status_code=200)
        return status

    def DeleteNote(self, request, context):
        print('New request: Delete Note')
        try:
            self.minio.delete_note(request.user, request.title)
        except ValueError:
            status = minio_pb2.Status(status=False, status_code=400)
        except ConnectionError:
            status = minio_pb2.Status(status=False, status_code=500)
        except Exception:
            status = minio_pb2.Status(status=False, status_code=500)
        else:
            status = minio_pb2.Status(status=True, status_code=200)
        return status

    def AddUser(self, request, context):
        print('New request: Add User')
        try:
            self.minio.add_user(request.user)
        except ValueError:
            status = minio_pb2.Status(status=False, status_code=400)
        except ConnectionError:
            status = minio_pb2.Status(status=False, status_code=500)
        except Exception:
            status = minio_pb2.Status(status=False, status_code=500)
        else:
            status = minio_pb2.Status(status=True, status_code=200)
        return status

    def GetDate(self, request, context):
        print('New request: Get Date')
        try:
            note_date = self.minio.get_date(request.user, request.title)
            return minio_pb2.NoteDate(date=note_date)
        except Exception as e:
            print(e)

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
