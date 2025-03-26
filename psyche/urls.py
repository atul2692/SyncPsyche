from django.urls import path
from .views import *  # Import the view function

urlpatterns = [
    path('', home_view, name='home'),
    path('login/', login_view, name='login'),  
    path('sign_up/', signup_view, name='sign_up'),
]
