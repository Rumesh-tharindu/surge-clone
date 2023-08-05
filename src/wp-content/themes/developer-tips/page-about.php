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
<div class="aboutPage">
    <div class="pageBanner ">
        <div class="container">
            <div class="bannerTitle">
                <h1>The Story Of <span>Developer TIPS !</span> </h1>
            </div>
        </div>
    </div>

    <section class="story section-top section-bottom">
        <div class="container">
            <p>It is a long established fact that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy</p>

            <p>It is a long established fact that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy</p>

            <p>It is a long established fact that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy</p>
        </div>
    </section>

    <section class="myProfile section-bottom">
        <div class="container">
            <div class="row">
                <div class="column">
                    <div class="siteDetails">
                        <div class="siteDetailsBanner">
                            <img src="/wp-content/uploads/2022/04/about.png" alt="">
                        </div>


                    </div>
                </div>

                <div class="column">
                    <div class="siteDetailsContent">
                        <h3>What Developer Tips Do</h3>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</div>


<?php get_footer(); ?>