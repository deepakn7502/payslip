from django.db import models

# Create your models here.

class employee(models.Model):

    eid = models.CharField(max_length=20,primary_key=True)
    password = models.CharField(max_length=50,null=True)
    name = models.CharField(max_length=50,null=True)
    desg = models.CharField(max_length=50,null=True)
    dept = models.CharField(max_length=20,null=True)    
    mail = models.EmailField(max_length=254,null=True)

    def __str__(self):
        return self.eid


class receipt(models.Model):
    rid = models.AutoField(primary_key=True)
    hra=models.IntegerField()
    da=models.IntegerField()
    net=models.IntegerField()
    los=models.IntegerField()
    gross=models.IntegerField()
   
    def __str__(self):
        return self.rid