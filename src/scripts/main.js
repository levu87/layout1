// Main
console.log('FullStack Vietnam!')
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		autoplay:true,
		smartSpeed: 500,
		nav: true,
  		navText: ["<img src='./img/left.png'>","<img src='./img/right.png'>"]
		

	});
});
