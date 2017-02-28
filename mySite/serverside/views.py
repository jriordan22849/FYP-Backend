from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.utils import timezone
import posts.models
from posts.models import Question
from posts.models import Answers
from posts.models import Post
import json
from django.http import HttpResponse
from django.core import serializers


# Convert the survey data to json

def surveyData(request):
	if request.method == "POST":
		survey = serializers.serialize('json', Post.objects.all())
		print(survey)
		return HttpResponse('{ "data": '+survey+'}')
	else:
		return HttpResponse("No data")

# Convert the question data to json
def questionData(request):
	question = serializers.serialize('json', Question.objects.all())
	return HttpResponse('{ "data": '+question+'}')

# Convert the answer data to json
def answerData(request):
	answers = serializers.serialize('json', Answers.objects.all())
	return HttpResponse('{ "data": '+answers+'}')