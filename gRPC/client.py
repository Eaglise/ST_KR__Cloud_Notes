import logging

import grpc
# from gRPC import minio_pb2
from gRPC import minio_pb2
from gRPC import minio_pb2_grpc


# def test_grpc(stub, sync):
#     notedate = stub.GetDate(sync)
#     print(notedate.date)
stub = None
def run():
    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    # with grpc.insecure_channel('25.39.50.65:30000') as channel:
    global stub
    stub = minio_pb2_grpc.MinioMethodsStub(grpc.insecure_channel('25.39.50.65:30000'))
    print(stub)
    # print("-------------- GetDate --------------")
    # test_grpc(stub, minio_pb2.Sync(user='user1', title='title1'))
    # channel.close()
    # print("sad", stub)

if __name__ == '__main__':
    logging.basicConfig()
    run()