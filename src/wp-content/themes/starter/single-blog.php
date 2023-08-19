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

<div class="singlePost singleBlog">

    <section class="articleHeader section-padding-top " style=" background-color:<?php echo get_field('article_header_bg_color') ?>">
        <div class="container">
            <div class="articleHeaderContent">
                <div class="articleTitle">
                    <h1><?php single_post_title() ?></h1>
                </div>
                <div class="articleMeta">
                    <div class="authorInfo">
                        <div class="author">
                            <div class="authorProfile">
                                <?php
                                echo get_avatar(get_the_author_meta('ID', $post->post_author), 50);
                                ?>
                            </div>
                            <div class="autherName">
                                <p> by <span><?php echo  get_the_author_meta('display_name', $post->post_author); ?></span></p>
                            </div>
                        </div>

                        <div class="publicationDate">
                            <p><i class="fas fa-calendar"></i> <?php echo  get_the_date(); ?></p>
                        </div>
                    </div>
                </div>
                <div class="articleThumbnail">
                    <?php echo  the_post_thumbnail(); ?>
                </div>
            </div>

        </div>

    </section>

    <section class="article-content section-padding-bottom section-padding-top">



        <div class="post">
            <div class="container">
                <div class="postWrapper">
                    <div class="postContent">
                        <?php echo the_content() ?>
                    </div>

                </div>

                <div class="shareBtns">
                    <?php echo do_shortcode('[sharethis-inline-buttons]') ?>
                </div>



            </div>


        </div>


    </section>

    <section class="comment  section-padding-bottom">
        <div class="commentWrapper">
            <div class="container">
                <?php

                if (comments_open() || get_comments_number()) {

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