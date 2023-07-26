from django.contrib import admin
from django.urls import path
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register(r'staff/', employees)

urlpatterns = [
    path("login/", admin.site.urls),
] + router.urls 


