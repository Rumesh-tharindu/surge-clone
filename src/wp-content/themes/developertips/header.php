<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package yourretailer
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">


	<header id="masthead" class="site-header">
	  <div class="container">
		  <div class="header-inner">
			  <div class="header-left">
                 <div class="logo">
					<svg width="248" height="48" viewBox="0 0 248 58" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<rect opacity="0.9" width="248" height="58" fill="url(#pattern0)"/>
						<defs>
						<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
						<use xlink:href="#image0_28_12" transform="translate(0.180864) scale(0.00243616 0.0104167)"/>
						</pattern>
						<image id="image0_28_12" width="262" height="96" xlink:href="data:image/png;base64,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"/>
						</defs>
					</svg>

				 </div>
						<div class="menu-btn__wrapper">
					<h4>
						Menu
					</h4>
					<button class="hamberger-btn">
						<span class="hamberger-icon"> </span>
						<span class="hamberger-icon"> </span>
						<span class="hamberger-icon"> </span>
					</button>
				</div>
			  </div>
			  <div class="header-right">
                  <nav>
					  <ul>
					  <?php
              wp_nav_menu(
                  array(
                      'container'  => '',
                      'items_wrap' => '%3$s',
                      'theme_location' => 'primary',
                  )
              );

          ?>
					  </ul>
				  </nav>
			  </div>
		  </div>
	  </div>
	</header><!-- #masthead -->

	<main id="primary" class="site-main">