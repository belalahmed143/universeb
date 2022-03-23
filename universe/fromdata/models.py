from email import message
from statistics import mode
from django.db import models

# Create your models here.

from getintouch.models import CarrerModel

# Create your models here.
class SomeMessage(models.Model):
  name=models.CharField(max_length=200,blank=True)
  number=models.CharField(max_length=12,blank=True)
  email=models.EmailField()
  address=models.CharField(max_length=300)
  message=models.TextField()


  def __str__(self):
        return self.email

class Application(models.Model):
  
  name=models.CharField(max_length=200,blank=True)
  apply=models.CharField(max_length=200,blank=True)
  phone=models.CharField(max_length=12,blank=True)
  email=models.EmailField()
  expected_salary=models.CharField(max_length=300)
  resume=models.FileField(upload_to='resume/cv')
  message=models.TextField()

 




  def __str__(self):
        return self.name +" "+self.apply

