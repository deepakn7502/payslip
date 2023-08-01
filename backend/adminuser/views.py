from django.shortcuts import render
from django.db.utils import DatabaseError
from django.contrib.auth.models import User
from django.contrib import auth

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
    def post(self,request):
       data=request.data
      
       if list(User.objects.filter(username=data["id"])):
         
          user = auth.authenticate(username=data["id"],password=data["password"])
          if user is not None:
            print(user)
            auth.login(request,user)
            return Response(str(user))
          else:
             
             raise PermissionDenied(detail="Invalid Password")
       user = employee.objects.filter(eid=data["id"]).values()
      
       if user:      
            if user[0]["password"] == data["password"]:
                return Response(user[0]["name"])
            else:
                raise PermissionDenied(detail="Invalid password.")
       else:
                raise PermissionDenied(detail="Invalid Credentials")
            


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

