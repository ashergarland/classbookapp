
$('.clickable').click(function() {
	var courseName = $(this).parent().find('td').html();
	var className = $(this).parent().find('td').eq(1).html();
	var sectionID = $(this).parent().find('td').eq(2).html();
	window.location.href = "class?courseName=" + courseName + "&className=" + className 
	+ "&sectionID=" + sectionID;
});


$('.classes tr td .remove').click(function(){
	//Remove Classs
});

$('#editToggle').click(function(){

	
	$('#winter2014table tr td').each(function (i){
		if(i%4 == 3)
			$(this).toggle();
	});
	$("#winter2014table th").eq(3).toggle();
	$("#togglewinter2014").toggle();

});

$('#winter2014table tr td').each(function (i){
	if(i%4 == 3)
		$(this).hide();
});
$("#winter2014table th").eq(3).hide();
$("#togglewinter2014").hide();




$('#editToggleFall2013').click(function(){

	
	$('#fall2013table tr td').each(function (i){
		if(i%4 == 3)
			$(this).toggle();
	});
	$("#fall2013table th").eq(3).toggle();
	$("#togglefall2013").toggle();

});
	$('#fall2013table tr td').each(function (i){
		if(i%4 == 3)
			$(this).hide();
	});
	$("#fall2013table th").eq(3).hide();
	$("#togglefall2013").hide();




$('#editToggleSummer2013').click(function(){
	
	$('#summer2013table tr td').each(function (i){
		if(i%4 == 3)
			$(this).toggle();
	});
	$("#summer2013table th").eq(3).toggle();
	$("#togglesummer2013").toggle();

});

	$('#summer2013table tr td').each(function (i){
		if(i%4 == 3)
			$(this).toggle();
	});
	$("#summer2013table th").eq(3).toggle();
	$("#togglesummer2013").toggle();




$('#editToggleSpring2013').click(function(){
	
	$('#spring2013table tr td').each(function (i){
		if(i%4 == 3)
			$(this).toggle();
	});
	$("#spring2013table th").eq(3).toggle();
	$("#togglespring2013").toggle();

});

	$('#spring2013table tr td').each(function (i){
		if(i%4 == 3)
			$(this).toggle();
	});
	$("#spring2013table th").eq(3).toggle();
	$("#togglespring2013").toggle();	


