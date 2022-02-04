<?php

function dk_register_script(){
    global $ARB_ATTRIB_PREFIX;
 
    wp_enqueue_script('jquery');
    
    wp_register_script('main-js',get_template_directory_uri().'/assets/js/main.js',[],filemtime(get_template_directory().'/assets/js/main.js'));
    wp_enqueue_script('main-js','jquery',false,true);
    
}
add_action('wp_enqueue_scripts','dk_register_script');

?>