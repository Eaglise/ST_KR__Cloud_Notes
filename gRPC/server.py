from concurrent import futures
import logging

import grpc
import minio_pb2
import minio_pb2_grpc
import MinIO.s3_methods


class MinioServicer(minio_pb2_grpc.MinioMethodsServicer):

    # def __init__(self):
        # self.db = route_guide_resources.read_route_guide_database()

    def GetList(self, request, context):
        print('New request: Get List')
        note = minio_pb2.Note(
            user='user1',
            title='title1',
            date='date1',
            content='content1'
        )
        note_list = []
        note_list.append(note)
        for n in note_list:
            yield n

    def AddNote(self, request, context):
        print('New request: Add Note')
        return minio_pb2.Status(status='ok')

    def EditNote(self, request, context):
        print('New request: Edit Note')
        return minio_pb2.Status(status='ok')

    def DeleteNote(self, request, context):
        print('New request: Delete Note')
        return minio_pb2.Status(status='ok')

    def AddUser(self, request, context):
        print('New request: Add User')
        return minio_pb2.Status(status='ok')

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