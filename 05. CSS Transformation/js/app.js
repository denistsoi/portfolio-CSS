$(window).on('mousemove', function(event) {
    var width = $(window).width();
    var mouseX = event.pageX - (width * 0.5);
    var height = $(window).height();
    var mouseY = event.pageY - (height * 0.5);
    var xAngle = (mouseY / height) * 270;
    var yAngle = (mouseX / width) * 180;

    $('#stage')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
    //$('.cube-no-preserve')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
});

$(document).ready(function(){
	$(".face").hover(function(){
		$(this).toggleClass('highlight');
	})

	var face=document.getElementsByClassName('face');
	console.log(face.item());

	
});