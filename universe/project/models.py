
# Create your models here.
from distutils.command.upload import upload
from django.db import models
from django.urls import reverse
# Create your models here.
class ProjectModel(models.Model):
  name=models.CharField(max_length=200)
  slug=models.SlugField(max_length=200,null=False,unique=True)
  image=models.ImageField(upload_to='photos/project')
  desc=models.TextField()


  def __str__(self):
        return self.name
  def get_url(self):

    return reverse ('projectdetails',kwargs={"projectmodel_slug":self.slug}) 




class galleryModel(models.Model):
  
  image=models.ImageField(upload_to='photos/gallery')
      
class FrontSlider(models.Model):

  image=models.ImageField(upload_to='photos/FrontSlider')