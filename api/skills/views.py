# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from django.http import HttpResponse
# Create your views here.

from .forms import SkillForm


def home(request):

	form=SkillForm(request.POST or None)

	context={
		'form':form
	}
	if request.method=='POST':
		print "post"
		if form.is_valid():
			print "valid"
			form.save()

		

	return render(request,'index.html',context)