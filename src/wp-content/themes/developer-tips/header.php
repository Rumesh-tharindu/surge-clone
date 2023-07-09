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
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>


	<div id="page" class="site">
			<header class="header">
				<div class="container">
					<div class="headerLogo">
						<a href="/">
							<img
								src="<?php echo get_template_directory_uri(); ?>/dist/images/logo.svg" />
						</a>
					</div>
					<div class="navigation">
						
					</div>
				</div>
			</header>

			<main id="primary" class="site-main"></main>
		</div>