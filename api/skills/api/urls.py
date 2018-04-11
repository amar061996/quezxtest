from django.conf.urls import url

from .views import (
	SkillListView,
	SkillCreateView,
	SkillSearchSerializer,
	SkillUpdateSerializer,
	StatusUpdateSerializer
	)


urlpatterns=[
	
	

	url(r'^$',SkillListView.as_view(),name='skill-list'),
	url(r'^create/$',SkillCreateView.as_view(),name='skill-create'),
	url(r'^(?P<name>[\w-]+)/$',SkillSearchSerializer.as_view(),name='skill-search'),
	url(r'^updatename/(?P<pk>\d+)/$',SkillUpdateSerializer.as_view(),name='skill-update'),
	url(r'^updatestatus/(?P<pk>\d+)/$',StatusUpdateSerializer.as_view(),name='status-update'),

	
	
]