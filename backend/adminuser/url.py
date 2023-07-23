from .views import *
from django.urls import path,include

urlpatterns = [
    path("",email.as_view()),
   
]