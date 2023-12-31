<?php
/**
 * General Settings Template
 *
 * The template wrapper for the general settings page.
 *
 * @package ShareThisShareButtons
 */

?>
<div id="detectadblock">
	<div class="adBanner">
	</div>
</div>
<div id="adblocker-notice" class="notice notice-error is-dismissible">
	<p>
		<?php echo esc_html__( 'It appears you have an ad blocker enabled. To avoid affecting this plugin\'s functionality, please disable while using its admin configurations and registrations. Thank you.', 'sharethis-share-buttons' ); ?>
	</p>
</div>
<div class="wrap sharethis-general-wrap">
	<h1>
		<?php echo esc_html( get_admin_page_title() ); ?>
	</h1>

	<h4>
		<?php
		// translators: User display name.
		printf( esc_html__( 'Hi there, %1$s!', 'sharethis-share-buttons' ), esc_html( $current_user->display_name ) );
		?>

		<?php
		// translators: Contact link.
		printf( esc_html__( 'Thanks for using ShareThis. If you have any questions please don\'t hesitate to %1$s contact our support %2$s We\'re here for you!', 'sharethis-share-buttons' ), '<a class="st-contact" href="https://www.sharethis.com/contact?utm_source=sharethis-plugin&utm_medium=sharethis-plugin-page&utm_campaign=support" target="_blank">', '</a>' );
		?>
	</h4>

	<form action="options.php" method="post">
		<?php
		settings_fields( $this->menu_slug . '-general' );
		do_settings_sections( $this->menu_slug . '-general' );
		submit_button( esc_html__( 'Update', 'sharethis-share-buttons' ) );
		?>
	</form>

	<table class="random-form-table">
		<tbody>
		<tr>
			<th scope="row">
				<span>
					<?php esc_html_e( 'Re-read our', 'sharethis-share-buttons' ); ?>
					<a href="https://www.sharethis.com/privacy?utm_source=sharethis-plugin&utm_medium=sharethis-plugin-page&utm_campaign=Legal" target="_blank">
						<?php esc_html_e( 'Privacy Notice', 'sharethis-share-buttons' ); ?></a>,
					<a href="https://www.sharethis.com/publisher-terms-of-use?utm_source=sharethis-plugin&utm_medium=sharethis-plugin-page&utm_campaign=Legal" target="_blank">
						<?php esc_html_e( 'Publisher Terms of User', 'sharethis-share-buttons' ); ?></a>,
					<?php esc_html_e( 'and', 'sharethis-share-buttons' ); ?>
					<a href="https://www.sharethis.com/publisher?utm_source=sharethis-plugin&utm_medium=sharethis-plugin-page&utm_campaign=Legal" target="_blank">
						<?php esc_html_e( 'Publisher Information', 'sharethis-share-buttons' ); ?></a>
					<?php esc_html_e( 'pages.', 'sharethis-share-buttons' ); ?>
				</span>
			</th>
		</tr>
		</tbody>
	</table>
</div>
