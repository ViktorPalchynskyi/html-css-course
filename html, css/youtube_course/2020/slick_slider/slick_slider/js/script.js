$(document).ready(() => {
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll:1, 
		speed:1000, 
		easing:'ease', 
		infinite:true,
		initialSlide:0,
		autoplay:false, 
		autoplaySpeed:1500, 
		pauseOnFucus: true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		graggable:false, 
		swipe:true, 
		touchThreshold:10, 
		touchMove: true, 
		waitForAnimate: false, 
		centerMode: false,
		variableWidth: false, 
		rows:1,
		slidesPerRow:1,
		vertical:false,
		verticalSwiping:true, 
		asNavFor:".sliderbig",
		responsive:[
		{
			breakpoint:768,
			settings: {
				slidesToShow:2
			}
		},
		{
			breakpoint:500,
			settings: {
				slidesToShow:1
			}
		}
		],
		// appendArrows: $('.content'),
		// appendDots:$('.content')
	})
	$('.sliderbig').slick({
		arrows:false,
		fade:true,
		asNavFor:".slider"
	})
})

