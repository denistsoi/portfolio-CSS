$(document).ready(function(){
	//console.log("Hello");
	var $hex = $('.hexagon')
	$('section').click(function(){
		$hex.fadeToggle('slow');
		$hex.promise().done(function(){
			$(this).fadeToggle(4600);
		});
		//$('.hexagon:nth-child(1)').toggle('slow'));
		console.log("argh");
	});
});