from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework import authentication
from rest_framework.response import Response
from rest_framework.views import APIView


class UserAuthView(ObtainAuthToken):
    authentication_classes = (authentication.TokenAuthentication,)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data,
            context={'request': request}
        )
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        else:
            return Response({
                'errors': {
                    'login': 'Логин или пароль заданы неверно',
                    'password': 'Логин или пароль заданы неверно'
                }
            }, status=403)


class Logout(APIView):
    authentication_classes = (authentication.TokenAuthentication,)

    def post(self, request):
        user = request.user
        Token.objects.filter(user=user).delete()
        return Response(status=200)
