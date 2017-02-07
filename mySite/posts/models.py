from django.db import models


# Create your models here.
class Post(models.Model):
	title = models.CharField(max_length = 250)
	dateSurvCreated = models.DateTimeField()
	numOfQuestions = models.IntegerField( default = '1')
	numOfTimesCompleted = models.IntegerField( default = '1')


	def __str__(self):
		return self.title

	def dateFormat(self):
		return self.dateSurvCreated.strftime('%b %e %Y')

	
class Question(models.Model):
	questionLabel = models.CharField(max_length = 250)
	surveybelongto = models.CharField(max_length = 250, default = "survey")
	questionNumber = models.IntegerField( default = '1')
	numberOfAnswers = models.IntegerField( default = '1')


class Answers(models.Model):
	answerID = models.CharField(max_length = 250)
	answerLabel = models.CharField(max_length = 250, default = "answer")
	questionNumber = models.IntegerField( default = '1')
	surveyTitle = models.CharField(max_length = 250, default = "survey")
	questionLabel = models.CharField(max_length = 250, default = "survey")
	questionType = models.CharField(max_length = 250, default = "Question type")
	scaleMinimum = models.IntegerField( default = '1')
	scaleMaximum = models.IntegerField( default = '1')
	urlForImage = models.CharField(max_length = 250, default = "URL")






