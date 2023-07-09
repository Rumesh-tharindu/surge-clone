<?php

function dk_register_script(){
    global $ARB_ATTRIB_PREFIX;
 
    wp_enqueue_script('jquery');

    wp_register_script('app',get_template_directory_uri().'/dist/js/app.min.js',[],filemtime(get_template_directory().'/dist/js/app.min.js'));
    wp_enqueue_script('app','jquery',false,true);
   
    
}
add_action('wp_enqueue_scripts','dk_register_script');

?>