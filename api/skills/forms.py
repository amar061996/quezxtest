from django import forms
from .models import Skills

class SkillForm(forms.ModelForm):
	class Meta:
		model=Skills
		fields=['name']
		widgets={
                  "name":forms.TextInput(attrs={'placeholder':'Add Skill','class':'form-control'}),
            	} 

	