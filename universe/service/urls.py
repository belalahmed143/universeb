
from django.urls import path
from . import views
urlpatterns = [
    path('',views.service,name='servicepage'),
    path('servicedetails/<slug:servicemodel_slug>/',views.servicedetails,name='servicedetails')
    
]