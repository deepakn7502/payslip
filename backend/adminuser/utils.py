from django.conf import Settings
from django.core.mail import send_mail

from datetime import datetime,timedelta
import pyotp as pt

def send_otp(request):
    totp = pt. TOTP (pt.random_base32(), interval=60)
    otp = totp.now()
    request.session ['otp_secret_key'] = totp.secret
    request.session ['for_time'] = str(datetime.now())

    subject = 'OTP Verification'
    message = f'Your OTP for email verification is: {otp}'
    from_email = 'your_email@example.com'
    recipient_list = [request.data["email"]]

    send_mail(subject, message, from_email, recipient_list)

    return otp

def verify_otp(request):
    
    otp= request.data["otp"]
    otp_secret_key = request.session ['otp_secret_key']
    for_time= datetime.fromisoformat (request.session ['for_time']) 
    otp_valid_until= for_time + timedelta (seconds=60)
    if otp_secret_key and for_time  is not None:
        if otp_valid_until > datetime.now():
            totp = pt.TOTP (otp_secret_key, interval=60)
            if totp.verify(otp,for_time):
                return "Password Changed"
            else: 
                return "Invalid OTP"
        else: 
            return "Expired"
    else: 
        return "Error"