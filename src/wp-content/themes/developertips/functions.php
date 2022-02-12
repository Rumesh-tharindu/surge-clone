<?php
/**
 * Jsblogger functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Jsblogger
 */



add_theme_support( 'title-tag' );
add_theme_support('menus');

/*  =============================
    Includes
    ============================= */


require_once(get_template_directory().'/functions/scripts.php');
require_once(get_template_directory().'/functions/styles.php');

require_once(get_template_directory().'/functions/menus.php');

require_once(get_template_directory().'/functions/custome-post-type.php');




 


?>
