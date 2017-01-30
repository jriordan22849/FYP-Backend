from django.db import models
from datetime import date
# Create your models here.

class Survey(models.Model):
	title = models.CharField(max_length = 250)
	dateSurvCreated = models.DateTimeField(default=date.today, blank=True)
	numOfQuestions = models.DecimalField(max_digits=5, decimal_places=2, default = '1')
	numOfTimesCompleted = models.DecimalField(max_digits=5, decimal_places=2, default = '1')

