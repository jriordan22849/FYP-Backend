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
from csv import reader
from posts.models import Response



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
	
# function to handle the post from the ios application
@csrf_exempt 
def dataPost(request):
	titleBool = False
	quesBool = False
	ansBool = False
	length = 0
	index = 0
	survey = Post.objects.all()
	increment = 1
	if request.method == "POST":
		#received_json_data = json.loads(request.body)
		received_json_data = json.dumps(json.loads(request.body))
		
		splitJson = received_json_data.split(", ")
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
	
		for char in '[]"':  
			received_json_data = received_json_data.replace(char,'')  
		print("Received data " + received_json_data)
		my_list = received_json_data.split(",")
		print("my list " + str(my_list))
		
		length = (len(my_list))
		print("Length of my list " + str(length))
		
		#iterate through data
		while(index < length):
			response = posts.models.Response()  
			if index == 0:
				print("Survey title " +my_list[index])
				title = str(my_list[index])
				titleBool = True
			
			elif index % 2 == 0:
				#Answer title
				response.answer = my_list[index]
				quesBool = True
				print("Response answer: " + response.answer)
				
			elif index % 2 == 1:
				#Question title
				question = str(my_list[index])
				ansBool = True
				
				
			if titleBool and quesBool and ansBool:
				fixed = question[1:]
				print("Response question:" + fixed)
				response.question = fixed
				response.survey = title
				response.save()
				quesBool = False
				ansBool = False
				
			
			
			
			index = index  + 1
		
		
	return HttpResponse({'received data': request})