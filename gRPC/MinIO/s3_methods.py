from minio import Minio
from minio.error import S3Error
from config import Config

from gRPC.MinIO.file_processing_methods import *

class MinioClass:
    def __init__(self):
        try:
            self.config = Config('/Users/artisia/PycharmProjects/ST_KR_Integration/gRPC/MinIO/minio_admin.cfg')
            self.con = Minio(endpoint=self.config['socket'],
                             access_key=self.config['access_key'],
                             secret_key=self.config['secret_key'],
                             secure=False)
        except S3Error as exc:
            print("error occurred: ", exc)
            raise S3Error
        except Exception as exc:
            print("unexpected error: ", exc)
            raise ConnectionError

    def __del__(self):
        print('minio connection closed')

    def add_user(self, username: str):
        try:
            print(username)
            self.con.make_bucket(username)
        except S3Error as exc:
            print("error occurred: ", exc)
            raise ValueError
        except Exception as exc:
            print("unexpected error: ", exc)
            raise ConnectionError

    def add_note(self, username: str, title: str, content=""):
        title = remove_spaces(title)
        str_io_object = io.StringIO(content)
        b_content = str_io_object.read().encode('utf8')
        try:
            result = self.con.put_object(bucket_name=username,
                                         object_name=title,
                                         data=io.BytesIO(b_content),
                                         length=len(content))
        except S3Error as exc:
            print("error occurred: ", exc)
            raise ValueError
        except Exception as exc:
            print("unexpected error: ", exc)
            raise ConnectionError

    def get_note(self, username: str, title: str):
        try:
            result = self.con.get_object(bucket_name=username,
                                         object_name=title)
            return result.data
        except S3Error as exc:
            print("error occurred: ", exc)
            raise ValueError
        except Exception as exc:
            print("unexpected error: ", exc)
            raise ConnectionError
