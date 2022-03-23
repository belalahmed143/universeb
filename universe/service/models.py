from distutils.command.upload import upload
from statistics import mode
from django.db import models
from django.urls import reverse
from ckeditor_uploader.fields import RichTextUploadingField
from django.utils.html import mark_safe
# Create your models here.
class ServiceModel(models.Model):
  name=models.CharField(max_length=200,unique=True)
  slug=models.SlugField(max_length=200,null=False,unique=True)
  image=models.ImageField(upload_to='photos/service')
  textfiled=RichTextUploadingField(blank=True,null=True)
  def __str__(self):
        return self.name

  def get_url(self):

    return reverse ('servicedetails',kwargs={"servicemodel_slug":self.slug}) 

   
  def image_tag(self):
    return mark_safe('<img src="{}" width="100" height="100" />'.format(self.image.url)) 

  image_tag.short_description = 'Image'
  image_tag.allow_tags=True   

 

  


  