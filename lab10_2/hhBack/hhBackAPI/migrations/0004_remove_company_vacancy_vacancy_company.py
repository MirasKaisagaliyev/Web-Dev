# Generated by Django 4.1.7 on 2023-04-10 09:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hhBackAPI', '0003_remove_vacancy_company_company_vacancy'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='company',
            name='vacancy',
        ),
        migrations.AddField(
            model_name='vacancy',
            name='company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='hhBackAPI.company'),
        ),
    ]
