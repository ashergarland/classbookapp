
$('.classmates tr').click(function() {
	var profile = $(this).attr( 'id' );
	console.log(profile);
	window.location.href = "profile?id=" + profile;
});