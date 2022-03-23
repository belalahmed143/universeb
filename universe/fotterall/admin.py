from django.contrib import admin
from .models import BoardOF,MessageFromMd
# Register your models here.
class BoardEmployeeAdmin(admin.ModelAdmin):
  list_display = ('name',)
admin.site.register(BoardOF,BoardEmployeeAdmin)  

class messageadmin(admin.ModelAdmin):
  list_display = ('name','text')
admin.site.register(MessageFromMd,messageadmin)  
