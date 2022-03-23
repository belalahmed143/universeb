from django.contrib import admin
from .models import ServiceModel
# Register your models here.
class ServiceAdmin(admin.ModelAdmin):
  
  fields = ('name','slug','image','textfiled')
  list_display = ('name',"image_tag")
  readonly_fields = ['image_tag']
  prepopulated_fields = {'slug': ('name',)}

admin.site.register(ServiceModel,ServiceAdmin)  