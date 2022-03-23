from django.shortcuts import render
from project.models import FrontSlider
# Create your views here.
def home(request):
  
  return render(request,'home.html')