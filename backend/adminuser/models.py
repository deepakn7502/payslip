from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password


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
    # phoneno = models.CharField(max_length=10)
    acc_no = models.CharField(max_length=25)
    bank = models.CharField(max_length=50)
    branch = models.CharField(max_length=50)
    pan  = models.CharField(max_length=20)
    uan  = models.IntegerField()
   
    
   
                              


    # def save(self, *args, **kwargs):
    #     # Hash the password using make_password
    #     self.password = make_password(self.password)
    #     self.username = self.eid
    #     super(employee, self).save(*args, **kwargs)

    def __str__(self):
        return self.eid
class receipt(models.Model):
    # rid = models.CharField(max_length=50,primary_key=True)

    basic = models.IntegerField()
    lop=models.IntegerField()
    basic1 = models.IntegerField()
    hra=models.IntegerField()
    da=models.IntegerField()
    
    # gross=models.IntegerField()
    
    pf=  models.IntegerField()
    pt=  models.IntegerField()
    it=  models.IntegerField()
    miscellaneous=  models.IntegerField()
    esi=  models.IntegerField()
    deductions=  models.IntegerField()
    total_deductions=  models.IntegerField()
    total_earnings=  models.IntegerField()
    net_salary=  models.IntegerField()

    month= models.CharField(max_length=50)
    status = models.BooleanField(default=False)

    eid = models.ForeignKey(
        employee,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.eid

