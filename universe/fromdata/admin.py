

# Register your models here.
from django.contrib import admin
from .models import SomeMessage,Application
# Register your models here.
class MessageAdmin(admin.ModelAdmin):
  list_display = ('name','email','address','number','message')
admin.site.register(SomeMessage,MessageAdmin)  


class ApplicationAdmin(admin.ModelAdmin):
  list_display = ('name','email','apply','resume')
admin.site.register(Application,ApplicationAdmin)  

