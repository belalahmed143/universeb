from django.db import models

# Create your models here.
class BoardOF(models.Model):
  name=models.CharField(max_length=200)
  postName=models.CharField(max_length=200,null=True,blank=True)
  image=models.ImageField(upload_to='photos/Boardofdirectors')

  def __str__(self):
    return self.name

class MessageFromMd(models.Model):
  name=models.ForeignKey(BoardOF,on_delete=models.CASCADE)
  text=models.TextField()

  


  def __unicode__(self):
        return self.name

