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

<div class="archivePage blogArchivePage">
  <section class="blogLatesPost section-top section-bottom">
    <div class="container">
      <h1 class="section-title">BLOG</h1>

      <div class="fullWidthCard">

        <?php
        $the_query = new WP_Query(array(

          'posts_per_page' => 1,
          'orderby' => 'post_date',
          'order' => 'DESC',
          'post_type' => 'blog',
          'post_status' => 'publish'
        ));
        ?>

        <?php if ($the_query->have_posts()) : ?>
          <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
            <div class="CardThumbnail">
              <a href="<?php echo get_permalink() ?>">
                <?php echo  the_post_thumbnail('large'); ?>
              </a>
            </div>

            <div class="cardContent">
              <div class="publicationMeta">
                <?php
                $posttags = get_the_tags();
                if ($posttags) {
                  foreach ($posttags as $tag) {
                    echo '<a href="' . get_tag_link($tag->term_id) . '">' . $tag->name . '</a>';
                  }
                }
                ?>
              </div>
              <h3> <?php the_title(); ?></h3>
              <div class="cardExcerpt">
                <p><?php the_excerpt(); ?></p>

                <div class="cardBottomMeta">
                  <div class="authorInfo">
                    <div class="author">
                      <div class="authorProfile">
                        <?php echo get_avatar(get_the_author_meta('ID'), 40); ?>
                      </div>
                      <div class="authorName">
                        <p> <?php echo  get_the_author_meta('display_name', $post->post_author); ?></p>
                      </div>
                    </div>

                    <div class="publicationDate">
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

  <section class="blogs section-top section-bottom">
    <div class="container">
      <?php
      $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

      $the_query = new WP_Query(array(
        'orderby' => 'post_date',
        'order' => 'DESC',
        'paged' => $paged,
        'post_type' => 'blog',
        'post_status' => 'publish'
      ));
      ?>

      <div class="cards">
        <?php if ($the_query->have_posts()) : ?>
          <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
            <div class="card">
              <div class="cardInner">
                <div class="cardHeader" style="background-image:url(<?php echo  the_post_thumbnail_url(); ?>)">

                </div>
                <div class="cardFooter">
                  <div class="publicationMeta">
                    <?php
                    $postTags = get_the_tags();
                    if ($postTags) {
                      foreach ($postTags as $tag) {
                        echo '<a href="' . get_tag_link($tag->term_id) . '">' . $tag->name . '</a>';
                      }
                    }
                    ?>
                  </div>
                  <h3> <?php the_title(); ?></h3>

                  <div class="content">
                    <?php the_excerpt(); ?>

                    <div class="bottomMeta">
                      <div class="authorInfo">
                        <div class="author">
                          <div class="authorProfile">
                            <?php echo get_avatar(get_the_author_meta('ID'), 40); ?>
                          </div>
                          <div class="authorName">
                            <p class="mb-0"> <span><?php echo  get_the_author_meta('display_name', $post->post_author); ?></span></p>
                          </div>
                        </div>

                        <div class="publicationDate">
                          <p class="mb-0"><?php echo  get_the_date(); ?></p>
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
      <nav class="pagination">

        <?php pagination_bar(); ?>

      </nav>

    </div>
  </section>
</div>

<?php get_footer(); ?>