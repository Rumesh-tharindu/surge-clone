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
				  <a href="/">
				  <div class="logo">
				
				  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.36 17.67">
					  <path id='first-box' d="M24.88,17.15H9.39A7.36,7.36,0,0,1,2.06,9.82h0A7.35,7.35,0,0,1,9.39,2.48H24.88" transform="translate(-0.56 -0.98)" style=
					  "fill:var(--black);stroke:#000;stroke-miterlimit:10;stroke-width:3px"
					  />
					  <path id='second-box' d="M24.6,17.15H40.09a7.36,7.36,0,0,0,7.33-7.33h0a7.35,7.35,0,0,0-7.33-7.34H24.6Z" transform="translate(-0.56 -0.98)" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px"/>
					  <text id='first-text' transform="translate(9.22 13.25)" style="
					  font-size:13px;font-family:BlackOpsOne-Regular, Black Ops One;fill:var(--theme-yellow)">
					  D</text>
					  <text id='second-text' transform="translate(30.9 13.25)" style="font-size:13px;font-family:BlackOpsOne-Regular, Black Ops One">T</text>
					</svg>
				 </div>
				  </a>
               
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
				  <div class="social-links">
					  <ul>
						  <li>
							  <a href=""><i class="fab fa-facebook"></i></a>
						  </li>
						  <li>
							  <a href=""><i class="fab fa-instagram"></i></a>
						  </li>
						  <li>
							  <a href=""><i class="fab fa-linkedin"></i></a>
						  </li>
						  <li>
							  <a href=""><i class="fab fa-twitter"></i></a>
						  </li>
						  <li>
							  <a href=""><i class="fab fa-reddit-alien"></i></a>
						  </li>
					  </ul>
				  </div>
			  </div>
		  </div>
	  </div>
	</header><!-- #masthead -->

	<main id="primary" class="site-main">