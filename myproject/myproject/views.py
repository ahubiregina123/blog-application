## to render a string or html tag
# from django.http import HttpResponse

## to render a html document
from django.shortcuts import render
from posts.models import Post



def homepage(request):
    # return HttpResponse('<h1> Hello I am Home !</h1>')
    posts = Post.objects.all().order_by('-date').first()
    return render(request, 'home.html', {'post' : posts})

def about(request):
    # return HttpResponse('This is My About page !')
    return render(request, 'about.html') 

def contact(request):
    return render(request,'contact.html')