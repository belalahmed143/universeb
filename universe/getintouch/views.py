from django.shortcuts import render,redirect
from .models import Employee,CarrerModel,ContactUs
from fromdata.models import Application
from django.contrib import messages
# Create your views here.
def contactus(request):
  contactdata=ContactUs.objects.all()
  context={
    'contact':contactdata,
    
  }



  return render(request,'getintouch/contactus.html',context)


def carrer(request):

  carrerdata=CarrerModel.objects.all()
  context={
    'carrerdata':carrerdata,
    
  }
  return render(request,'getintouch/carrer.html',context) 

def carrerdetails(request,carrermodel_slug):

 
  single_job=CarrerModel.objects.get(slug=carrermodel_slug)

  if request.method=='POST':

    name=request.POST['name']
    phone=request.POST['phone']
    email=request.POST['email']
    expected_salary=request.POST['expected_salary']
    resume=request.FILES['resume']
    message=request.POST.get('message', True)
    apply=request.POST['apply']
    

    user=Application(name=name,phone=phone,email=email,expected_salary=expected_salary,message=message,resume=resume,apply=apply)
    
    user.save()
    messages.success(request, "data send" )

  

    

  context={
    
    'single_job':single_job
  }
  
  return render(request,'getintouch/carrerdetails.html',context)     

def expert_team(request):
  demo=Employee.objects.all()
  context={
    'demo':demo
  }
  return render(request,'getintouch/expert_team.html',context)    



  
  

  


