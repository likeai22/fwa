from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    """
    Серализавтор для пользователя
    """
    class Meta:
        model = User
        fields = ('pk', 'user_login', 'email', 'first_name', 'last_name',)
