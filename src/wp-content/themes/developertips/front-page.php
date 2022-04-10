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
   
	<!-- latest blog article -->
	   <section class="latest-blog section-padding-top section-padding-bottom">
		   <div class="container">
		   <div class="section-title">
				<h3>
					Latest Blog Article
				</h3>
			</div>
			<div class="lt-blog-wrapper">
			<?php
      $the_query = new WP_Query( array(
    
      'posts_per_page' => 1,
      'orderby' => 'post_date',
      'order' => 'DESC',
      'post_type' => 'blogs', 
      'post_status' => 'publish'
   )); 
?>

			  

		

<?php if ( $the_query->have_posts() ) : ?>
  <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
  <div class="lt-blog__thumbnial">
				  <a href="">
				  <?php echo  the_post_thumbnail('large'); ?>
				  </a>
			  </div>

			  <div class="lt-blog-right__content">
				  <div class="publication-meta">
                    <?php
					$posttags = get_the_tags();
					if ($posttags) {
					  foreach($posttags as $tag) {
						echo '<a href="' . get_tag_link($tag->term_id) . '">' . $tag->name . '</a>';
					  }
					}
					?>
				  </div>
				  <h1> <?php the_title(); ?></h1>
				  <div class="lt-blog-content">
				  <p><?php the_excerpt(); ?></p>
                  
				  <div class="lt-blog-bottom__meta">
					  <div class="author-info">
                           <div class="author-profile">
						   <?php echo get_avatar( get_the_author_meta( 'ID' ),40); ?>
						   </div>
						   <div class="auther-name">
							   <p>Written by <span><?php echo  get_the_author_meta( 'display_name', $post->post_author ); ?></span></p>
						   </div>
						   <div class="publication-date">
                             <p><?php echo  get_the_date(); ?></p>
						   </div>
					  </div>
				  </div>
                   

				  </div>
				  
			  </div>
   

  <?php endwhile; ?>
  <?php wp_reset_postdata(); ?>
<?php endif; ?>
    
			</div>
		   </div>
	   </section>
	  <!-- End latest blog article -->

	  <!-- Featured Blog article -->

	  <section class="features-blogs section-padding-top section-padding-bottom">
		  <div class="container">
		  <div class="section-title">
				<h3>
					Featured Blog Article
				</h3>
			</div>
            <div class="dt-card-wrapper">
						<?php
				$the_query = new WP_Query( array(
				
				'posts_per_page' => 3,
				'orderby' => 'post_date',
				'order' => 'DESC',
				'post_type' => 'blogs', 
				'category_name'=>'featured',
				'post_status' => 'publish'
			)); 
			?>
			<?php if ( $the_query->have_posts() ) : ?>
  <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
  <div class="dt-card">
                    <div class="dt-card__header">
					<?php echo  the_post_thumbnail(); ?>
					</div>
					<div class="dt-card__footer">
						
			  <div class="dt-card-right__content">
				  <div class="publication-meta">
                    <?php
					$posttags = get_the_tags();
					if ($posttags) {
					  foreach($posttags as $tag) {
						echo '<a href="' . get_tag_link($tag->term_id) . '">' . $tag->name . '</a>';
					  }
					}
					?>
				  </div>
				  <h4> <?php the_title(); ?></h4>
				  <div class="dt-card-content">
				  <p><?php the_excerpt(); ?></p>
                  
				  <div class="dt-bottom__meta">
					  <div class="author-info">
                           <div class="author-profile">
						   <?php echo get_avatar( get_the_author_meta( 'ID' ),40); ?>
						   </div>
						   <div class="auther-name">
							   <p> <span><?php echo  get_the_author_meta( 'display_name', $post->post_author ); ?></span></p>
						   </div>
						   <div class="publication-date">
                             <p><?php echo  get_the_date(); ?></p>
						   </div>
					  </div>
				  </div>
                   

				  </div>
				  
			  </div>
					</div>
			</div>
  

   

  <?php endwhile; ?>
  <?php wp_reset_postdata(); ?>
<?php endif; ?>
			
			</div>
		  </div>
	  </section>

	  <!-- End Featured Blog article -->

	    <!-- Featured Youtube video -->

		<section class="featured-youtube section-padding-top section-padding-bottom">
		  <div class="container">
		  <div class="section-title">
				<h3>
					Featured Youtube video
				</h3>
			</div>
            <div class="dt-card-wrapper">
						<?php
				$the_query = new WP_Query( array(
				
				'posts_per_page' => 3,
				'orderby' => 'post_date',
				'order' => 'DESC',
				'post_type' => 'youtube', 
				'category_name'=>'featured',
				'post_status' => 'publish'
			)); 
			?>
			<?php if ( $the_query->have_posts() ) : ?>
  <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
  <div class="dt-card">
                    <div class="dt-card__header">
					<?php echo  the_post_thumbnail(); ?>

					<div class="play-btn">
						<img src="<?php echo get_template_directory_uri() ?>/assets/images/icons/play-icon.svg" alt="">
					</div>
					</div>
					<div class="dt-card__footer">
						
			  <div class="dt-card-right__content">
				  <div class="publication-meta">
                    <?php
					$posttags = get_the_tags();
					if ($posttags) {
					  foreach($posttags as $tag) {
						echo '<a href="' . get_tag_link($tag->term_id) . '">' . $tag->name . '</a>';
					  }
					}
					?>
				  </div>
				  <h4> <?php the_title(); ?></h4>
				  <div class="dt-card-content">
				  <p><?php the_excerpt(); ?></p>
                  
				  <div class="dt-bottom__meta">
					  <div class="author-info">

						  
						   <div class="publication-date">
                             <p><span class='publication-date-label'>Uploaded on </span> <?php echo  get_the_date(); ?></p>
						   </div>
					  </div>
				  </div>
                   

				  </div>
				  
			  </div>
					</div>
			</div>
  

   

  <?php endwhile; ?>
  <?php wp_reset_postdata(); ?>
<?php endif; ?>
			
			</div>
		  </div>
	  </section>

	  <!-- End Featured Youtube video -->
	</main><!-- #main -->

<?php

get_footer();
