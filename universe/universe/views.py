from django.contrib import messages
from os import rename
from django.http import HttpResponse
from django.shortcuts import redirect, render
from service.models import ServiceModel
from fromdata.models import SomeMessage
from project.models import FrontSlider
def home(request):
  servicedata=ServiceModel.objects.all().order_by('-id')
  fromdes=FrontSlider.objects.all()
 

  
  if request.method=='POST':

    name=request.POST['name']
    number=request.POST['number']
    email=request.POST['email']
    address=request.POST['address']
    message=request.POST['message']
    

    user=SomeMessage(name=name,number=number,email=email,address=address,message=message)
    
    
    user.save()
    messages.success(request, "message send" )

    return redirect('homepage')

  else:    

  



    context={
    'data':servicedata,
    'slider':fromdes,
  }
  
    return render(request,'home.html',context)