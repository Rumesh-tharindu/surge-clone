<?php
function site_menus(){
    $locations = array(
		'primary'  => __( 'Desktop Horizontal Menu', 'twentytwenty' ),
      
        
	);
    register_nav_menus( $locations );
}
add_action( 'init', 'site_menus' );

?>