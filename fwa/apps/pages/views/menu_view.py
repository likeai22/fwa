from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from ..models import Menu
from ..serializer import MenuSerializer


class MenuView(ViewSet):

    def list(self, request):
        queryset = Menu.objects.filter(parent__isnull=True).all()
        return Response(MenuSerializer(queryset, many=True).data)

    def retrieve(self, request, pk=None):
        return Response(MenuSerializer(Menu.objects.get(url=pk)).data)

    @action(methods=['get'], detail=False)
    def start_page(self, request):
        queryset = Menu.objects.all()[0]
        return Response(MenuSerializer(queryset).data)

    @action(methods=['get'], detail=False)
    def list_pk(self, request):
        return Response([el.pk for el in Menu.objects.all()])
