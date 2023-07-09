<?php get_header() ?>

<section class="section-padding-top section-padding-bottom">
        <div class="container">
        <div class="page-title">
				<h1>
					Blog
				</h1>
			</div>
			
			<div class="lt-blog-wrapper">
			<?php
      $the_query = new WP_Query( array(
    
      'posts_per_page' => 1,
      'orderby' => 'post_date',
      'order' => 'DESC',
      'post_type' => 'blog', 
      'post_status' => 'publish'
   )); 
?>

			  

		

<?php if ( $the_query->have_posts() ) : ?>
  <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
  <div class="lt-blog__thumbnial">
				  <a href="<?php the_permalink(); ?>">
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
						  <div class="author">
						  <div class="author-profile">
						   <?php echo get_avatar( get_the_author_meta( 'ID' ),40); ?>
						   </div>
						   <div class="auther-name">
							   <p><span><?php echo  get_the_author_meta( 'display_name', $post->post_author ); ?></span></p>
						   </div>
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

<section class="section-blog section-padding-top section-padding-bottom">
    <div class="container">
    <div class="dt-card-wrapper">
		
						<?php
			   $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

				$the_query = new WP_Query( array(
				'orderby' => 'post_date',
				'order' => 'DESC',
				'paged' => $paged, 
				'post_type' => 'blog', 
				'post_status' => 'publish'
			)); 
			?>
			<?php if ( $the_query->have_posts() ) : ?>
  <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
 
  <div class="dt-card">
    <a href="<?php the_permalink(); ?>">
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
						  <div class="author">
                             <div class="author-profile">
						   <?php echo get_avatar( get_the_author_meta( 'ID' ),40); ?>
						   </div>
						   <div class="auther-name">
							   <p> <span><?php echo  get_the_author_meta( 'display_name', $post->post_author ); ?></span></p>
						   </div>
						  </div>
                         
						   <div class="publication-date">
                             <p><?php echo  get_the_date(); ?></p>
						   </div>
					  </div>
				  </div>
                   

				  </div>
				  
			  </div>
					</div>
    </a>
              
			</div>
  

   

  <?php endwhile; ?>
  <?php wp_reset_postdata(); ?>
<?php endif; ?>
			
			</div>
			<nav class="pagination">
			
<?php
 pagination_bar();

  ?>

</nav>
    </div>
</section>






<?php get_footer() ?>