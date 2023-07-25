from rest_framework.views import APIView
from rest_framework.response import Response

from django.shortcuts import render,HttpResponse
from .tasks import func

from django_nextjs.render import render_nextjs_page_sync






class email(APIView):
    def get(self,request):
        subject = "TEST MISSION ACCOMPLISHED"
        message = "THIS MAIL IS TO INFORM THAT MISSION GIVEN ARUNKUMAR.J(BACKEND DEVELOPER) HAS BEEN ACCOMPLISHED WITHIN A DAY AS SAID BY HIM. SO I NEED 5000 INCREMENT FOR MY NEXT MISSION"
        from_email = 'arunkj203@gmail.com'
        recipient_list = ['arunkj203@gmail.com','bharath190802@gmail.com','ashwinsanjay35@gmail.com']
        
        func.apply_async((subject, message, from_email, recipient_list), countdown=5)  # Schedule email to be sent in 1 hour
        return Response("Mail Sent")

def index(request):
    return render_nextjs_page_sync(request)