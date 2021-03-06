from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.utils import timezone
from .forms import NameForm
import posts.models
from posts.models import Question
from posts.models import Answers
from posts.models import Post
from posts.models import Response
import json
from chartit import DataPool, Chart
from django.contrib.auth.decorators import login_required
import accounts.views

   
def view_results(request):
    return HttpResponse("")


# user must be logged in to search for surveys
def query_survey(request):
	if request.user.is_authenticated():
		query = request.POST.get('search_surveys', "")
		# search for results that contain a string. Pass the results back to the home page.
		posts = Post.objects.filter(title__icontains= query)
		return render(request,'posts/home.html', {'posts':posts})
	else:
		return render(request,'accounts/login.html', {'error':'To search for a survey, please login.'})


#user must be logged in to biew the results of a survey
def post_detail(request, post_id):
    if request.user.is_authenticated():

        obj = Post.objects.get(pk=post_id)
        questions = Question.objects.filter(surveybelongto=obj.title).values()
        answers = Answers.objects.filter(surveyTitle = obj.title).values()
        #response = Response.objects.filter(survey = obj.title).values()
        #response = Response.objects.filter(survey = obj.title).values()
            
        response = Response.objects.filter(survey = obj.title).values()
        #print(response)
        return render(request, 'sitepages/results.html',{'obj':obj, 'questions':questions, 'answers':answers, 'response':response} )

    else:
        return render(request,'accounts/login.html', {'error':'To view the survey results, please login.'})

def get_name(request):
    # if this is a POST request we need to process the form data
  
    return render(request, 'sitepages/name.html')

def surveyProcess(request):
    return HttpResponse("success")

def create_survey(request):
    return render(request, 'sitepages/create_survey.html')

def view_survey(request):
    return HttpResponse("Woofghdfgla")


def add_questions(request):
    i = 1
    j = 1

    answers = []
    if request.method == "POST":
        if request.POST["surveyName"]:
            if Post.objects.filter(title=request.POST["surveyName"]).exists():
                print("It does exist")
                return HttpResponse("Survey Title: " + request.POST["surveyName"] + " already exists")
            else:
                print("it doesnt exist")
            questionCounter = request.POST.get('numquestion', False)
            questionNumber = request.POST.get('questionNumber', False)
            ansNumber = request.POST.get('ans',False)
            privateSelected = request.POST.get('privateRadio',"no")
            passcodeEntered = request.POST.get('miakePrivateText',"code")
            print("Private selected " + privateSelected)
            print("Passcode entered " + passcodeEntered)



            #print("\n\n\nNumber of answers " + str(ansNumber))

            # save the survey title and information regarding the survey to the database.
            survey = posts.models.Post()
            survey.title = request.POST["surveyName"]
            survey.dateSurvCreated = timezone.datetime.now()
            survey.numOfQuestions = str(questionCounter)
            survey.numOfTimesCompleted = str(0)
            survey.private = privateSelected
            survey.passcode = passcodeEntered


            print("\n\n\nSurvey Title: " + survey.title)
            survey.save()

            # Save the question label to the database.
            while i <= int(questionCounter): 
                #print("\n\n\nNumber of questions in the survey " + questionCounter);
                numAns = 0
                question = posts.models.Question()  
                question.questionLabel = request.POST.get("Question" + str(i),False)
                question.surveybelongto = survey.title
                question.questionNumber = i
                question.numberOfAnswers = request.POST.get("ans" + str(i),"0")
                print("Question " + str(i) + " Title: " + question.questionLabel);
                print("Number of answers for question " + str(i) + " is: " + question.numberOfAnswers)

                while j <= int(question.numberOfAnswers):
                    ans = posts.models.Answers()
                    ans.answerID = str(j)
                    ans.questionNumber = i
                    ans.surveyTitle = survey.title 
                    ans.questionLabel = question.questionLabel
                    ans.questionType = request.POST.get("questionType" + str(i), "No Choice")
                    #print("Python questionType" + str(i))
                    print("Question " + str(i) + " type: " + ans.questionType)

                    if ans.questionType == "multiple":
                        print("Question " + str(i) + " type: " + ans.questionType)
                        ans.answerLabel = request.POST.get("question"+str(i)+"Answer"+str(j),"False")
                        print("Answer Option " + str(j) + " : " + ans.answerLabel)
                        numAns = j

                    if ans.questionType == "checkBox":
                        print("Question " + str(i) + " type: " + ans.questionType)
                        ans.answerLabel = request.POST.get("question"+str(i)+"Answer"+str(j),"False")
                        print("Answer Option " + str(j) + " : " + ans.answerLabel)
                        numAns = j

                    if ans.questionType == "images":
                        print("optionSelected"+str(i) + "Option"+str(j))
                        ans.urlForImage = request.POST.get("question"+str(i)+"Image"+str(j), "No URL")
                        ans.answerLabel = request.POST.get("question"+str(i)+"Image"+str(j), "No URL")
                        print("Url " +ans.urlForImage)

                    if ans.questionType == "scale":
                        if j == 1:
                            print("scaleValueMin"+str(i))
                            ans.scaleMinimum = request.POST.get("scaleValueMin"+str(i), "1")
                            ans.scaleMaximum = request.POST.get("scaleValueMax"+str(i), "1")
                            print("Mimimum value: " + str(ans.scaleMinimum))
                        if j == 2:
                            print("scaleValueMax"+str(i))
                            ans.scaleMinimum = request.POST.get("scaleValueMin"+str(i), "1")
                            ans.scaleMaximum = request.POST.get("scaleValueMax"+str(i), "1")
                            print("Mimimum value: " + str(ans.scaleMaximum))

                    if ans.questionType == "date":
                        print("Question " + str(i) + " type: " + ans.questionType)
                    
                    if ans.questionType == "time":
                        print("Question " + str(i) + " type: " + ans.questionType)

                    if ans.questionType == "text":
                        print("Question " + str(i) + " type: " + ans.questionType)

                    ans.save()
                    j += 1

                #question.numberOfAnswers = numAns + 1
                #print("Print questionNumber " + str(i))
                question.save()
                j = 1
                i += 1
            

            # Pass the the entered survey information to preview.html. Get the survey by the id of the survey.
            obj = Post.objects.get(pk =survey.id)
            questions = Question.objects.filter(surveybelongto=obj.title).values()
            answers = Answers.objects.filter(surveyTitle = obj.title).values()

            return render(request, 'sitepages/preview.html',{'obj':obj, 'questions':questions, 'answers':answers} )
        else:
            return render(request, 'sitepages/create_survey.html')
    else:
        return render(request, 'sitepages/create_survey.html')