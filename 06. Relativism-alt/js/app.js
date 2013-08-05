/*
declare variables
*/




/*
01 document height and width
*/





/*
02 mouse hover, toggle class, change color
*/




$(function(){
	console.log(xy());
	var circle=$('.circle');	
	
	circle.hover(function(){
		$this = $(this);	
		$this.toggleClass('purple');
	});

	var clickcount = 0
	circle.click(function(){
		++clickcount;
		console.log(clickcount);
		console.log('clicked');
		circle.animate({
			top: $this.position().top + 100
		}).animate({
			left: (document.width/2)-240
		})
		$this.animate({
			top: $this.position().top - 60
		})
	});

	/*function backgroundChange(){
		console.log('hi');
		$this.toggleClass('purple');
	}*/

	function xy(){
		var a = document.width;
		var b = document.height;
		return a+' '+b;
	}
});