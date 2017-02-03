# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-03 18:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0019_answers_questiontype'),
    ]

    operations = [
        migrations.AddField(
            model_name='answers',
            name='scaleMaximum',
            field=models.IntegerField(default='1'),
        ),
        migrations.AddField(
            model_name='answers',
            name='scaleMinimum',
            field=models.IntegerField(default='1'),
        ),
        migrations.AddField(
            model_name='answers',
            name='urlForImage',
            field=models.CharField(default='URL', max_length=250),
        ),
    ]