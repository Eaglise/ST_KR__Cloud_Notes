import logging

import grpc
import minio_pb2
import minio_pb2_grpc


def test_grpc(stub, sync):
    notedate = stub.GetDate(sync)
    print(notedate.date)


def test_add_user(stub, user):
    status = stub.AddUser(user)
    print(status.status)
    if not status.status:
        print(status.error_message)


def test_add_note(stub, note):
    status = stub.AddNote(note)
    print(status.status)
    if not status.status:
        print(status.error_message)


def test_get_note(stub, user):
    note = stub.GetList(user)
    print("notes got")
    for n in note:
        print(n.content)


def run():
    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = minio_pb2_grpc.MinioMethodsStub(channel)
        print("-------------- GetDate --------------")
        test_grpc(stub, minio_pb2.NoteTitle(user='user1', title='title1'))
        # print("-------------- AddUser --------------")
        # test_add_user(stub, minio_pb2.User(user='user2'))
        print("-------------- AddNote --------------")
        test_add_note(stub, minio_pb2.NoteRequest(user='user1', title='title2', content='content2'))
        print("-------------- GetNote --------------")
        test_get_note(stub, minio_pb2.User(user='user1'))
        channel.close()


if __name__ == '__main__':
    logging.basicConfig()
    run()