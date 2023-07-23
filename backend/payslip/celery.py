from __future__ import absolute_import,unicode_literals
from celery import Celery
from django.conf import settings

import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "payslip.settings")

app=Celery("payslip")
app.conf.enable_utc = False

app.conf.update(timezone = "Asia/Kolkata")
app.config_from_object(settings, namespace="CELERY")

app.autodiscover_tasks()

@app.task(bind=True)
def task(self):
    print("ALL IS WELL")
