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
from .utils import *


import pyotp
from datetime import datetime,timedelta

class employees(viewsets.ModelViewSet):
    queryset = employee.objects.all()
    serializer_class = emp_serialzer


class receipts(viewsets.ModelViewSet):
    queryset = receipt.objects.all()
    serializer_class = rep_serialzer

    def create(self,request):
        # serializer = rep_serialzer(request.data)
        # serializer.is_valid(raise_exception=True)

        receipt.objects.bulk_create([receipt(**data) for data in request.data] )
        return Response("Success")


class login(APIView):
    def put(self,requset):
        fn=requset.data["fn"]
        if(fn == "send_otp"):
            return Response(send_otp(requset))
        if(fn == "verify_otp"):
            return Response(verify_otp(requset))

