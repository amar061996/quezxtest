# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

STATUS_CHOICES=(

		('Approved','Approved'),
		('Rejected','Rejected')

	)

class Skills(models.Model):
	
	name=models.CharField(max_length=250,blank=True)
	status=models.CharField(max_length=50,blank=True,null=False,choices=STATUS_CHOICES)


	def __str__(self):

		return self.name		