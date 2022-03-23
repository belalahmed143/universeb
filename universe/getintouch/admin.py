from django.contrib import admin
from .models import Employee,CarrerModel,ContactUs
# Register your models here.
class EmployeeAdmin(admin.ModelAdmin):
  list_display = ('name',)
admin.site.register(Employee,EmployeeAdmin)  

class CarrerEmployeeAdmin(admin.ModelAdmin):
  list_display = ('job_post','sallery','postedat')
admin.site.register(CarrerModel,CarrerEmployeeAdmin)  

class contactusAdmin(admin.ModelAdmin):
  list_display = ('road','address','postcode')
admin.site.register(ContactUs,contactusAdmin)  



