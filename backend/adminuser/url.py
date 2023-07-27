
from django.urls import path,include
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
# router = routers.SimpleRouter()
router.register(r'validate', employees)
router.register(r'receipt', receipts)

    

urlpatterns = [
    path("login/", login.as_view()),
    # path("validate/", employees.as_view()),

] + router.urls