# Generated by Django 4.0.2 on 2022-02-23 16:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('getintouch', '0003_alter_carrermodel_sallery'),
        ('fromdata', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200)),
                ('phone', models.CharField(blank=True, max_length=12)),
                ('email', models.EmailField(max_length=254)),
                ('expected_salary', models.CharField(max_length=300)),
                ('resume', models.FileField(upload_to='resume/cv')),
                ('message', models.TextField()),
                ('carrer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='getintouch.carrermodel')),
            ],
        ),
    ]
