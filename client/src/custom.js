$(document).ready(function(){

	$("#add").click(function(){
		$("#addForm").slideToggle("1000");
});



})

function updateClicked(){
	var value=document.getElementById('updateSkill').value;
	var name=document.getElementById('updateSkill').getAttribute('data-skill');
	$('.update-div').replaceWith($("<span>",{class:'text-item',text:value}).attr('data-myval',name));
	window.angularComponentRef.zone.run(() => {window.angularComponentRef.componentFn(value,name)});

	
}

$(document).on("click", ".text-item", function (ev) {
	if($('.update-div').length){
		var value=document.getElementById('updateSkill').value;
		var name=document.getElementById('updateSkill').getAttribute('name');
		$('.update-div').replaceWith($("<span>",{class:'text-item',text:name}).attr('data-myval',name));
	}
	var div=$('<div>',{class:'col-sm-4 input-group update-div',tabindex:"1"});
	
	var input = $("<input>", { val: $(this).text(),type: "text",class:'form-control',id:'updateSkill',name:$(this).text()});
	input.attr('data-skill',$(this).data('myval'));
	var button='<span class="input-group-btn "><button class="btn btn-success" onclick="updateClicked();">Submit</button></span>'
	
	div.append(input);
	div.append(button);
	

	// input.on('blur',function(){
		

	// 	div.replaceWith($("<span>",{class:'text-item',text:input.val()}));

	// })
$(this).replaceWith(div);
input.select();
});

$(document).mouseup(function(e) 
{
    var container = $("#showSkill");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        if($('.update-div').length){
			var value=document.getElementById('updateSkill').value;
			var name=document.getElementById('updateSkill').getAttribute('name');
			$('.update-div').replaceWith($("<span>",{class:'text-item',text:name}).attr('data-myval',name));
		}
    }
});

