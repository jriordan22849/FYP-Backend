# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-01 16:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0035_remove_post_passcode'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='private',
            field=models.CharField(default='no', max_length=250),
        ),
    ]
