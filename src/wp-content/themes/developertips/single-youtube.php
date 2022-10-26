<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package yourretailer
 */
get_header();
?>

<div class="custom-post  ">
 
<section class="article-header section-padding-top " style=" background-color:<?php echo get_field('article_header_bg_color') ?>">
    <div class="article-header-content">
        <div class="container">
        <div class="article-title">
           <h1><?php single_post_title() ?></h1>
       </div>
       <div class="article-meta">
            <div class="author-info">
                <div class="author">
                <div class="author-profile">
                <?php 
                echo get_avatar(get_the_author_meta( 'ID', $post->post_author ),50);
                 ?>
                </div>
                <div class="auther-name">
                    <p> by <span><?php echo  get_the_author_meta( 'display_name', $post->post_author ); ?></span></p>
                </div>
                </div>
           
                <div class="publication-date">
                    <p><i class="fas fa-calendar"></i> <?php echo  get_the_date(); ?></p>
                </div>
                </div>
       </div>
       <div class="article-thumbnail">
    <?php echo  the_post_thumbnail(); ?>
   
       
			<a class="play-btn test-popup-link" href="<?php echo get_field('youtube_video_link')?>">
            <img src="<?php echo get_template_directory_uri() ?>/assets/images/icons/youtube-icon.webp" alt="">
            </a> 
		
    </div>
        </div>
       
    </div>
   
</section>

<section class="article-content section-padding-bottom section-padding-top">
   
      
     
            <div class="post">
            <div class="container">
                <div class="post-wrapper">
                    <div class="post-content">
                    <?php echo the_content()?>
                    </div>
                    
                </div>

            <div class="share-btns">
            <?php echo do_shortcode('[sharethis-inline-buttons]') ?>
            </div>
               

           
            </div>
       
        
    </div>
 
  
</section>

<section class="comment-section  section-padding-bottom">
    <div class="comment">
         <div class="container">
             <?php
               
             	if ( comments_open() || get_comments_number() ) {
                  
                  echo comments_template();
                 }
             ?>
         </div>
    </div>
</section>


</div>

<?php
get_footer();
?>