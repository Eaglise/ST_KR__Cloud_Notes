"""CN_Project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from CelestialNotes import views as celestial_notes_views
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = routers.DefaultRouter()
router.register(r'notes', celestial_notes_views.post_note, basename='post_notes')
router.register(r'notes/edit', celestial_notes_views.edit_note, basename='edit_note')
router.register(r'notes/delete', celestial_notes_views.delete_note, basename='delete_note')

urlpatterns = [
    # path('', include(router.urls)),

    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('add_user', celestial_notes_views.getJson, name='getJson'),
    path('api/user', celestial_notes_views.user, name='user'),
    # path(r'notes/{userId}', celestial_notes_views.get_notes),

    path(r'notes/<int:userId>', celestial_notes_views.get_notes, name='get_notes'),
    path(r'notes', celestial_notes_views.post_note, name='post_note'),
    path(r'notes/edit', celestial_notes_views.edit_note, name='edit_note'),
    path(r'notes/delete', celestial_notes_views.delete_note, name='delete_note'),

    path('api/token/obtain', TokenObtainPairView.as_view(), name='token_obtain'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),

    path('admin/', admin.site.urls),
]
