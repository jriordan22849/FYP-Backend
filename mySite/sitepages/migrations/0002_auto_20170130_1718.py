# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-30 17:18
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sitepages', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='survey',
            name='dateSurvCreated',
            field=models.DateTimeField(blank=True, default=datetime.date.today),
        ),
        migrations.AddField(
            model_name='survey',
            name='numOfQuestions',
            field=models.DecimalField(decimal_places=2, default='1', max_digits=5),
        ),
        migrations.AddField(
            model_name='survey',
            name='numOfTimesCompleted',
            field=models.DecimalField(decimal_places=2, default='1', max_digits=5),
        ),
    ]
