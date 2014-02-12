
$('.clickable').click(function() {
	var courseName = $(this).find('td').html();
	var className = $(this).find('td').eq(1).html();
	var sectionID = $(this).find('td').eq(2).html();
	window.location.href = "class?courseName=" + courseName + "&className=" + className 
	+ "&sectionID=" + sectionID;
});


$('.classes tr td .remove').click(function(){
	//Remove Classs
});

$('#editToggle').click(function(){

	$("#winter2014table tr").eq(-1).toggle();

	$('.classes tr td').each(function (i){
		if(i%4 == 3)
			$(this).toggle();
	});
	$('.classes th').each(function (i){
		if(i%4 == 3)
			$(this).toggle();
	});
});
