from django.conf import settings
from django.db import models


class XYZ(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    description = models.TextField(
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
    )
