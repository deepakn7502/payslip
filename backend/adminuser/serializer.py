from rest_framework import serializers

class emp_serialzer(serializers.Serializer):
    eid = serializers.CharField(max_length=20,primary_key=True)
    password = serializers.CharField(max_length=50,null=True)
    name = serializers.CharField(max_length=50,null=True)
    desg = serializers.CharField(max_length=50,null=True)
    dept = serializers.CharField(max_length=20,null=True)    
    mail = serializers.EmailField(max_length=254,null=True)

class rep_serialzer(serializers.Serializer):
    hra=serializers.IntegerField()
    da=serializers.IntegerField()
    net=serializers.IntegerField()
    los=serializers.IntegerField()
    gross=serializers.IntegerField()