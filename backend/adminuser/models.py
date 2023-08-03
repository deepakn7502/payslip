from django.db import models
from django.contrib.auth.models import AbstractUser



# class employee(models.Model):
    
    
  
  
#     eid = models.CharField(max_length=50,primary_key=True)
#     password = models.CharField(max_length=50)
#     name = models.CharField(max_length=50)
#     desg = models.CharField(max_length=50)
#     dept = models.CharField(max_length=20)    
#     mail = models.EmailField(max_length=254)
      
  

    # def __str__(self):
    #     return self.eid

class employee(AbstractUser):
    eid = models.CharField(max_length=50,primary_key=True)
    designation = models.CharField(max_length=50)
    department = models.CharField(max_length=20)    
    phoneno = models.IntegerField(max_length=10)
    
    def __str__(self):
        return self.eid
class receipt(models.Model):
    rid = models.CharField(max_length=50,primary_key=True)
    hra=models.IntegerField()
    da=models.IntegerField()
    net=models.IntegerField()
    lop=models.IntegerField()
    gross=models.IntegerField()
    month= models.CharField(max_length=50)
    status = models.BooleanField(default=False)
    eid = models.ForeignKey(
        employee,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.rid

