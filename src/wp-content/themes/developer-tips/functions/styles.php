<?php

function dk_register_style() {

    wp_register_style('global',get_template_directory_uri().'/dist/css/global.css',[],filemtime(get_template_directory().'/dist/css/global.css'),false,'all');
    wp_enqueue_style('global');

     wp_register_style('base',get_template_directory_uri().'/dist/css/base.css',[],filemtime(get_template_directory().'/dist/css/base.css'),false,'all');
    wp_enqueue_style('base');

    wp_register_style('app',get_template_directory_uri().'/dist/css/app.css',[],filemtime(get_template_directory().'/dist/css/app.css'),false,'all');
    wp_enqueue_style('app');
    
   


    
    

}

add_action('wp_enqueue_scripts','dk_register_style');

?>
