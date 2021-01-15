from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import User


class UserRegisterView(APIView):
    """
    Регистрация нового пользователя
    """

    def post(self, request):
        validation = UserValidate(request.data)
        validation.validate()
        validation.user().save()
        return Response({'status': 'OK'}, status=200)


class UserValidate(ValidationError):
    def __init__(self, data):
        self.user_login = data['user_login']
        self.last_name = data['last_name']
        self.first_name = data['first_name']
        self.email = data['email']
        self.password = data['password']
        self.password_confirmation = data['password_confirmation']

    def validate(self):
        try:
            User.objects.get(user_login=self.user_login)
            raise ValidationError({
                'user_login': 'Такой пользователь уже существует'
            })
        except User.DoesNotExist:
            pass
        if self.password != self.password_confirmation:
            raise ValidationError({
                'password': 'Пароли не совпадают',
                'password_confirmation': 'Пароли не совпадают',
            })

    def user(self):
        user = User(
            user_login=self.user_login,
            email=self.email,
            last_name=self.last_name,
            first_name=self.first_name
        )
        user.set_password(self.password)
        return user
