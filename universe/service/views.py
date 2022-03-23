from importlib.resources import contents
from django.http import HttpResponse
from django.shortcuts import render
from .models import ServiceModel
def service(request):
  servicedata=ServiceModel.objects.all()
  context={
    'service':servicedata,
    
  }
  
  return render(request,'service.html',context)

def servicedetails(request,servicemodel_slug):

 
  single_product=ServiceModel.objects.get(slug=servicemodel_slug)

  context={
    
    'servicedetail':single_product
  }
  
  return render(request,'servicedetails.html',context)




