from rest_framework import serializers
from ..models import Menu


class MenuSerializer(serializers.ModelSerializer):

    children = serializers.SerializerMethodField()

    class Meta:
        model = Menu
        fields = ('pk', 'title', 'url', 'children', )

    def get_children(self, obj):
        return [MenuSerializer(el).data for el in Menu.objects.filter(parent=obj).all()]
