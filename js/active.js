$(document).ready(function($){
	$(".homepage-slides").owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		dots:false,
		nav:true,
		navText:["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"]
	});
});