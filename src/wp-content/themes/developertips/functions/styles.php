<?php

function dk_register_style(){
    wp_register_style('owl',get_template_directory_uri().'/assets/css/vendor/owl.carousel.min.css',[],filemtime(get_template_directory().'/assets/css/vendor/owl.carousel.min.css'),false,'all');
    wp_enqueue_style('owl');
 
    wp_register_style('layouts',get_template_directory_uri().'/assets/css/layouts.css',[],filemtime(get_template_directory().'/assets/css/layouts.css'),false,'all');
    wp_enqueue_style('layouts');

    wp_register_style('components',get_template_directory_uri().'/assets/css/components.css',[],filemtime(get_template_directory().'/assets/css/components.css'),false,'all');
    wp_enqueue_style('components');

    wp_register_style('home',get_template_directory_uri().'/assets/css/pages/home.css',[],filemtime(get_template_directory().'/assets/css/pages/home.css'),false,'all');
    wp_enqueue_style('home');
    

}

add_action('wp_enqueue_scripts','dk_register_style');

?>
