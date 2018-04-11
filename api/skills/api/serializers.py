from rest_framework import serializers
from rest_framework.serializers import (
	Serializer,
	ModelSerializer,
	CharField,
	IntegerField,
	DateField,
	ChoiceField,

)

from skills.models import Skills


class SkillSerializer(ModelSerializer):

	class Meta:
		model=Skills
		fields=['id','name','status']

class SkillCreateSerializer(ModelSerializer):
	
	class Meta:
		model=Skills
		fields=['name','status']



class SkillUpdateSerializer(ModelSerializer):

	class Meta:
		model=Skills
		fields=['name']

class StatusUpdateSerializer(ModelSerializer):

	class Meta:
		model=Skills
		fields=['status']		