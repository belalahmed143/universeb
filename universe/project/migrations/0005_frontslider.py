# Generated by Django 4.0 on 2022-03-02 06:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0004_alter_projectmodel_slug'),
    ]

    operations = [
        migrations.CreateModel(
            name='FrontSlider',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='photos/FrontSlider')),
            ],
        ),
    ]
