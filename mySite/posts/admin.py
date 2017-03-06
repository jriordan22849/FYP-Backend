from django.contrib import admin
from .models import Post
from .models import Question
from .models import Answers
from .models import Response


# Register your models here.
admin.site.register(Post)
admin.site.register(Question)
admin.site.register(Answers)
admin.site.register(Response)