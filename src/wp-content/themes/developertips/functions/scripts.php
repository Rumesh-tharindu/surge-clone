<?php

function dk_register_script(){
    global $ARB_ATTRIB_PREFIX;
 
    wp_enqueue_script('jquery');

    wp_register_script('owl',get_template_directory_uri().'/assets/js/vendor/owl.carousel.min.js',[],filemtime(get_template_directory().'/assets/js/vendor/owl.carousel.min.js'));
    wp_enqueue_script('owl','jquery',false,true);
    
    wp_register_script('fontawesome-kit','https://kit.fontawesome.com/cc4f04183a.js','jquery',false,true);
    wp_enqueue_script('fontawesome-kit');

    wp_register_script('mg-popup','https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js','jquery',false,true);
    wp_enqueue_script('mg-popup');
    
    
    wp_register_script('main-js',get_template_directory_uri().'/assets/js/main.js',[],filemtime(get_template_directory().'/assets/js/main.js'));
    wp_enqueue_script('main-js','jquery',false,true);
    
}
add_action('wp_enqueue_scripts','dk_register_script');

?>