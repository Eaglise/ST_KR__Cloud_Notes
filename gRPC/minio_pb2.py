# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: minio.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0bminio.proto\x12\x0bminio_proto\"L\n\x0bNoteRequest\x12\x0c\n\x04user\x18\x01 \x01(\t\x12\r\n\x05title\x18\x02 \x01(\t\x12\x14\n\x07\x63ontent\x18\x03 \x01(\tH\x00\x88\x01\x01\x42\n\n\x08_content\"J\n\x0cNoteResponse\x12\x0c\n\x04user\x18\x01 \x01(\t\x12\r\n\x05title\x18\x02 \x01(\t\x12\x0f\n\x07\x63ontent\x18\x03 \x01(\t\x12\x0c\n\x04\x64\x61te\x18\x04 \x01(\t\"\x14\n\x04User\x12\x0c\n\x04user\x18\x01 \x01(\t\"F\n\x06Status\x12\x0e\n\x06status\x18\x01 \x01(\x08\x12\x1a\n\rerror_message\x18\x02 \x01(\tH\x00\x88\x01\x01\x42\x10\n\x0e_error_message\"(\n\tNoteTitle\x12\x0c\n\x04user\x18\x01 \x01(\t\x12\r\n\x05title\x18\x02 \x01(\t\"\x18\n\x08NoteDate\x12\x0c\n\x04\x64\x61te\x18\x01 \x01(\t2\xf2\x02\n\x0cMinioMethods\x12;\n\x07GetList\x12\x11.minio_proto.User\x1a\x19.minio_proto.NoteResponse\"\x00\x30\x01\x12:\n\x07\x41\x64\x64Note\x12\x18.minio_proto.NoteRequest\x1a\x13.minio_proto.Status\"\x00\x12;\n\x08\x45\x64itNote\x12\x18.minio_proto.NoteRequest\x1a\x13.minio_proto.Status\"\x00\x12;\n\nDeleteNote\x12\x16.minio_proto.NoteTitle\x1a\x13.minio_proto.Status\"\x00\x12\x33\n\x07\x41\x64\x64User\x12\x11.minio_proto.User\x1a\x13.minio_proto.Status\"\x00\x12:\n\x07GetDate\x12\x16.minio_proto.NoteTitle\x1a\x15.minio_proto.NoteDate\"\x00\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'minio_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _NOTEREQUEST._serialized_start=28
  _NOTEREQUEST._serialized_end=104
  _NOTERESPONSE._serialized_start=106
  _NOTERESPONSE._serialized_end=180
  _USER._serialized_start=182
  _USER._serialized_end=202
  _STATUS._serialized_start=204
  _STATUS._serialized_end=274
  _NOTETITLE._serialized_start=276
  _NOTETITLE._serialized_end=316
  _NOTEDATE._serialized_start=318
  _NOTEDATE._serialized_end=342
  _MINIOMETHODS._serialized_start=345
  _MINIOMETHODS._serialized_end=715
# @@protoc_insertion_point(module_scope)
