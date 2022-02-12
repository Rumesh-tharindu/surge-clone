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

	  <div class="bottom-triangle">
	  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1370.65 335.02">
		  <polygon points="4.15 334.52 1370.15 0.64 1370.15 334.52 4.15 334.52"/>
		</svg>
	  </div>
	 </section>
	 <!-- End section page hero -->

	 <!-- youtube info -->
     
	 <section class="yt-info section-padding-bottom">

	   <div class="container">
		   <div class="yt-info__wrapper">
			   <div class="yt-info_left">
                  <div class="yt-info-title">
                    <h3>Developer Tips Channel</h3>
				  </div>
				  <div class="yt-info-desc">
					  <p>It is a long established fact that a reader will be distracted by the readable content
						   of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
						   more-or-less normal distribution of letters, as opposed to using 'Content here</p>

				     <p>It is a long established fact that a reader will be distracted by the readable content
						   of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
						   more-or-less normal distribution of letters, as opposed to using 'Content here</p>		   
				  </div>
			   </div>
			   <div class="yt-info_right">
				     <div class="yt-info_right__img">
						 <img src="/wp-content/uploads/2022/02/YouTubeThumbnailMaker10.jpg" alt="">
					 </div>
				   </div>
		   </div>
	   </div>

	 </section>
	  <!-- End youtube info -->

	  <!-- learn slider -->
        
	     <section class="learn-slider section-padding-top section-padding-bottom">
           <div class="container">
			   <div class="headings">
				   <h1 class="heading-title">
					   You Will Learn !
				   </h1>
			   </div>
			   <div class="ls-wrapper">
			  <div class="owl-carousel owl-theme ls-slider">
					<div class="ls-item">
						<div class="ls-logo">
					   <h1 class="php"><i class="fab fa-php"></i></h1>
						</div>
					</div>
					<div class="ls-item">
						<div class="ls-logo">
					   <h1 class="wordpress"><i class="fab fa-wordpress"></i></h1>
						</div>
					</div>
					<div class="ls-item">
						<div class="ls-logo">
					   <h1 class="html"><i class="fab fa-html5"></i></h1>
						</div>
					</div>
					<div class="ls-item">
						<div class="ls-logo">
					   <h1 class="css"><i class="fab fa-css3"></i></h1>
						</div>
					</div>
					<div class="ls-item">
						<div class="ls-logo">
					   <h1 class="js"><i class="fab fa-js"></i></h1>
						</div>
					</div>
					<div class="ls-item">
						<div class="ls-logo">
					   <h1 class="react"><i class="fab fa-react"></i></h1>
						</div>
					</div>
					<div class="ls-item">
						<div class="ls-logo">
					   <h1 class="shopify"><i class="fab fa-shopify"></i></h1>
						</div>
					</div>
					<div class="ls-item">
						<div class="ls-logo">
					   <h1 class="node"><i class="fab fa-node"></i></h1>
						</div>
					</div>
					<div class="ls-item">
						<div class="ls-logo">
					   <h1 class="laravel"><i class="fab fa-laravel"></i></h1>
						</div>
					</div>
				
			</div>
			   </div>
		   </div>
		 </section>
	   <!-- End learn slider -->

	   <section class="latest-blog">
		   <div class="container">
			   
		   </div>
	   </section>
	</main><!-- #main -->

<?php

get_footer();
