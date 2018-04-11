from rest_framework.generics import (
				CreateAPIView,
				DestroyAPIView,
				ListAPIView,
				RetrieveAPIView,
				RetrieveUpdateAPIView,
				UpdateAPIView,

)


from .serializers import SkillSerializer,SkillUpdateSerializer,SkillCreateSerializer,StatusUpdateSerializer
from skills.models import Skills

class SkillListView(ListAPIView):
	queryset=Skills.objects.all().order_by('name')
	serializer_class=SkillSerializer

class SkillCreateView(CreateAPIView):
	queryset=Skills.objects.all()
	serializer_class=SkillCreateSerializer	

class SkillSearchSerializer(RetrieveAPIView):
	lookup_field='name'
	queryset=Skills.objects.all()
	serializer_class=SkillSerializer	

class SkillUpdateSerializer(UpdateAPIView):
	queryset=Skills.objects.all()
	serializer_class=SkillUpdateSerializer

class StatusUpdateSerializer(UpdateAPIView):
	queryset=Skills.objects.all()
	serializer_class=StatusUpdateSerializer	