$(".editPhoto").hide();
$(".togglename").hide();
$(".toggleemail").hide();

$(".change").click(function() {
	$(".editPhoto").toggle();
});

$('.classes tr').click(function() {
	var courseName = $(this).find('td').html();
	var className = $(this).find('td').eq(1).html();
	var sectionID = $(this).find('td').eq(2).html();
	window.location.href = "class?courseName=" + courseName + "&className=" + className 
	+ "&sectionID=" + sectionID;
});

$('.updatePassword').click(function() {
	var password1 = $("#exampleInputPassword1").eq(0).val();
	var password2 = $("#exampleInputPassword2").eq(0).val();
	console.log(password1 );
	$.get('./updatePassword?password1=' + password1 + "&password2=" + password2, updatePassword);
	
});


$('.updateName').click(function() {
	var fName = $("#firstNameForm").eq(0).val();
	var lName = $("#lastNameForm").eq(0).val();
	console.log(password1 );
	$.get('./updateName?firstName=' + fName + "&lastName=" + lName, updateName);
	
});


function updatePassword(result){
	console.log(result);
}

function updateName(result){
	console.log(result);
}

$('#editToggleName').click(function(){	
	$(".togglename").toggle();
});

$('#editToggleEmail').click(function(){	
	$(".toggleemail").toggle();
});