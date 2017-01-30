from django import forms
from django.db import models


class NameForm(forms.Form):
    your_name = forms.CharField(label='Your name: ', max_length=100)
    question = forms.CharField(label='Enter Question: ', max_length=100)


class Survey(forms.Form):
    title = models.CharField(max_length = 250)
    dateSurvCreated = models.DateTimeField()
    numOfQuestions = models.DecimalField(max_digits=5, decimal_places=2, default = '1')
    numOfTimesCompleted = models.DecimalField(max_digits=5, decimal_places=2, default = '1')

