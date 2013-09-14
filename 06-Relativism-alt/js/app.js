$(document).ready(function(){
	function xy(){
		var a = document.width;
		var b = document.height;
		return a+' '+b;
	}
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
			top: $this.position().top+100
		}).animate({
			left: (document.width/2)-120
		})
		$this.animate({
			top: $this.position().top-30
		})
	});
	/*function backgroundChange(){
		console.log('hi');
		$this.toggleClass('purple');
	}*/


});