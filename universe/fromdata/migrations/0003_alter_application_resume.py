# Generated by Django 4.0.2 on 2022-02-23 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fromdata', '0002_application'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='resume',
            field=models.FileField(blank=True, null=True, upload_to='resume/cv'),
        ),
    ]
