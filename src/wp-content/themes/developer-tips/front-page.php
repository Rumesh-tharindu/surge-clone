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
  <section class="homeHero section-top section-bottom">
    <div class="container">
      <div class="heroCols">
        <div class="heroLeft">
          <img src="/wp-content/uploads/2022/02/dev-hero.png" alt="">
        </div>
        <div class="heroRight">
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

  <section class="youtubeInfo  section-bottom">
    <div class="container">
      <div class="youtubeInfoWrapper">
        <div class="cols">
          <div class="left">
            <h3>DEVELOPER TIPS CHANNEL</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
          </div>
          <div class="right">
            <div class="youtubeImg">
              <img src="/wp-content/uploads/2022/04/photo-1611162616475-46b635cb6868.jpg" alt="">
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="learnSlider section-top section-bottom">
    <div class="container">
      <h3 class="heading">
        You Will Learn !
      </h3>
      <div class='techLogoList'>
        <div class="logoLogoListBg">

        </div>
      </div>
  </section>

  <section class="latestBlog section-top section-bottom">
    <div class="container">
      <h3 class="section-title">Latest Blog Article</h3>
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
              <a href="">
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
  </section>

  <section class="featuredBlogs section-top section-bottom">
    <div class="container">
      <h3 class="section-title">Featured Blog Articles</h3>
      <?php
      $the_query = new WP_Query(array(

        'posts_per_page' => 3,
        'orderby' => 'post_date',
        'order' => 'DESC',
        'post_type' => 'blog',
        'category_name' => 'featured',
        'post_status' => 'publish'
      ));
      ?>

      <div class="cards">
        <?php if ($the_query->have_posts()) : ?>
          <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
            <div class="card">
              <div class="cardInner">
                <div class="cardHeader">
                  <?php echo  the_post_thumbnail(); ?>
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


    </div>
  </section>

</div>

<?php get_footer(); ?>