from django.apps import AppConfig
from gRPC.client import run
import gRPC.minio_pb2
# import gRPC.client


class CelestialnotesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'CelestialNotes'

    def ready(self):
        run()
