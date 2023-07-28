from django.shortcuts import render
from django.db.utils import DatabaseError
from django.db import connection
from django.contrib.auth.models import User
from django.apps import apps

from rest_framework.views import APIView
from rest_framework import generics,viewsets
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound,ParseError,PermissionDenied
from rest_framework import status

from .serializer import *
from .models import *   
from .utils import *


class employees(viewsets.ModelViewSet):
    queryset = employee.objects.all()
    serializer_class = emp_serialzer

class receipts(viewsets.ModelViewSet):
    queryset = receipt.objects.all()
    serializer_class = rep_serialzer

   

    def create(self,request):
        try:
            receipt.objects.bulk_create([receipt(**data) for data in request.data] )
            return Response("Success")
        except DatabaseError  as e:
          error_message = str(e.args[1]) if len(e.args) > 1 else str(e)
          raise ParseError(detail=str(e.args[1]), code=400)
        except Exception  as e:
          raise ParseError(detail=str(e), code=400)


class login(APIView):
    def put(self,requset):
        fn=requset.data["fn"]
        if(fn == "send_otp"):
            try:
              send_otp(requset)
              return Response("OTP sent Successfully")
            except Exception  as e:
              raise ParseError(detail=str(e), code=400)
            
        if(fn == "verify_otp"):
            res=verify_otp(requset)
            if(res[0]):
                try:
                    emp = employee.objects.get(eid=requset.data["eid"])
                    emp.password = requset.data["password"]
                    emp.save()
                    return Response("success")
                except Exception as e:
                 return Response(str(e))
                
            else:
                raise PermissionDenied(detail=res[1],code=400)

