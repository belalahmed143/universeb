from .models import ProjectModel

def menu_links(request):
    pro=ProjectModel.objects.all().order_by('-id')
    return dict(pro=pro)
