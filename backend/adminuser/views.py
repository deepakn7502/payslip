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

from django.conf import settings


from .serializer import *
from .models import *   
from .utils import *

import json
import pytz,jwt

# from bulk_update.helper import bulk_update





from django_nextjs.render import render_nextjs_page_sync
def index(request):
    return render_nextjs_page_sync(request)

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
    # authentication_classes = [CustomAuthentication]
    # permission_classes = [IsAuthenticated]


    def create(self,request):
        try:
            print( request.query_params.get("year"))
            month = request.data["month"].upper() + "-" + str(request.data["year"])[2:]
            receipt.objects.bulk_create([receipt(**(data | {"month": month})) for data in request.data["data"]] )
            return Response("Success")
        except DatabaseError  as e:
          error_message = str(e.args[1]) if len(e.args) > 1 else str(e)
          raise ParseError(detail=str(e.args[1]), code=400)
        except Exception  as e:
          raise ParseError(detail=str(e), code=400)
    def list(self, request, *args, **kwargs):     
            month =  request.query_params.get("month").upper() + "-" + request.query_params.get("year")[2:]
            data = receipt.objects.filter(month = month).select_related('eid').all()
            serializer = rep_serialzer(data, many=True)
            return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
       try:
          id = kwargs['pk']
          month =  request.query_params.get("month").upper() + "-" + request.query_params.get("year")[2:]
          data = receipt.objects.filter(eid=id,month = month).select_related('eid').all()
          if(data):
            serializer = rep_serialzer(data, many=True).data[0]  #json.loads(json.dumps())[0]
            if(not serializer["status"]):
              up = receipt.objects.get(eid=id,month = month)
              up.status = True
              up.save()
              serializer["status"] = True
            return Response(serializer)
          else:
             raise NotFound(detail="No Data Found")
       except Exception  as e:
          raise ParseError(detail=str(e), code=400)
      
    

class login(APIView):
    def post(self, request, *args, **kwargs):
       user_c = employee.objects.get(username=request.data["username"])
       if user_c:      
          user = auth.authenticate(username=request.data["username"],password=request.data["password"])
          if user is not None:
            auth.login(request,user)
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            return Response({
                  "name":user_c.username,
                  "user":"admin",
                  "access_token" : access_token,
                  "refresh_token" : str(refresh)
               })
          elif(user_c.password == request.data["password"]):
                expiration_time = datetime.now(pytz.timezone('Asia/Kolkata')) + timedelta(hours=12)
                payload = {
                  "eid":user_c.eid,
                   "name":user_c.first_name,
                  'exp': expiration_time.timestamp()
                    }
                token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
                print(token)
                return Response({
                "eid":user_c.eid,
                "name":user_c.first_name,
                "user":"staff",
                "access_token" : token,
                
                })
          else:
            raise PermissionDenied(detail="Invalid Password")
            
       else:
            raise PermissionDenied(detail="Invalid Credentials")
            


    def put(self,requset):
        fn=requset.data["fn"]
        if(fn == "send_otp"):
            try:
              return Response(send_otp(requset))
            except Exception  as e:
              raise ParseError(detail=str(e), code=400)
            
        if(fn == "verify_otp"):
            res=verify_otp(requset)
            if(res[0]):
                try:
                    emp = employee.objects.get(eid=requset.data["eid"])
                    emp.password = requset.data["password"]
                    emp.save()
                    return Response("Pasword Changed Successfully")
                except Exception as e:
                  raise ParseError(detail=str(e), code=400)
                
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