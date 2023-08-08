from django.shortcuts import render
from django.db.utils import DatabaseError
from django.contrib.auth.models import User
from django.contrib import auth

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication

from rest_framework.views import APIView
from rest_framework import generics,viewsets
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound,ParseError,PermissionDenied
from rest_framework import status,permissions

from .serializer import *
from .models import *   
from .utils import *

import json



class employees(viewsets.ModelViewSet):
    queryset = employee.objects.all()
    serializer_class = emp_serialzer

    def create(self,request):
        try:
            employee.objects.bulk_create([employee(**data) for data in request.data] )
            return Response("Success")
        except DatabaseError  as e:
          error_message = str(e.args[1]) if len(e.args) > 1 else str(e)
          raise ParseError(detail=str(e.args[1]), code=400)
        except Exception  as e:
          raise ParseError(detail=str(e), code=400)
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
    def list(self, request, *args, **kwargs):
         
            data = receipt.objects.select_related('eid').all()
            serializer = rep_serialzer(data, many=True)
            # print(data)
            return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
      #  try:
          id = kwargs['pk']
          month =  request.query_params.get("month").upper() + "-" + request.query_params.get("year")[2:]
          data = receipt.objects.filter(eid=id,month = month).select_related('eid').all()
          print("data",data)
          if(data):
            print(data)
            serializer = rep_serialzer(data, many=True).data  #json.loads(json.dumps())[0]
           
            if(not serializer["status"]):
              up = receipt.objects.get(eid=id,month = month)
              up.status = True
              up.save()
              serializer["status"] = True
            return Response(serializer)
          else:
             raise NotFound(detail="Not Found")
      #  except Exception  as e:
      #     raise ParseError(detail=str(e), code=400)
      
    

class login(APIView):
    def post(self,request):
       user_c = list(employee.objects.filter(username=request.data["username"]).values())
       if user_c:      
          user = auth.authenticate(username=request.data["username"],password=request.data["password"])
          if user is not None:
            auth.login(request,user)
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            return Response({
                  "name":user.username,
                  "user":"admin",
                  "access_token" : access_token,
                  "refresh_token" : str(refresh)
               })
          elif(user_c[0]["password"] == request.data["password"]):
                # refresh = RefreshToken.for_user(user_c[0])
                # access_token = str(refresh.access_token)
                return Response({
                "eid":user_c[0]["eid"],
                "name":user_c[0]["first_name"],
                "user":"staff",
                  # "access_token" : access_token,
                  #  "refresh_token" : str(refresh)
                })
          else:
            raise PermissionDenied(detail="Invalid Password")
            
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




    #    if list(User.objects.filter(username=data["id"])):
         
    #       user = auth.authenticate(username=data["id"],password=data["password"])
    #       if user is not None:
    #         print(user)
    #         auth.login(request,user)
    #         return Response(str(user))
    #       else:
             
    #          raise PermissionDenied(detail="Invalid Password")
    #  if user[0]["password"] == data["password"]:
    #             return Response(user[0]["name"])
    #         else:
    #             raise PermissionDenied(detail="Invalid password.")