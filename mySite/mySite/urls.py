"""mySite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
import posts.views
import sitepages.views
import serverside.views
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$',posts.views.home, name = "home"),
    url(r'^posts/(?P<post_id>[0-9]+)/$',posts.views.post_details),
    url(r'^create_survey/',sitepages.views.create_survey, name = "create_survey"),
    url(r'view/',sitepages.views.view_survey, name = "view_survey"),
    url(r'add_question/',sitepages.views.add_questions, name = "add_questions"),
    url(r'^query_survey/',sitepages.views.query_survey, name = "query_survey"),
    url(r'your_name/',sitepages.views.get_name, name = "your_name"),
    url(r'^surveyData/',serverside.views.surveyData, name = "surveyData"),
    url(r'^questionData/',serverside.views.questionData, name = "questionData"),
    url(r'^answerData/',serverside.views.answerData, name = "answerData"),
    url(r'^view_results/',sitepages.views.view_results, name = "view_results"),
    url(r'^post_detail/(?P<post_id>[0-9]+)/$',sitepages.views.post_detail, name="post_detail"),
    url(r'post_answers/',posts.views.postAnswers, name = "postAnswers"),
    url(r'postSurvey/',serverside.views.dataPost, name = "dataPost")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
