from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics,status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.decorators import authentication_classes, permission_classes, api_view


# Create your views here.

class RegisterUser(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UsersSerializer

class UserDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UsersSerializer
    
