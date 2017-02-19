# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-02-19 16:23
from __future__ import unicode_literals

from django.db import migrations
import django_enumfield.db.fields
import foodsaving.audit.models


class Migration(migrations.Migration):

    dependencies = [
        ('audit', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='audit',
            name='type',
            field=django_enumfield.db.fields.EnumField(default=0, enum=foodsaving.audit.models.AuditTypus),
        ),
    ]
