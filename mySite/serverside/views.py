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
from django.views.decorators.csrf import csrf_exempt


# Convert the survey data to json
def surveyData(request):
	survey = serializers.serialize('json', Post.objects.all())
	#print('{ "data": '+survey+'}')
	return HttpResponse('{ "data": '+survey+'}')

# Convert the question data to json
def questionData(request):
	question = serializers.serialize('json', Question.objects.all())
	return HttpResponse('{ "data": '+question+'}')

# Convert the answer data to json
def answerData(request):
	answers = serializers.serialize('json', Answers.objects.all())
	return HttpResponse('{ "data": '+answers+'}')
	
@csrf_exempt 
def dataPost(request):
	survey = Post.objects.all()
	increment = 1
	if request.method == "POST":
		#received_json_data = json.loads(request.body)
		received_json_data = json.dumps(json.loads(request.body))
		splitJson = ""
		splitJson = received_json_data.split(",")
		
		#remove characters from the string and check to see if the survey title exists, if so, update the times completed by plus one
		splitJson[0] = splitJson[0].replace("[","")
		splitJson[0] = splitJson[0].replace('"',"")
		print("Survey title: " + splitJson[0])
		
	    # increment the numbe rof times competed by one if the survey title exists. 
	    # Update the value in the Post model.
		if Post.objects.filter(title=splitJson[0]).exists():
			print 'Survey title exist'
			survey = Post.objects.get(title = splitJson[0])
			survey.numOfTimesCompleted = survey.numOfTimesCompleted + increment
			survey.save()

		

			
		#print(received_json_data)
	return HttpResponse({'received data': request})