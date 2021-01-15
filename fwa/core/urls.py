from django.urls import path
from .views import UserView, UserRegisterView, UserAuthView, Logout

urlpatterns = [
    path('login', UserAuthView.as_view()),
    path('logout', Logout.as_view()),
    path('register', UserRegisterView.as_view()),
    path('user', UserView.as_view()),
]