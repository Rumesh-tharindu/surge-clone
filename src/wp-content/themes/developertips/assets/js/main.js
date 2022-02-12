jQuery(document).ready(function($) {

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
            items:7
        }
    }
})

// End learn slider
})