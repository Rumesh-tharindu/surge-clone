<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'starter-db');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', 'root');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '!?Fv?SJY8:.75B0B9SCA0;.q!Prr;}=56SvDvSkQB{yCLuKX?isG^.o0}3uo5:C#');
define('SECURE_AUTH_KEY',  'v8vV[A 7GyCR[XWn!e6MbGYwO088*(+85+Wu5cqC|Dq`gV$isi:kdp>oo,sEtMHq');
define('LOGGED_IN_KEY',    'Y QP1u_LoIXe?isC/7PKTB>Kfxv51il2F)[-H_F+N$Rz5}dszH>hViNBv_oPQL8c');
define('NONCE_KEY',        'nv.p(/R{4BSpw6p(.Ae3 [UR_X0$q_L39J;CY#/M`MY&RftiRQflS@<7[QVLWFra');
define('AUTH_SALT',        'nD2H7HODW6Z{2nH9{b~Tmn@Hx>]F2XN1Al7HN5m}$%r?Hr(;m xc<NUZ^|YDPu{A');
define('SECURE_AUTH_SALT', '3p ofg,aRw}pIJ86-OR%>2cyzOL&cXgiIn6)n~d$*Gn?{$GHdxH=;j;:Px}T `!S');
define('LOGGED_IN_SALT',   'L?G{G_qFpj&)gKdFcn4l^}v#Ri8tqwEr.L@^2@NX/*e;trTh:@e(aM}#Kc9q`/[o');
define('NONCE_SALT',       't8p?x&cTmTmTDS[ey;N,z<efgn2h?0Ff<cIR>@ZzCy8X~As:PFm9&eG8H?$_5<yf');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
