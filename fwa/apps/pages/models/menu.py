import uuid
from django.db import models


class Menu(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    body = models.TextField()
    sort = models.IntegerField(default=0)
    create_at = models.DateTimeField(auto_now_add=True)

    parent = models.ForeignKey('self', null=True, on_delete=models.CASCADE)

    class Meta:
        ordering = ['sort']
