# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-06 15:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0020_auto_20170203_1826'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='numberOfAnswers',
            field=models.IntegerField(default='1'),
        ),
    ]
