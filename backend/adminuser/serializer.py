from rest_framework import serializers
from .models import *
class emp_serialzer(serializers.ModelSerializer):

    # eid = serializers.CharField(max_length=20)
    # password = serializers.CharField(max_length=50)
    # name = serializers.CharField(max_length=50)
    # desg = serializers.CharField(max_length=50)
    # dept = serializers.CharField(max_length=20)    
    # mail = serializers.EmailField(max_length=254)
    class Meta:
        model = employee
        fields = '__all__' 

class rep_serialzer(serializers.ModelSerializer):

    # hra=serializers.IntegerField()
    # da=serializers.IntegerField()
    # net=serializers.IntegerField()
    # los=serializers.IntegerField()
    # gross=serializers.IntegerField()
    
    # eid_id = emp_serialzer()

    class Meta:
        model = receipt
        fields = '__all__' 
