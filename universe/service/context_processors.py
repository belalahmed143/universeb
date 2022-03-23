from .models import ServiceModel

def menu_links(request):
    links=ServiceModel.objects.all().order_by('-id')
    return dict(links=links)
