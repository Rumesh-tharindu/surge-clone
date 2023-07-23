<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package yourretailer
 */

?>
</main><!-- #main -->
<!-- footer -->
<footer class="footer section-top">
    <div class="container">
        <div class="subscriptionForm">
            <h3 class="formTitle">
                Subscribe to our newsletter
            </h3>

            <div class="form">
                <form action="">
                    <input type="text" placeholder="Enter Email" require>
                    <button>Submit</button>
                </form>
            </div>

        </div>
        <div class="navigation">
            <ul>
                <?php
                wp_nav_menu(
                    array(
                        'container'  => '',
                        'items_wrap' => '%3$s',
                        'theme_location' => 'primary',
                    )
                );

                ?>
            </ul>
        </div>

    </div>
    <div class="footerBottom">
        <p>Copyright © 2023 DeveloperTips. All rights reserved.</p>
    </div>
</footer>


<?php wp_footer(); ?>

</body>

</html>