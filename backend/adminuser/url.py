from .views import *
from django.urls import path,include
from django_nextjs.render import render_nextjs_page_sync


urlpatterns = [
    # path("",email.as_view()),
    path("",index, name="index")
   
]