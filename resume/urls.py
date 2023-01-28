from unicodedata import name
from django.urls import path, include

from . import views

app_name = 'resume'
urlpatterns = [
    path('', views.index, name='index'),
    path('index/', views.index, name='index'),
]