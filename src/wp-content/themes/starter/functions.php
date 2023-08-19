<?php

/**
 * Jsblogger functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Jsblogger
 */



add_theme_support('title-tag');
add_theme_support('menus');
add_theme_support('post-thumbnails');
/*  =============================
    Includes
    ============================= */


require_once(get_template_directory() . '/functions/scripts.php');
require_once(get_template_directory() . '/functions/styles.php');

require_once(get_template_directory() . '/functions/menus.php');

require_once(get_template_directory() . '/functions/custome-post-type.php');

require_once(get_template_directory() . '/functions/custome-post-type-youtube.php');




function pagination_bar()
{
    global $wp_query;

    $total_pages = $wp_query->max_num_pages;



    if ($total_pages > 1) {
        $current_page = max(1, get_query_var('paged'));

        echo paginate_links(array(
            'base' => str_replace(99999, '%#%', esc_url(get_pagenum_link(99999))),
            'format' => 'page/%#%',
            'current' => $current_page,
            'total' => $total_pages,
        ));
    }
}
