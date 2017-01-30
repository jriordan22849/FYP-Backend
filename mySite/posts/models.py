from django.db import models

# Create your models here.
class Post(models.Model):
	title = models.CharField(max_length = 250)
	dateSurvCreated = models.DateTimeField()
	numOfQuestions = models.DecimalField(max_digits=5, decimal_places=2, default = '1')
	numOfTimesCompleted = models.DecimalField(max_digits=5, decimal_places=2, default = '1')


	def __str__(self):
		return self.title

	def dateFormat(self):
		return self.dateSurvCreated.strftime('%b %e %Y')

	
class Question(models.Model):
	questionLabel = models.CharField(max_length = 250)