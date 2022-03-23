from django.shortcuts import render
from .models import BoardOF,MessageFromMd
# Create your views here.
def board_of_directors(request):
  board=BoardOF.objects.all()
  context={
    "board":board
  }
  return render(request,'footerpart/board_of_directors.html',context)


def mission_vission(request):

  return render(request,'footerpart/mission_vission.html')


def history_milestones(request):

  return render(request,'footerpart/history_milestones.html')  



def corporate_speech(request):

  messagemd=MessageFromMd.objects.all()

  context={
    "messagemd":messagemd
  }

  return render(request,'footerpart/corporate_speech.html',context)  

def board_meetings_agm(request):

  return render(request,'footerpart/board_meetings_agm.html')  


def corporate_governance(request):

  return render(request,'footerpart/corporate_governance.html')  



def report_statements(request):

  return render(request,'footerpart/report_statements.html')  



def notice(request):

  return render(request,'footerpart/notice.html')    

def news_events(request):

  return render(request,'footerpart/news_events.html')      


def advertisements(request):

  return render(request,'footerpart/advertisements.html')        

def corporate_soical(request):

  return render(request,'footerpart/corporate_soical.html')          