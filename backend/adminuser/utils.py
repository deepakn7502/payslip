from django.conf import Settings
from django.core.mail import send_mail

from datetime import datetime,timedelta
import pyotp as pt
from .models import employee

import jwt
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings


def send_otp(request):
    totp = pt. TOTP (pt.random_base32(), interval=300)
    otp = totp.now()
    request.session ['otp_secret_key'] = totp.secret
    request.session ['for_time'] = str(datetime.now())

    eid = employee.objects.get(eid=request.data["eid"])  
    subject = 'OTP Verification'
    message = f'Your OTP for email verification is: {otp}'
    from_email = 'your_email@example.com'
    recipient_list = [eid.email]

    send_mail(subject, message, from_email, recipient_list)

    return request.session.session_key


def verify_otp(request):
    
    otp= request.data["otp"]
    otp_secret_key = request.session ['otp_secret_key']
    for_time= datetime.fromisoformat (request.session ['for_time']) 
    otp_valid_until= for_time + timedelta (seconds=300)
    if otp_secret_key and for_time  is not None:
        if otp_valid_until > datetime.now():
            totp = pt.TOTP (otp_secret_key, interval=300)
            if totp.verify(otp,for_time):
                return True,None
            else: 
                return False,"Invalid OTP"
        else: 
            return False,"Expired"
    else: 
        return False,"Error"
    

class CustomAuthentication(BaseAuthentication):
    def authenticate(self, request):

        header= request.META.get('HTTP_AUTHORIZATION').split(' ')
        id_token =header[1] # get the Firebase ID token from the Authorization header
    
        if(header[0]=="Bearer"):      
            try:
                 payload = jwt.decode(id_token, settings.SECRET_KEY, algorithms=['HS256'])
                 print("Bearer",payload)
                 return payload

            except:
                raise AuthenticationFailed('Invalid Firebase ID token')
        elif(header[0]=="Token"):
            try:
                
                payload = jwt.decode(id_token, settings.SECRET_KEY, algorithms=['HS256'])
                eid = payload['eid']
                return (eid, None)
            except jwt.ExpiredSignatureError:
                raise AuthenticationFailed('Token has expired')
            except jwt.InvalidTokenError:
                raise AuthenticationFailed('Invalid token')
        else:
            raise AuthenticationFailed('Invalid token format')
