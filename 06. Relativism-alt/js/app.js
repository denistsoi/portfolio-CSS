$().ready(function(){
	circle=$('.circle')
	circle.hover(function(){
		$(this).toggleClass('purple');
	});
	circle.click(function(){
		console.log('clicked');
		$(this).animate({
			top: $(this).position().top - 100
		})
		circle.animate({
			left: $(this).position().left
		})
	});
});
