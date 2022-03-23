from django.urls import path
from . import views
urlpatterns = [
    path('contactus/',views.contactus,name='contactus'),
    path('carrer/',views.carrer,name='carrer'),
    path('expert_team/',views.expert_team,name='expert_team'),

    path('carrerdetails/<slug:carrermodel_slug>/',views.carrerdetails,name='carrerdetails'),

    
   
]

