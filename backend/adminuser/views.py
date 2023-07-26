from django.shortcuts import render

from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework import generics,viewsets
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound
from rest_framework import status

from .serializer import *
from .models import *

class employees(viewsets.ViewSet):
    queryset = employee.objects.all()
    serializer_class = emp_serialzer


class login(APIView):
    pass
