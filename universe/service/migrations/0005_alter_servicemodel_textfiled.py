# Generated by Django 4.0 on 2022-03-02 05:55

import ckeditor_uploader.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0004_servicemodel_textfiled'),
    ]

    operations = [
        migrations.AlterField(
            model_name='servicemodel',
            name='textfiled',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True),
        ),
    ]