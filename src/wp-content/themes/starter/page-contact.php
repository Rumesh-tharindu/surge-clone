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

<div class="pageAbout section-top section-bottom">
    <div class="container">
        <div class="sectionHeaders">
            <div class="sectionTitle">
                <h2>How can I help?</h1>
            </div>
            <div class="sectionSubTitle">
                <p>Do you have a question or are you interested in working with my team and me? Just fill out the form fields below.</p>
            </div>
        </div>
        <div class="contactForm">
            <?php echo do_shortcode('[contact-form-7 id="121" title="Contact form 1"]') ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>