from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.RegisterUser.as_view()),
    path('user-details/<int:pk>/', views.UserDetails.as_view()),
    ]