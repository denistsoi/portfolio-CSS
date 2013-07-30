$(document).ready(function(){
	//console.log("Hello");
	$('section').click(function(){
		$('.hexagon:nth-child(1),.hexagon:nth-child(3)').toggle('slow');
		$('.hexagon:nth-child(2)').animate({'backgroundColor':'#ff9f5f'}, 2000);
		console.log("argh");
	});
});