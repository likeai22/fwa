# Generated by Django 3.1.5 on 2021-01-15 05:15

from django.db import migrations
import fwa.core.managers.user_managers


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20210115_0158'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='user',
            managers=[
                ('objects', fwa.core.managers.user_managers.UserManager()),
            ],
        ),
    ]