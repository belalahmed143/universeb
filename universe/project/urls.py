from django.urls import path
from . import views
urlpatterns = [
    path('',views.project,name='projectpage'),
    path('gallery/',views.gallery,name='gallerypage'),
    path('projectdetails/<slug:projectmodel_slug>/',views.projectdetails,name='projectdetails')

   

]

