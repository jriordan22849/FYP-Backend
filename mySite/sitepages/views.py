from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.utils import timezone
from .forms import NameForm
import posts.models


def get_name(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = NameForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return HttpResponseRedirect('/thanks/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = NameForm()

    return render(request, 'sitepages/name.html',{'form':form} )

def surveyProcess(request):
    return HttpResponse("success")


def create_survey(request):
    return render(request, 'sitepages/create_survey.html')

def view_survey(request):
    return HttpResponse("Woofghdfgla")

def add_questions(request):
    if request.method == "POST":
        if request.POST["surveyName"]:
            survey = posts.models.Post()
            survey.title = request.POST["surveyName"]
            survey.dateSurvCreated = timezone.datetime.now()
            survey.numOfQuestions = 1
            survey.numOfTimesCompleted = 1
            survey.save()
            return render(request, 'sitepages/addQuestions.html', {'survey': survey})
        else:
            return render(request, 'sitepages/create_survey.html')
    else:
        return render(request, 'sitepages/create_survey.html')
