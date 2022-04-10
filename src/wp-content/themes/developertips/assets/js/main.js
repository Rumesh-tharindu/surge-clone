jQuery(document).ready(function($) {


//  menu close btn
$('.menu-btn__wrapper').on('click',function(){
    $('.hamberger-btn').toggleClass('active')
    $('.header-right').toggleClass('toggle-nav')
  
})
//  End menu close btn



// sticky header
$(window).on('scroll', function(e){

	
    if($(this).scrollTop()>10){
        $('.site-header').addClass('fixed')
    }
    else{
        $('.site-header').removeClass('fixed')
    }

});
// End sticky header




// learn slider

$('.ls-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplaySpeed:100,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// End learn slider
})