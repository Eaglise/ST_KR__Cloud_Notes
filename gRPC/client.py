import logging

import grpc
import minio_pb2
import minio_pb2_grpc


def test_grpc(stub, sync):
    notedate = stub.GetDate(sync)
    print(notedate.date)


def run():
    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = minio_pb2_grpc.MinioMethodsStub(channel)
        print("-------------- GetDate --------------")
        test_grpc(stub, minio_pb2.Sync(user='user1', title='title1'))
        channel.close()


if __name__ == '__main__':
    logging.basicConfig()
    run()