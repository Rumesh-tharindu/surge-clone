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

	<main id="primary" class="site-main">
	<!-- section page hero -->
     <section class="page-hero section-padding-top section-padding-bottom">

	    <div class="container">
			<div class="page-hero__wrapper">
			<div class="page-hero__left">
					<img src="/wp-content/uploads/2022/02/dev-hero.png" alt="">
					</div>
				<div class="page-hero__right">
                     <h1>Developer Tips</h1>
					 <p>It is a long established fact that a reader will be distracted by the readable
						content of a page when looking at its layout. The point of using Lorem
						Ipsum is that it has a more-or-less normal distribution of letters, as
						opposed to using 'Content here</p>

						<div class="form">
							<form action="">
								<input type="text" placeholder="Subscribe Newsletter">
								<button>Submit</button>
							</form>
						</div>
				</div>
			</div>
		</div>

	
	 </section>
	 <!-- End section page hero -->
	</main><!-- #main -->

<?php

get_footer();
