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
        $('#first-box').css('fill','transparent')
        $('#first-text').css('fill','var(--black)')
        $('#second-box').css('fill','var(--black)')
        $('#second-text').css('fill','var(--theme-yellow)')
    }
    else{
        $('.site-header').removeClass('fixed')
        $('#second-box').css('fill','transparent')
        $('#second-text').css('fill','var(--black)')
        $('#first-box').css('fill','var(--black)')
        $('#first-text').css('fill','var(--theme-yellow)')
    }

});
// End sticky header


// youtube iframe event

// $('.play-btn').on('click',function(){
//     $('.article-thumbnail img').addClass('hide')
//     $('.youtube-iframe').addClass('show')
// })

$('.test-popup-link').magnificPopup({
    type: 'iframe',
    // other options
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', 

        patterns: {
          youtube: {
            index: 'youtube.com/', 

            id: 'v=',

            src: 'https://www.youtube.com/embed/%id%' 
          },


        },

        srcAction: 'iframe_src', 
      }
  });
})