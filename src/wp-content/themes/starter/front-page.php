<?php

/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package yourretailer
 */

get_header();
?>
<div class="PageHome">

  <h1>Page Home</h1>
  <h1 class="bg-green-500">Hi there</h1>
  <select>
    <option data-display="Select">Nothing</option>
    <option value="1">Some option</option>
    <option value="2">Another option</option>
    <option value="3" disabled>A disabled option</option>
    <option value="4">Potato</option>
  </select>



</div>

<?php get_footer(); ?>