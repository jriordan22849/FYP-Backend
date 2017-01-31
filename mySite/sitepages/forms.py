from django import forms
from django.db import models


class NameForm(forms.Form):
    your_name = forms.CharField(label='Your name: ', max_length=100)
    question = forms.CharField(label='Enter Question: ', max_length=100)


