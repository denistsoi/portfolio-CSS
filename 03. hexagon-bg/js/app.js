$(document).ready(function(){
	//console.log("Hello");
	$('section').click(function(){
		$('.hexagon:nth-child(1),.hexagon:nth-child(3)').toggle('slow');
		$('.hexagon:nth-child(2)').animate({'opacity':'0.2s'});
		console.log("argh");
	});
});