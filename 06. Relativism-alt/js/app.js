$(document).ready(function(){
$('.circle').on('mouseover', function(){
	var $this = $(this);
  $this.css({'background':'#ef22ef'});
});
$('.circle').on('mouseleave', function(){
	var $this = $(this);
	$this.css({'background':'#000'});
});
});
