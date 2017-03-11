from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from .models import Post
import json
from django.contrib.auth.models import User
from django.contrib.auth import login,authenticate,logout

# Create your views here.
def home(request):
    posts = Post.objects.order_by('title')
    return render(request,'posts/home.html', {'posts':posts})


def post_details(request, post_id):
    current_user = request.user
    print("Logged in user " + current_user)
    post = get_object_or_404(Post, pk = post_id)
    return render(request, 'posts/post_details.html',{'post':post})


def postAnswers(request):
    if request.method == 'POST':
        request_data=json.loads(request.POST['root'])
        products=request_data['prodDic']
        for key in products:
            value=products[key]
            #do my stuff
            return HttpResponse("Done")
    else:
    	return HttpResponse("No Data")
    
    