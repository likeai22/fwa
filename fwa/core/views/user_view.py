from rest_framework.views import APIView
from rest_framework import authentication
from rest_framework.response import Response
from ..serializers import UserSerializer


class UserView(APIView):
    authentication_classes = (authentication.TokenAuthentication,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
