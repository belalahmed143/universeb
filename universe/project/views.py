from multiprocessing import context
from django.http import HttpResponse
from django.shortcuts import render
from .models import galleryModel,ProjectModel

def projectdetails(request,projectmodel_slug):

 
  single_project=ProjectModel.objects.get(slug=projectmodel_slug)

  context={
    
    'single_project':single_project
  }
  
  return render(request,'projectdetails.html',context)  




def project(request):
  servicedata=ProjectModel.objects.all()
  context={
    'project':project,
    
  }
  
  return render(request,'project.html',context)
def gallery(request):

  demo=galleryModel.objects.all()
  context={
    'demo':demo
  }
  return render(request,'gallery.html',context)  