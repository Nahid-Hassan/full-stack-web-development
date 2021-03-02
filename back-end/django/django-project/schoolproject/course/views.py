from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(request):
    return HttpResponse("<h1>Index Page</h1>")


def home(request):
    context = "<h1>Home Page</h1>"
    return HttpResponse(context)


def learn_math(request):
    a = 10 + 200
    return HttpResponse(a)
