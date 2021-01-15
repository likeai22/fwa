import uuid
from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from ..managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    """
    Модель пользователя
    """
    uid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_login = models.CharField(max_length=50, unique=True)
    email = models.EmailField(default=None, null=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = 'user_login'
    REQUIRED_FIELDS = []

    class Meta:
        db_table = 'users'

    @property
    def get_full_name(self):
        return '%s %s' % (self.first_name, self.last_name)
