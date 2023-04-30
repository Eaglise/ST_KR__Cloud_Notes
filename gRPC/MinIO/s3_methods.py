from minio import Minio
from minio.error import S3Error
from config import Config
import io


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
            if not self.con.bucket_exists(username):
                self.con.make_bucket(username)
        except S3Error as exc:
            print("error occurred: ", exc)
            raise ValueError
        except Exception as exc:
            print("unexpected error: ", exc)
            raise ConnectionError

    def add_note(self, username: str, title: str, content=""):
        title = title.replace(" ", "_")
        b_content = content.encode('utf-8')
        try:
            result = self.con.put_object(bucket_name=username,
                                         object_name=title,
                                         data=io.BytesIO(b_content),
                                         length=len(b_content))
        except S3Error as exc:
            print("error occurred: ", exc)
            raise ValueError
        except Exception as exc:
            print("unexpected error: ", exc)
            raise ConnectionError

    def get_note_content(self, username: str, title: str):
        try:
            result = self.con.get_object(bucket_name=username,
                                         object_name=title)
            return result.data.decode('utf-8')
        except S3Error as exc:
            print("error occurred: ", exc)
            raise ValueError
        except Exception as exc:
            print("unexpected error: ", exc)
            raise ConnectionError

    def get_notes(self, username: str):
        note_arr = []
        try:
            note_list = self.con.list_objects(bucket_name=username)
            for note in note_list:
                title = str(note.object_name)
                note_date = str(note.last_modified)[:19]
                content = self.get_note_content(username, title)
                title = title.replace("_", " ")
                result = dict(user=username, title=title, content=content, date=note_date)
                note_arr.append(result)
            note_arr = sorted(note_arr, key=lambda n: n['date'])
            return note_arr[::-1]
        except S3Error as exc:
            print("error occurred: ", exc)
            raise ValueError
        except Exception as exc:
            print("unexpected error: ", exc)
            raise ConnectionError

    def delete_note(self, username: str, title: str):
        title = title.replace(" ", "_")
        try:
            result = self.con.remove_object(bucket_name=username,
                                            object_name=title)
        except S3Error as exc:
            print("error occurred: ", exc)
            raise ValueError
        except Exception as exc:
            print("unexpected error: ", exc)
            raise ConnectionError

    def get_date(self, username:str, title: str):
        title = title.replace(" ", "_")
        try:
            stat = self.con.stat_object(bucket_name=username, object_name=title)
            return str(stat.last_modified)[:19]
        except S3Error as exc:
            print("error occurred: ", exc)
            raise ValueError
        except Exception as exc:
            print("unexpected error: ", exc)
            raise ConnectionError
