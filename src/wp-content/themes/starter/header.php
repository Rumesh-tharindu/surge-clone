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
        <div class="headerInner">
          <div class="headerLeft">
            <div class="headerLogo">
              <h1>Logo</h1>
            </div>
            <div class="hamburgerWrapper">
              <h4>Menu</h4>
              <button class="hamburgerBtn">
                <span class="hamburgerIcon"></span>
                <span class="hamburgerIcon"></span>
                <span class="hamburgerIcon"></span>
              </button>
            </div>
          </div>

          <div class="navigation">
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
            <div class="socialLinks">
              <ul>
                <li>
                  <a href=""><i class="fab fa-facebook" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-instagram" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-reddit-alien" aria-hidden="true"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </header>

    <main id="primary" class="site-main">