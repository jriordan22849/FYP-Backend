# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-07 10:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0041_response'),
    ]

    operations = [
        migrations.AddField(
            model_name='response',
            name='answerCounter',
            field=models.IntegerField(default=b'0'),
        ),
    ]
