# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-02 14:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0008_auto_20170202_1338'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='question',
            field=models.CharField(max_length=250),
        ),
    ]
