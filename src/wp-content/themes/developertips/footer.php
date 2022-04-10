<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package yourretailer
 */

?>
   <!-- footer -->
	<footer  class="site-footer section-padding-top section-padding-bottom">
		<div class="container">
			
             <div class="form-wrapper">
				 <div class="form-title">
					 <h4>Subscribe to our newsletter</h4>
				 </div>
				 <div class="form">
				 <form action="">
					 <input type="text" placeholder="Enter Email">
					 <button>Submit</button>
				 </form>
				 </div>
				
			 </div>

			 <div class="footer-nav">
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
			 </div>

			 <div class="footer-bottom">
				 <p>Copyright © 2022 DeveloperTips. All rights reserved.</p>
			 </div>
		</div>
	</footer>
      <!-- footer -->

<?php wp_footer(); ?>

</body>
</html>
