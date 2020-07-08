$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		// autoplay:true,
		// speed:1000,
		// autoplaySpeed:800,
		// responsive:[
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow:2
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 550,
		// 		settings: {
		// 			slidesToShow:1
		// 		}
		// 	}
		// ]
	})
	// $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// 	console.log(nextSlide)
	// })


	// $('.slider').on('afterChange', function(event, slick, currentSlide){
	// 	console.log(currentSlide)
	// })
	// $('.slider').slick('setPosition')
	// $('.slider').slick('goTo', 3)


	// $('.slider').slick('slickPrev', 3)
	// $('.slider').slick('slickNext', 3)

})

