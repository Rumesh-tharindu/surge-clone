-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2022 at 07:41 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `developertips`
--

-- --------------------------------------------------------

--
-- Table structure for table `wp_commentmeta`
--

CREATE TABLE `wp_commentmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `comment_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wp_comments`
--

CREATE TABLE `wp_comments` (
  `comment_ID` bigint(20) UNSIGNED NOT NULL,
  `comment_post_ID` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `comment_author` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_author_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment_author_url` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment_author_IP` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_karma` int(11) NOT NULL DEFAULT 0,
  `comment_approved` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `comment_agent` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment_type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'comment',
  `comment_parent` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_comments`
--

INSERT INTO `wp_comments` (`comment_ID`, `comment_post_ID`, `comment_author`, `comment_author_email`, `comment_author_url`, `comment_author_IP`, `comment_date`, `comment_date_gmt`, `comment_content`, `comment_karma`, `comment_approved`, `comment_agent`, `comment_type`, `comment_parent`, `user_id`) VALUES
(2, 88, 'Rumesh Amarasinghe', 'tharindurumesh20@gmail.com', 'http://dev.com', '127.0.0.1', '2022-04-22 09:51:53', '2022-04-22 09:51:53', 'axwfr4y5uij6', 0, '1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36', 'comment', 0, 1),
(3, 88, 'w12er233', 'tharindurumesh20@gmail.com', '', '127.0.0.1', '2022-04-22 09:58:21', '2022-04-22 09:58:21', 'rw3t4y', 0, '1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.44', 'comment', 2, 0),
(4, 88, 'Muhammad Mohiuddin', 'Muhammad@gmail.com', '', '127.0.0.1', '2022-04-25 06:18:20', '2022-04-25 06:18:20', 'Your post inspiring us to learn about garments and merchandising , pls keep it up…..', 0, '1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.50', 'comment', 0, 0),
(7, 88, 'Nethmi welgamiwila', 'nethmivelgamwila@gmail.com', '', '127.0.0.1', '2022-04-27 09:28:26', '2022-04-27 09:28:26', 'Hi  there', 0, '1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36', 'comment', 3, 0),
(8, 88, 'Nethmi welgamiwila', 'nethmivelgamwila@gmail.com', '', '127.0.0.1', '2022-04-27 09:28:54', '2022-04-27 09:28:54', 'testing comment', 0, '1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36', 'comment', 2, 0),
(9, 88, 'Nethmi welgamiwila', 'nethmivelgamwila@gmail.com', '', '127.0.0.1', '2022-04-27 09:29:33', '2022-04-27 09:29:33', 'supreb', 0, '1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36', 'comment', 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_links`
--

CREATE TABLE `wp_links` (
  `link_id` bigint(20) UNSIGNED NOT NULL,
  `link_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `link_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `link_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `link_target` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `link_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `link_visible` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Y',
  `link_owner` bigint(20) UNSIGNED NOT NULL DEFAULT 1,
  `link_rating` int(11) NOT NULL DEFAULT 0,
  `link_updated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `link_rel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `link_notes` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `link_rss` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wp_options`
--

CREATE TABLE `wp_options` (
  `option_id` bigint(20) UNSIGNED NOT NULL,
  `option_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `option_value` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `autoload` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'yes'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_options`
--

INSERT INTO `wp_options` (`option_id`, `option_name`, `option_value`, `autoload`) VALUES
(1, 'siteurl', 'http://dev.com', 'yes'),
(2, 'home', 'http://dev.com', 'yes'),
(3, 'blogname', 'developertips', 'yes'),
(4, 'blogdescription', '', 'yes'),
(5, 'users_can_register', '0', 'yes'),
(6, 'admin_email', 'tharindurumesh20@gmail.com', 'yes'),
(7, 'start_of_week', '1', 'yes'),
(8, 'use_balanceTags', '0', 'yes'),
(9, 'use_smilies', '1', 'yes'),
(10, 'require_name_email', '1', 'yes'),
(11, 'comments_notify', '1', 'yes'),
(12, 'posts_per_rss', '10', 'yes'),
(13, 'rss_use_excerpt', '0', 'yes'),
(14, 'mailserver_url', 'mail.example.com', 'yes'),
(15, 'mailserver_login', 'login@example.com', 'yes'),
(16, 'mailserver_pass', 'password', 'yes'),
(17, 'mailserver_port', '110', 'yes'),
(18, 'default_category', '1', 'yes'),
(19, 'default_comment_status', 'open', 'yes'),
(20, 'default_ping_status', 'open', 'yes'),
(21, 'default_pingback_flag', '', 'yes'),
(22, 'posts_per_page', '6', 'yes'),
(23, 'date_format', 'F j, Y', 'yes'),
(24, 'time_format', 'g:i a', 'yes'),
(25, 'links_updated_date_format', 'F j, Y g:i a', 'yes'),
(26, 'comment_moderation', '', 'yes'),
(27, 'moderation_notify', '1', 'yes'),
(28, 'permalink_structure', '/%postname%/', 'yes'),
(29, 'rewrite_rules', 'a:140:{s:7:\"blog/?$\";s:24:\"index.php?post_type=blog\";s:37:\"blog/feed/(feed|rdf|rss|rss2|atom)/?$\";s:41:\"index.php?post_type=blog&feed=$matches[1]\";s:32:\"blog/(feed|rdf|rss|rss2|atom)/?$\";s:41:\"index.php?post_type=blog&feed=$matches[1]\";s:24:\"blog/page/([0-9]{1,})/?$\";s:42:\"index.php?post_type=blog&paged=$matches[1]\";s:10:\"youtube/?$\";s:27:\"index.php?post_type=youtube\";s:40:\"youtube/feed/(feed|rdf|rss|rss2|atom)/?$\";s:44:\"index.php?post_type=youtube&feed=$matches[1]\";s:35:\"youtube/(feed|rdf|rss|rss2|atom)/?$\";s:44:\"index.php?post_type=youtube&feed=$matches[1]\";s:27:\"youtube/page/([0-9]{1,})/?$\";s:45:\"index.php?post_type=youtube&paged=$matches[1]\";s:11:\"^wp-json/?$\";s:22:\"index.php?rest_route=/\";s:14:\"^wp-json/(.*)?\";s:33:\"index.php?rest_route=/$matches[1]\";s:21:\"^index.php/wp-json/?$\";s:22:\"index.php?rest_route=/\";s:24:\"^index.php/wp-json/(.*)?\";s:33:\"index.php?rest_route=/$matches[1]\";s:17:\"^wp-sitemap\\.xml$\";s:23:\"index.php?sitemap=index\";s:17:\"^wp-sitemap\\.xsl$\";s:36:\"index.php?sitemap-stylesheet=sitemap\";s:23:\"^wp-sitemap-index\\.xsl$\";s:34:\"index.php?sitemap-stylesheet=index\";s:48:\"^wp-sitemap-([a-z]+?)-([a-z\\d_-]+?)-(\\d+?)\\.xml$\";s:75:\"index.php?sitemap=$matches[1]&sitemap-subtype=$matches[2]&paged=$matches[3]\";s:34:\"^wp-sitemap-([a-z]+?)-(\\d+?)\\.xml$\";s:47:\"index.php?sitemap=$matches[1]&paged=$matches[2]\";s:47:\"category/(.+?)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:52:\"index.php?category_name=$matches[1]&feed=$matches[2]\";s:42:\"category/(.+?)/(feed|rdf|rss|rss2|atom)/?$\";s:52:\"index.php?category_name=$matches[1]&feed=$matches[2]\";s:23:\"category/(.+?)/embed/?$\";s:46:\"index.php?category_name=$matches[1]&embed=true\";s:35:\"category/(.+?)/page/?([0-9]{1,})/?$\";s:53:\"index.php?category_name=$matches[1]&paged=$matches[2]\";s:17:\"category/(.+?)/?$\";s:35:\"index.php?category_name=$matches[1]\";s:44:\"tag/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?tag=$matches[1]&feed=$matches[2]\";s:39:\"tag/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?tag=$matches[1]&feed=$matches[2]\";s:20:\"tag/([^/]+)/embed/?$\";s:36:\"index.php?tag=$matches[1]&embed=true\";s:32:\"tag/([^/]+)/page/?([0-9]{1,})/?$\";s:43:\"index.php?tag=$matches[1]&paged=$matches[2]\";s:14:\"tag/([^/]+)/?$\";s:25:\"index.php?tag=$matches[1]\";s:45:\"type/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?post_format=$matches[1]&feed=$matches[2]\";s:40:\"type/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?post_format=$matches[1]&feed=$matches[2]\";s:21:\"type/([^/]+)/embed/?$\";s:44:\"index.php?post_format=$matches[1]&embed=true\";s:33:\"type/([^/]+)/page/?([0-9]{1,})/?$\";s:51:\"index.php?post_format=$matches[1]&paged=$matches[2]\";s:15:\"type/([^/]+)/?$\";s:33:\"index.php?post_format=$matches[1]\";s:32:\"blog/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:42:\"blog/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:62:\"blog/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:57:\"blog/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:57:\"blog/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:38:\"blog/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:21:\"blog/([^/]+)/embed/?$\";s:37:\"index.php?blog=$matches[1]&embed=true\";s:25:\"blog/([^/]+)/trackback/?$\";s:31:\"index.php?blog=$matches[1]&tb=1\";s:45:\"blog/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?blog=$matches[1]&feed=$matches[2]\";s:40:\"blog/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?blog=$matches[1]&feed=$matches[2]\";s:33:\"blog/([^/]+)/page/?([0-9]{1,})/?$\";s:44:\"index.php?blog=$matches[1]&paged=$matches[2]\";s:40:\"blog/([^/]+)/comment-page-([0-9]{1,})/?$\";s:44:\"index.php?blog=$matches[1]&cpage=$matches[2]\";s:29:\"blog/([^/]+)(?:/([0-9]+))?/?$\";s:43:\"index.php?blog=$matches[1]&page=$matches[2]\";s:21:\"blog/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:31:\"blog/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:51:\"blog/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:46:\"blog/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:46:\"blog/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:27:\"blog/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:35:\"youtube/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:45:\"youtube/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:65:\"youtube/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:60:\"youtube/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:60:\"youtube/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:41:\"youtube/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:24:\"youtube/([^/]+)/embed/?$\";s:40:\"index.php?youtube=$matches[1]&embed=true\";s:28:\"youtube/([^/]+)/trackback/?$\";s:34:\"index.php?youtube=$matches[1]&tb=1\";s:48:\"youtube/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:46:\"index.php?youtube=$matches[1]&feed=$matches[2]\";s:43:\"youtube/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:46:\"index.php?youtube=$matches[1]&feed=$matches[2]\";s:36:\"youtube/([^/]+)/page/?([0-9]{1,})/?$\";s:47:\"index.php?youtube=$matches[1]&paged=$matches[2]\";s:43:\"youtube/([^/]+)/comment-page-([0-9]{1,})/?$\";s:47:\"index.php?youtube=$matches[1]&cpage=$matches[2]\";s:32:\"youtube/([^/]+)(?:/([0-9]+))?/?$\";s:46:\"index.php?youtube=$matches[1]&page=$matches[2]\";s:24:\"youtube/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:34:\"youtube/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:54:\"youtube/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:49:\"youtube/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:49:\"youtube/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:30:\"youtube/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:12:\"robots\\.txt$\";s:18:\"index.php?robots=1\";s:13:\"favicon\\.ico$\";s:19:\"index.php?favicon=1\";s:48:\".*wp-(atom|rdf|rss|rss2|feed|commentsrss2)\\.php$\";s:18:\"index.php?feed=old\";s:20:\".*wp-app\\.php(/.*)?$\";s:19:\"index.php?error=403\";s:18:\".*wp-register.php$\";s:23:\"index.php?register=true\";s:32:\"feed/(feed|rdf|rss|rss2|atom)/?$\";s:27:\"index.php?&feed=$matches[1]\";s:27:\"(feed|rdf|rss|rss2|atom)/?$\";s:27:\"index.php?&feed=$matches[1]\";s:8:\"embed/?$\";s:21:\"index.php?&embed=true\";s:20:\"page/?([0-9]{1,})/?$\";s:28:\"index.php?&paged=$matches[1]\";s:27:\"comment-page-([0-9]{1,})/?$\";s:39:\"index.php?&page_id=23&cpage=$matches[1]\";s:41:\"comments/feed/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?&feed=$matches[1]&withcomments=1\";s:36:\"comments/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?&feed=$matches[1]&withcomments=1\";s:17:\"comments/embed/?$\";s:21:\"index.php?&embed=true\";s:44:\"search/(.+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:40:\"index.php?s=$matches[1]&feed=$matches[2]\";s:39:\"search/(.+)/(feed|rdf|rss|rss2|atom)/?$\";s:40:\"index.php?s=$matches[1]&feed=$matches[2]\";s:20:\"search/(.+)/embed/?$\";s:34:\"index.php?s=$matches[1]&embed=true\";s:32:\"search/(.+)/page/?([0-9]{1,})/?$\";s:41:\"index.php?s=$matches[1]&paged=$matches[2]\";s:14:\"search/(.+)/?$\";s:23:\"index.php?s=$matches[1]\";s:47:\"author/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?author_name=$matches[1]&feed=$matches[2]\";s:42:\"author/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?author_name=$matches[1]&feed=$matches[2]\";s:23:\"author/([^/]+)/embed/?$\";s:44:\"index.php?author_name=$matches[1]&embed=true\";s:35:\"author/([^/]+)/page/?([0-9]{1,})/?$\";s:51:\"index.php?author_name=$matches[1]&paged=$matches[2]\";s:17:\"author/([^/]+)/?$\";s:33:\"index.php?author_name=$matches[1]\";s:69:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/feed/(feed|rdf|rss|rss2|atom)/?$\";s:80:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&feed=$matches[4]\";s:64:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/(feed|rdf|rss|rss2|atom)/?$\";s:80:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&feed=$matches[4]\";s:45:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/embed/?$\";s:74:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&embed=true\";s:57:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/page/?([0-9]{1,})/?$\";s:81:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&paged=$matches[4]\";s:39:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/?$\";s:63:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]\";s:56:\"([0-9]{4})/([0-9]{1,2})/feed/(feed|rdf|rss|rss2|atom)/?$\";s:64:\"index.php?year=$matches[1]&monthnum=$matches[2]&feed=$matches[3]\";s:51:\"([0-9]{4})/([0-9]{1,2})/(feed|rdf|rss|rss2|atom)/?$\";s:64:\"index.php?year=$matches[1]&monthnum=$matches[2]&feed=$matches[3]\";s:32:\"([0-9]{4})/([0-9]{1,2})/embed/?$\";s:58:\"index.php?year=$matches[1]&monthnum=$matches[2]&embed=true\";s:44:\"([0-9]{4})/([0-9]{1,2})/page/?([0-9]{1,})/?$\";s:65:\"index.php?year=$matches[1]&monthnum=$matches[2]&paged=$matches[3]\";s:26:\"([0-9]{4})/([0-9]{1,2})/?$\";s:47:\"index.php?year=$matches[1]&monthnum=$matches[2]\";s:43:\"([0-9]{4})/feed/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?year=$matches[1]&feed=$matches[2]\";s:38:\"([0-9]{4})/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?year=$matches[1]&feed=$matches[2]\";s:19:\"([0-9]{4})/embed/?$\";s:37:\"index.php?year=$matches[1]&embed=true\";s:31:\"([0-9]{4})/page/?([0-9]{1,})/?$\";s:44:\"index.php?year=$matches[1]&paged=$matches[2]\";s:13:\"([0-9]{4})/?$\";s:26:\"index.php?year=$matches[1]\";s:27:\".?.+?/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:37:\".?.+?/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:57:\".?.+?/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\".?.+?/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\".?.+?/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:33:\".?.+?/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:16:\"(.?.+?)/embed/?$\";s:41:\"index.php?pagename=$matches[1]&embed=true\";s:20:\"(.?.+?)/trackback/?$\";s:35:\"index.php?pagename=$matches[1]&tb=1\";s:40:\"(.?.+?)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:47:\"index.php?pagename=$matches[1]&feed=$matches[2]\";s:35:\"(.?.+?)/(feed|rdf|rss|rss2|atom)/?$\";s:47:\"index.php?pagename=$matches[1]&feed=$matches[2]\";s:28:\"(.?.+?)/page/?([0-9]{1,})/?$\";s:48:\"index.php?pagename=$matches[1]&paged=$matches[2]\";s:35:\"(.?.+?)/comment-page-([0-9]{1,})/?$\";s:48:\"index.php?pagename=$matches[1]&cpage=$matches[2]\";s:24:\"(.?.+?)(?:/([0-9]+))?/?$\";s:47:\"index.php?pagename=$matches[1]&page=$matches[2]\";s:27:\"[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:37:\"[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:57:\"[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\"[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\"[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:33:\"[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:16:\"([^/]+)/embed/?$\";s:37:\"index.php?name=$matches[1]&embed=true\";s:20:\"([^/]+)/trackback/?$\";s:31:\"index.php?name=$matches[1]&tb=1\";s:40:\"([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?name=$matches[1]&feed=$matches[2]\";s:35:\"([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?name=$matches[1]&feed=$matches[2]\";s:28:\"([^/]+)/page/?([0-9]{1,})/?$\";s:44:\"index.php?name=$matches[1]&paged=$matches[2]\";s:35:\"([^/]+)/comment-page-([0-9]{1,})/?$\";s:44:\"index.php?name=$matches[1]&cpage=$matches[2]\";s:24:\"([^/]+)(?:/([0-9]+))?/?$\";s:43:\"index.php?name=$matches[1]&page=$matches[2]\";s:16:\"[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:26:\"[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:46:\"[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:41:\"[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:41:\"[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:22:\"[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";}', 'yes'),
(30, 'hack_file', '0', 'yes'),
(31, 'blog_charset', 'UTF-8', 'yes'),
(32, 'moderation_keys', '', 'no'),
(33, 'active_plugins', 'a:5:{i:0;s:30:\"advanced-custom-fields/acf.php\";i:1;s:36:\"contact-form-7/wp-contact-form-7.php\";i:2;s:23:\"prismatic/prismatic.php\";i:3;s:51:\"sharethis-share-buttons/sharethis-share-buttons.php\";i:4;s:37:\"wp-post-author/aft-wp-post-author.php\";}', 'yes'),
(34, 'category_base', '', 'yes'),
(35, 'ping_sites', 'http://rpc.pingomatic.com/', 'yes'),
(36, 'comment_max_links', '2', 'yes'),
(37, 'gmt_offset', '0', 'yes'),
(38, 'default_email_category', '1', 'yes'),
(39, 'recently_edited', '', 'no'),
(40, 'template', 'developertips', 'yes'),
(41, 'stylesheet', 'developertips', 'yes'),
(42, 'comment_registration', '', 'yes'),
(43, 'html_type', 'text/html', 'yes'),
(44, 'use_trackback', '0', 'yes'),
(45, 'default_role', 'subscriber', 'yes'),
(46, 'db_version', '51917', 'yes'),
(47, 'uploads_use_yearmonth_folders', '1', 'yes'),
(48, 'upload_path', '', 'yes'),
(49, 'blog_public', '0', 'yes'),
(50, 'default_link_category', '2', 'yes'),
(51, 'show_on_front', 'page', 'yes'),
(52, 'tag_base', '', 'yes'),
(53, 'show_avatars', '1', 'yes'),
(54, 'avatar_rating', 'G', 'yes'),
(55, 'upload_url_path', '', 'yes'),
(56, 'thumbnail_size_w', '150', 'yes'),
(57, 'thumbnail_size_h', '150', 'yes'),
(58, 'thumbnail_crop', '1', 'yes'),
(59, 'medium_size_w', '300', 'yes'),
(60, 'medium_size_h', '300', 'yes'),
(61, 'avatar_default', 'retro', 'yes'),
(62, 'large_size_w', '1024', 'yes'),
(63, 'large_size_h', '1024', 'yes'),
(64, 'image_default_link_type', 'none', 'yes'),
(65, 'image_default_size', '', 'yes'),
(66, 'image_default_align', '', 'yes'),
(67, 'close_comments_for_old_posts', '', 'yes'),
(68, 'close_comments_days_old', '14', 'yes'),
(69, 'thread_comments', '1', 'yes'),
(70, 'thread_comments_depth', '5', 'yes'),
(71, 'page_comments', '', 'yes'),
(72, 'comments_per_page', '50', 'yes'),
(73, 'default_comments_page', 'newest', 'yes'),
(74, 'comment_order', 'asc', 'yes'),
(75, 'sticky_posts', 'a:0:{}', 'yes'),
(76, 'widget_categories', 'a:2:{i:1;a:0:{}s:12:\"_multiwidget\";i:1;}', 'yes'),
(77, 'widget_text', 'a:2:{i:1;a:0:{}s:12:\"_multiwidget\";i:1;}', 'yes'),
(78, 'widget_rss', 'a:2:{i:1;a:0:{}s:12:\"_multiwidget\";i:1;}', 'yes'),
(79, 'uninstall_plugins', 'a:0:{}', 'no'),
(80, 'timezone_string', '', 'yes'),
(81, 'page_for_posts', '0', 'yes'),
(82, 'page_on_front', '23', 'yes'),
(83, 'default_post_format', '0', 'yes'),
(84, 'link_manager_enabled', '0', 'yes'),
(85, 'finished_splitting_shared_terms', '1', 'yes'),
(86, 'site_icon', '0', 'yes'),
(87, 'medium_large_size_w', '768', 'yes'),
(88, 'medium_large_size_h', '0', 'yes'),
(89, 'wp_page_for_privacy_policy', '3', 'yes'),
(90, 'show_comments_cookies_opt_in', '1', 'yes'),
(91, 'admin_email_lifespan', '1659081994', 'yes'),
(92, 'disallowed_keys', '', 'no'),
(93, 'comment_previously_approved', '1', 'yes'),
(94, 'auto_plugin_theme_update_emails', 'a:0:{}', 'no'),
(95, 'auto_update_core_dev', 'enabled', 'yes'),
(96, 'auto_update_core_minor', 'enabled', 'yes'),
(97, 'auto_update_core_major', 'enabled', 'yes'),
(98, 'wp_force_deactivated_plugins', 'a:0:{}', 'yes'),
(99, 'initial_db_version', '51917', 'yes'),
(100, 'wp_user_roles', 'a:5:{s:13:\"administrator\";a:2:{s:4:\"name\";s:13:\"Administrator\";s:12:\"capabilities\";a:61:{s:13:\"switch_themes\";b:1;s:11:\"edit_themes\";b:1;s:16:\"activate_plugins\";b:1;s:12:\"edit_plugins\";b:1;s:10:\"edit_users\";b:1;s:10:\"edit_files\";b:1;s:14:\"manage_options\";b:1;s:17:\"moderate_comments\";b:1;s:17:\"manage_categories\";b:1;s:12:\"manage_links\";b:1;s:12:\"upload_files\";b:1;s:6:\"import\";b:1;s:15:\"unfiltered_html\";b:1;s:10:\"edit_posts\";b:1;s:17:\"edit_others_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:10:\"edit_pages\";b:1;s:4:\"read\";b:1;s:8:\"level_10\";b:1;s:7:\"level_9\";b:1;s:7:\"level_8\";b:1;s:7:\"level_7\";b:1;s:7:\"level_6\";b:1;s:7:\"level_5\";b:1;s:7:\"level_4\";b:1;s:7:\"level_3\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:17:\"edit_others_pages\";b:1;s:20:\"edit_published_pages\";b:1;s:13:\"publish_pages\";b:1;s:12:\"delete_pages\";b:1;s:19:\"delete_others_pages\";b:1;s:22:\"delete_published_pages\";b:1;s:12:\"delete_posts\";b:1;s:19:\"delete_others_posts\";b:1;s:22:\"delete_published_posts\";b:1;s:20:\"delete_private_posts\";b:1;s:18:\"edit_private_posts\";b:1;s:18:\"read_private_posts\";b:1;s:20:\"delete_private_pages\";b:1;s:18:\"edit_private_pages\";b:1;s:18:\"read_private_pages\";b:1;s:12:\"delete_users\";b:1;s:12:\"create_users\";b:1;s:17:\"unfiltered_upload\";b:1;s:14:\"edit_dashboard\";b:1;s:14:\"update_plugins\";b:1;s:14:\"delete_plugins\";b:1;s:15:\"install_plugins\";b:1;s:13:\"update_themes\";b:1;s:14:\"install_themes\";b:1;s:11:\"update_core\";b:1;s:10:\"list_users\";b:1;s:12:\"remove_users\";b:1;s:13:\"promote_users\";b:1;s:18:\"edit_theme_options\";b:1;s:13:\"delete_themes\";b:1;s:6:\"export\";b:1;}}s:6:\"editor\";a:2:{s:4:\"name\";s:6:\"Editor\";s:12:\"capabilities\";a:34:{s:17:\"moderate_comments\";b:1;s:17:\"manage_categories\";b:1;s:12:\"manage_links\";b:1;s:12:\"upload_files\";b:1;s:15:\"unfiltered_html\";b:1;s:10:\"edit_posts\";b:1;s:17:\"edit_others_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:10:\"edit_pages\";b:1;s:4:\"read\";b:1;s:7:\"level_7\";b:1;s:7:\"level_6\";b:1;s:7:\"level_5\";b:1;s:7:\"level_4\";b:1;s:7:\"level_3\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:17:\"edit_others_pages\";b:1;s:20:\"edit_published_pages\";b:1;s:13:\"publish_pages\";b:1;s:12:\"delete_pages\";b:1;s:19:\"delete_others_pages\";b:1;s:22:\"delete_published_pages\";b:1;s:12:\"delete_posts\";b:1;s:19:\"delete_others_posts\";b:1;s:22:\"delete_published_posts\";b:1;s:20:\"delete_private_posts\";b:1;s:18:\"edit_private_posts\";b:1;s:18:\"read_private_posts\";b:1;s:20:\"delete_private_pages\";b:1;s:18:\"edit_private_pages\";b:1;s:18:\"read_private_pages\";b:1;}}s:6:\"author\";a:2:{s:4:\"name\";s:6:\"Author\";s:12:\"capabilities\";a:10:{s:12:\"upload_files\";b:1;s:10:\"edit_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:4:\"read\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:12:\"delete_posts\";b:1;s:22:\"delete_published_posts\";b:1;}}s:11:\"contributor\";a:2:{s:4:\"name\";s:11:\"Contributor\";s:12:\"capabilities\";a:5:{s:10:\"edit_posts\";b:1;s:4:\"read\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:12:\"delete_posts\";b:1;}}s:10:\"subscriber\";a:2:{s:4:\"name\";s:10:\"Subscriber\";s:12:\"capabilities\";a:2:{s:4:\"read\";b:1;s:7:\"level_0\";b:1;}}}', 'yes'),
(101, 'fresh_site', '0', 'yes'),
(102, 'widget_block', 'a:6:{i:2;a:1:{s:7:\"content\";s:19:\"<!-- wp:search /-->\";}i:3;a:1:{s:7:\"content\";s:154:\"<!-- wp:group --><div class=\"wp-block-group\"><!-- wp:heading --><h2>Recent Posts</h2><!-- /wp:heading --><!-- wp:latest-posts /--></div><!-- /wp:group -->\";}i:4;a:1:{s:7:\"content\";s:227:\"<!-- wp:group --><div class=\"wp-block-group\"><!-- wp:heading --><h2>Recent Comments</h2><!-- /wp:heading --><!-- wp:latest-comments {\"displayAvatar\":false,\"displayDate\":false,\"displayExcerpt\":false} /--></div><!-- /wp:group -->\";}i:5;a:1:{s:7:\"content\";s:146:\"<!-- wp:group --><div class=\"wp-block-group\"><!-- wp:heading --><h2>Archives</h2><!-- /wp:heading --><!-- wp:archives /--></div><!-- /wp:group -->\";}i:6;a:1:{s:7:\"content\";s:150:\"<!-- wp:group --><div class=\"wp-block-group\"><!-- wp:heading --><h2>Categories</h2><!-- /wp:heading --><!-- wp:categories /--></div><!-- /wp:group -->\";}s:12:\"_multiwidget\";i:1;}', 'yes'),
(103, 'sidebars_widgets', 'a:2:{s:19:\"wp_inactive_widgets\";a:5:{i:0;s:7:\"block-2\";i:1;s:7:\"block-3\";i:2;s:7:\"block-4\";i:3;s:7:\"block-5\";i:4;s:7:\"block-6\";}s:13:\"array_version\";i:3;}', 'yes'),
(104, 'cron', 'a:9:{i:1666807639;a:1:{s:34:\"wp_privacy_delete_old_export_files\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:6:\"hourly\";s:4:\"args\";a:0:{}s:8:\"interval\";i:3600;}}}i:1666814838;a:1:{s:18:\"wp_https_detection\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1666814840;a:3:{s:16:\"wp_version_check\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:17:\"wp_update_plugins\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:16:\"wp_update_themes\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1666858030;a:1:{s:32:\"recovery_mode_clean_expired_keys\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1666858101;a:1:{s:19:\"wp_scheduled_delete\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1666858102;a:1:{s:25:\"delete_expired_transients\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1666858116;a:1:{s:30:\"wp_scheduled_auto_draft_delete\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1667203630;a:1:{s:30:\"wp_site_health_scheduled_check\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:6:\"weekly\";s:4:\"args\";a:0:{}s:8:\"interval\";i:604800;}}}s:7:\"version\";i:2;}', 'yes'),
(105, 'widget_pages', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(106, 'widget_calendar', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(107, 'widget_archives', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(108, 'widget_media_audio', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(109, 'widget_media_image', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(110, 'widget_media_gallery', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(111, 'widget_media_video', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(112, 'widget_meta', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(113, 'widget_search', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(114, 'widget_tag_cloud', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(115, 'widget_nav_menu', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(116, 'widget_custom_html', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(119, 'theme_mods_twentytwentytwo', 'a:2:{s:18:\"custom_css_post_id\";i:-1;s:16:\"sidebars_widgets\";a:2:{s:4:\"time\";i:1643542843;s:4:\"data\";a:3:{s:19:\"wp_inactive_widgets\";a:0:{}s:9:\"sidebar-1\";a:3:{i:0;s:7:\"block-2\";i:1;s:7:\"block-3\";i:2;s:7:\"block-4\";}s:9:\"sidebar-2\";a:2:{i:0;s:7:\"block-5\";i:1;s:7:\"block-6\";}}}}', 'yes'),
(120, 'recovery_keys', 'a:0:{}', 'yes'),
(121, 'https_detection_errors', 'a:2:{s:23:\"ssl_verification_failed\";a:1:{i:0;s:24:\"SSL verification failed.\";}s:19:\"bad_response_source\";a:1:{i:0;s:55:\"It looks like the response did not come from this site.\";}}', 'yes'),
(122, '_site_transient_update_core', 'O:8:\"stdClass\":4:{s:7:\"updates\";a:3:{i:0;O:8:\"stdClass\":10:{s:8:\"response\";s:7:\"upgrade\";s:8:\"download\";s:59:\"https://downloads.wordpress.org/release/wordpress-6.0.3.zip\";s:6:\"locale\";s:5:\"en_US\";s:8:\"packages\";O:8:\"stdClass\":5:{s:4:\"full\";s:59:\"https://downloads.wordpress.org/release/wordpress-6.0.3.zip\";s:10:\"no_content\";s:70:\"https://downloads.wordpress.org/release/wordpress-6.0.3-no-content.zip\";s:11:\"new_bundled\";s:71:\"https://downloads.wordpress.org/release/wordpress-6.0.3-new-bundled.zip\";s:7:\"partial\";s:0:\"\";s:8:\"rollback\";s:0:\"\";}s:7:\"current\";s:5:\"6.0.3\";s:7:\"version\";s:5:\"6.0.3\";s:11:\"php_version\";s:6:\"5.6.20\";s:13:\"mysql_version\";s:3:\"5.0\";s:11:\"new_bundled\";s:3:\"5.9\";s:15:\"partial_version\";s:0:\"\";}i:1;O:8:\"stdClass\":11:{s:8:\"response\";s:10:\"autoupdate\";s:8:\"download\";s:59:\"https://downloads.wordpress.org/release/wordpress-6.0.3.zip\";s:6:\"locale\";s:5:\"en_US\";s:8:\"packages\";O:8:\"stdClass\":5:{s:4:\"full\";s:59:\"https://downloads.wordpress.org/release/wordpress-6.0.3.zip\";s:10:\"no_content\";s:70:\"https://downloads.wordpress.org/release/wordpress-6.0.3-no-content.zip\";s:11:\"new_bundled\";s:71:\"https://downloads.wordpress.org/release/wordpress-6.0.3-new-bundled.zip\";s:7:\"partial\";s:0:\"\";s:8:\"rollback\";s:0:\"\";}s:7:\"current\";s:5:\"6.0.3\";s:7:\"version\";s:5:\"6.0.3\";s:11:\"php_version\";s:6:\"5.6.20\";s:13:\"mysql_version\";s:3:\"5.0\";s:11:\"new_bundled\";s:3:\"5.9\";s:15:\"partial_version\";s:0:\"\";s:9:\"new_files\";s:1:\"1\";}i:2;O:8:\"stdClass\":11:{s:8:\"response\";s:10:\"autoupdate\";s:8:\"download\";s:59:\"https://downloads.wordpress.org/release/wordpress-5.9.5.zip\";s:6:\"locale\";s:5:\"en_US\";s:8:\"packages\";O:8:\"stdClass\":5:{s:4:\"full\";s:59:\"https://downloads.wordpress.org/release/wordpress-5.9.5.zip\";s:10:\"no_content\";s:70:\"https://downloads.wordpress.org/release/wordpress-5.9.5-no-content.zip\";s:11:\"new_bundled\";s:71:\"https://downloads.wordpress.org/release/wordpress-5.9.5-new-bundled.zip\";s:7:\"partial\";s:69:\"https://downloads.wordpress.org/release/wordpress-5.9.5-partial-0.zip\";s:8:\"rollback\";s:70:\"https://downloads.wordpress.org/release/wordpress-5.9.5-rollback-0.zip\";}s:7:\"current\";s:5:\"5.9.5\";s:7:\"version\";s:5:\"5.9.5\";s:11:\"php_version\";s:6:\"5.6.20\";s:13:\"mysql_version\";s:3:\"5.0\";s:11:\"new_bundled\";s:3:\"5.9\";s:15:\"partial_version\";s:3:\"5.9\";s:9:\"new_files\";s:0:\"\";}}s:12:\"last_checked\";i:1666805999;s:15:\"version_checked\";s:3:\"5.9\";s:12:\"translations\";a:0:{}}', 'no'),
(145, 'can_compress_scripts', '1', 'no'),
(151, 'finished_updating_comment_type', '1', 'yes'),
(157, 'current_theme', 'JsBlogger', 'yes'),
(158, 'theme_mods_developertips', 'a:4:{i:0;b:0;s:18:\"nav_menu_locations\";a:1:{s:7:\"primary\";i:4;}s:18:\"custom_css_post_id\";i:-1;s:16:\"sidebars_widgets\";a:2:{s:4:\"time\";i:1650620055;s:4:\"data\";a:1:{s:19:\"wp_inactive_widgets\";a:5:{i:0;s:7:\"block-2\";i:1;s:7:\"block-3\";i:2;s:7:\"block-4\";i:3;s:7:\"block-5\";i:4;s:7:\"block-6\";}}}}', 'yes'),
(159, 'theme_switched', '', 'yes'),
(168, '_transient_health-check-site-status-result', '{\"good\":11,\"recommended\":7,\"critical\":1}', 'yes'),
(344, 'recently_activated', 'a:3:{s:43:\"molongui-authorship/molongui-authorship.php\";i:1650798584;s:39:\"simple-author-box/simple-author-box.php\";i:1650798243;s:32:\"disqus-comment-system/disqus.php\";i:1650619422;}', 'yes'),
(358, 'nav_menu_options', 'a:2:{i:0;b:0;s:8:\"auto_add\";a:0:{}}', 'yes'),
(657, 'WPLANG', '', 'yes'),
(658, 'new_admin_email', 'tharindurumesh20@gmail.com', 'yes'),
(663, 'recovery_mode_email_last_sent', '1645360432', 'yes'),
(680, 'category_children', 'a:0:{}', 'yes'),
(940, 'widget_recent-comments', 'a:2:{i:1;a:0:{}s:12:\"_multiwidget\";i:1;}', 'yes'),
(941, 'widget_recent-posts', 'a:2:{i:1;a:0:{}s:12:\"_multiwidget\";i:1;}', 'yes'),
(970, 'acf_version', '5.12.2', 'yes'),
(1164, 'prismatic_options_general', 'a:2:{s:7:\"library\";s:9:\"highlight\";s:20:\"disable_block_styles\";i:1;}', 'yes'),
(1179, 'prismatic_options_prism', 'a:10:{s:11:\"prism_theme\";s:14:\"tomorrow-night\";s:14:\"copy_clipboard\";i:1;s:13:\"singular_only\";i:1;s:14:\"filter_content\";s:4:\"none\";s:15:\"filter_excerpts\";s:4:\"none\";s:15:\"filter_comments\";s:4:\"none\";s:14:\"line_highlight\";i:0;s:12:\"line_numbers\";i:0;s:13:\"show_language\";i:0;s:12:\"command_line\";i:0;}', 'yes'),
(1198, 'prismatic_options_highlight', 'a:7:{s:15:\"highlight_theme\";s:14:\"tomorrow-night\";s:15:\"init_javascript\";s:30:\"hljs.initHighlightingOnLoad();\";s:16:\"noprefix_classes\";s:1:\"1\";s:13:\"singular_only\";i:1;s:14:\"filter_content\";s:4:\"none\";s:15:\"filter_excerpts\";s:4:\"none\";s:15:\"filter_comments\";s:4:\"none\";}', 'yes'),
(1221, 'sharethis_inline_settings', 'a:15:{s:25:\"sharethis_inline_post_top\";s:4:\"true\";s:36:\"sharethis_inline_post_top_margin_top\";s:1:\"0\";s:39:\"sharethis_inline_post_top_margin_bottom\";s:1:\"0\";s:28:\"sharethis_inline_post_bottom\";s:5:\"false\";s:39:\"sharethis_inline_post_bottom_margin_top\";s:1:\"0\";s:42:\"sharethis_inline_post_bottom_margin_bottom\";s:1:\"0\";s:25:\"sharethis_inline_page_top\";s:5:\"false\";s:36:\"sharethis_inline_page_top_margin_top\";s:1:\"0\";s:39:\"sharethis_inline_page_top_margin_bottom\";s:1:\"0\";s:28:\"sharethis_inline_page_bottom\";s:5:\"false\";s:39:\"sharethis_inline_page_bottom_margin_top\";s:1:\"0\";s:42:\"sharethis_inline_page_bottom_margin_bottom\";s:1:\"0\";s:17:\"sharethis_excerpt\";s:5:\"false\";s:28:\"sharethis_excerpt_margin_top\";s:1:\"0\";s:31:\"sharethis_excerpt_margin_bottom\";s:1:\"0\";}', 'yes'),
(1222, 'sharethis_sticky_settings', 'a:7:{s:21:\"sharethis_sticky_home\";s:4:\"true\";s:21:\"sharethis_sticky_post\";s:4:\"true\";s:29:\"sharethis_sticky_custom_posts\";s:4:\"true\";s:21:\"sharethis_sticky_page\";s:4:\"true\";s:25:\"sharethis_sticky_category\";s:4:\"true\";s:21:\"sharethis_sticky_tags\";s:4:\"true\";s:23:\"sharethis_sticky_author\";s:4:\"true\";}', 'yes'),
(1223, 'sharethis_sticky_page_off', '', 'yes'),
(1224, 'sharethis_sticky_category_off', '', 'yes'),
(1225, 'widget_st_button_widget', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(1226, 'sharethis_button_config', 'a:1:{s:4:\"gdpr\";a:7:{s:7:\"enabled\";b:0;s:7:\"display\";s:2:\"eu\";s:18:\"publisher_purposes\";a:6:{i:0;a:2:{s:2:\"id\";s:1:\"1\";s:19:\"legitimate_interest\";s:5:\"false\";}i:1;a:2:{s:2:\"id\";s:1:\"3\";s:19:\"legitimate_interest\";s:5:\"false\";}i:2;a:2:{s:2:\"id\";s:1:\"5\";s:19:\"legitimate_interest\";s:5:\"false\";}i:3;a:2:{s:2:\"id\";s:1:\"6\";s:19:\"legitimate_interest\";s:5:\"false\";}i:4;a:2:{s:2:\"id\";s:1:\"9\";s:19:\"legitimate_interest\";s:4:\"true\";}i:5;a:2:{s:2:\"id\";s:2:\"10\";s:19:\"legitimate_interest\";s:4:\"true\";}}s:8:\"language\";s:2:\"en\";s:5:\"scope\";s:9:\"publisher\";s:10:\"updated_at\";s:24:\"2022-04-22T09:02:08.032Z\";s:2:\"ts\";s:13:\"1650618128032\";}}', 'yes'),
(1227, 'sharethis_property_id', '62626c7f3244b60019326403-5c44b3a0-c219-11ec-9043-75c28141f307', 'yes'),
(1228, 'sharethis_token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MjYyNmM3ZWZkY2ZlNjAwMTFlNWQwMmQiLCJlbWFpbCI6InJ1bWVzaHRoYXJpbmR1OTZAZ21haWwuY29tIiwiaXNzIjoic3NvLnNoYXJldGhpcy5jb20iLCJleHAiOjE2NTEyMjIyNzAsImlhdCI6MTY1MDYxNzQ3MH0.ztjZun8PJcQHuZrOM9YbLX4E9UXX09zMoOT5MY_UBik', 'yes'),
(1229, 'sharethis_inline', 'true', 'yes'),
(1230, 'sharethis_sticky', 'false', 'yes'),
(1231, 'sharethis_gdpr', 'false', 'yes'),
(1232, 'sharethis_first_product', 'gdpr', 'yes'),
(1235, 'sharethis_shortcode', '', 'yes'),
(1236, 'sharethis_template', '', 'yes'),
(1288, 'theme_mods_twentytwentyone', 'a:4:{i:0;b:0;s:18:\"nav_menu_locations\";a:1:{s:7:\"primary\";i:4;}s:18:\"custom_css_post_id\";i:-1;s:16:\"sidebars_widgets\";a:2:{s:4:\"time\";i:1650620180;s:4:\"data\";a:2:{s:19:\"wp_inactive_widgets\";a:5:{i:0;s:7:\"block-2\";i:1;s:7:\"block-3\";i:2;s:7:\"block-4\";i:3;s:7:\"block-5\";i:4;s:7:\"block-6\";}s:9:\"sidebar-1\";a:0:{}}}}', 'yes'),
(1356, 'sab_version', '2.48', 'yes'),
(1358, 'widget_simple_author_box_widget_lite', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(1377, '19', 'authorship', 'yes'),
(1378, 'molongui_authorship_installation', 'a:2:{s:12:\"install_date\";i:1650798386;s:15:\"install_version\";s:5:\"4.5.4\";}', 'no'),
(1379, 'molongui_authorship_options', 'a:0:{}', 'yes'),
(1381, 'molongui_authorship_db_version', '19', 'yes'),
(1387, 'widget_wp__post_author', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(1388, 'widget_wp__post_author_custom', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(1389, 'widget_wp__post_author_specific', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(1390, 'awpa_setting_options', 'a:7:{s:17:\"awpa_global_title\";s:17:\"About Post Author\";s:17:\"awpa_global_align\";s:4:\"left\";s:24:\"awpa_global_image_layout\";s:6:\"square\";s:21:\"awpa_global_show_role\";s:5:\"false\";s:22:\"awpa_global_show_email\";s:5:\"false\";s:26:\"awpa_also_visibile_in_blog\";s:4:\"blog\";s:29:\"awpa_also_visibile_in_youtube\";s:7:\"youtube\";}', 'yes'),
(1676, 'wpcf7', 'a:2:{s:7:\"version\";s:5:\"5.5.6\";s:13:\"bulk_validate\";a:4:{s:9:\"timestamp\";i:1651057395;s:7:\"version\";s:5:\"5.5.6\";s:11:\"count_valid\";i:1;s:13:\"count_invalid\";i:0;}}', 'yes'),
(1761, 'secret_key', 'r&ze=s^Oyz/|KWGVnG99tv-b_1)])4diQ421i[NkpfWs%n5fb]uI?/Ok{]it`%o$', 'no'),
(2125, '_site_transient_timeout_theme_roots', '1666807792', 'no'),
(2126, '_site_transient_theme_roots', 'a:2:{s:13:\"developertips\";s:7:\"/themes\";s:15:\"twentytwentyone\";s:7:\"/themes\";}', 'no'),
(2129, '_site_transient_timeout_php_check_3a6f2a803f99347534e67553ed67d1ad', '1667410793', 'no'),
(2130, '_site_transient_php_check_3a6f2a803f99347534e67553ed67d1ad', 'a:5:{s:19:\"recommended_version\";s:3:\"7.4\";s:15:\"minimum_version\";s:6:\"5.6.20\";s:12:\"is_supported\";b:1;s:9:\"is_secure\";b:1;s:13:\"is_acceptable\";b:1;}', 'no'),
(2132, '_site_transient_update_themes', 'O:8:\"stdClass\":5:{s:12:\"last_checked\";i:1666806003;s:7:\"checked\";a:2:{s:13:\"developertips\";s:5:\"1.0.0\";s:15:\"twentytwentyone\";s:3:\"1.5\";}s:8:\"response\";a:1:{s:15:\"twentytwentyone\";a:6:{s:5:\"theme\";s:15:\"twentytwentyone\";s:11:\"new_version\";s:3:\"1.6\";s:3:\"url\";s:45:\"https://wordpress.org/themes/twentytwentyone/\";s:7:\"package\";s:61:\"https://downloads.wordpress.org/theme/twentytwentyone.1.6.zip\";s:8:\"requires\";s:3:\"5.3\";s:12:\"requires_php\";s:3:\"5.6\";}}s:9:\"no_update\";a:0:{}s:12:\"translations\";a:0:{}}', 'no'),
(2133, '_site_transient_update_plugins', 'O:8:\"stdClass\":5:{s:12:\"last_checked\";i:1666806004;s:8:\"response\";a:6:{s:30:\"advanced-custom-fields/acf.php\";O:8:\"stdClass\":12:{s:2:\"id\";s:36:\"w.org/plugins/advanced-custom-fields\";s:4:\"slug\";s:22:\"advanced-custom-fields\";s:6:\"plugin\";s:30:\"advanced-custom-fields/acf.php\";s:11:\"new_version\";s:5:\"6.0.3\";s:3:\"url\";s:53:\"https://wordpress.org/plugins/advanced-custom-fields/\";s:7:\"package\";s:71:\"https://downloads.wordpress.org/plugin/advanced-custom-fields.6.0.3.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:75:\"https://ps.w.org/advanced-custom-fields/assets/icon-256x256.png?rev=1082746\";s:2:\"1x\";s:75:\"https://ps.w.org/advanced-custom-fields/assets/icon-128x128.png?rev=1082746\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:78:\"https://ps.w.org/advanced-custom-fields/assets/banner-1544x500.jpg?rev=1729099\";s:2:\"1x\";s:77:\"https://ps.w.org/advanced-custom-fields/assets/banner-772x250.jpg?rev=1729102\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"4.7\";s:6:\"tested\";s:5:\"6.0.3\";s:12:\"requires_php\";s:3:\"5.6\";}s:19:\"akismet/akismet.php\";O:8:\"stdClass\":12:{s:2:\"id\";s:21:\"w.org/plugins/akismet\";s:4:\"slug\";s:7:\"akismet\";s:6:\"plugin\";s:19:\"akismet/akismet.php\";s:11:\"new_version\";s:5:\"5.0.1\";s:3:\"url\";s:38:\"https://wordpress.org/plugins/akismet/\";s:7:\"package\";s:56:\"https://downloads.wordpress.org/plugin/akismet.5.0.1.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:59:\"https://ps.w.org/akismet/assets/icon-256x256.png?rev=969272\";s:2:\"1x\";s:59:\"https://ps.w.org/akismet/assets/icon-128x128.png?rev=969272\";}s:7:\"banners\";a:1:{s:2:\"1x\";s:61:\"https://ps.w.org/akismet/assets/banner-772x250.jpg?rev=479904\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"5.0\";s:6:\"tested\";s:5:\"6.0.3\";s:12:\"requires_php\";s:3:\"5.2\";}s:36:\"contact-form-7/wp-contact-form-7.php\";O:8:\"stdClass\":12:{s:2:\"id\";s:28:\"w.org/plugins/contact-form-7\";s:4:\"slug\";s:14:\"contact-form-7\";s:6:\"plugin\";s:36:\"contact-form-7/wp-contact-form-7.php\";s:11:\"new_version\";s:5:\"5.6.4\";s:3:\"url\";s:45:\"https://wordpress.org/plugins/contact-form-7/\";s:7:\"package\";s:63:\"https://downloads.wordpress.org/plugin/contact-form-7.5.6.4.zip\";s:5:\"icons\";a:3:{s:2:\"2x\";s:67:\"https://ps.w.org/contact-form-7/assets/icon-256x256.png?rev=2279696\";s:2:\"1x\";s:59:\"https://ps.w.org/contact-form-7/assets/icon.svg?rev=2339255\";s:3:\"svg\";s:59:\"https://ps.w.org/contact-form-7/assets/icon.svg?rev=2339255\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:69:\"https://ps.w.org/contact-form-7/assets/banner-1544x500.png?rev=860901\";s:2:\"1x\";s:68:\"https://ps.w.org/contact-form-7/assets/banner-772x250.png?rev=880427\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"5.9\";s:6:\"tested\";s:3:\"6.1\";s:12:\"requires_php\";b:0;}s:23:\"prismatic/prismatic.php\";O:8:\"stdClass\":12:{s:2:\"id\";s:23:\"w.org/plugins/prismatic\";s:4:\"slug\";s:9:\"prismatic\";s:6:\"plugin\";s:23:\"prismatic/prismatic.php\";s:11:\"new_version\";s:5:\"3.2.2\";s:3:\"url\";s:40:\"https://wordpress.org/plugins/prismatic/\";s:7:\"package\";s:58:\"https://downloads.wordpress.org/plugin/prismatic.3.2.2.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:62:\"https://ps.w.org/prismatic/assets/icon-256x256.png?rev=1521267\";s:2:\"1x\";s:62:\"https://ps.w.org/prismatic/assets/icon-128x128.png?rev=1521267\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:65:\"https://ps.w.org/prismatic/assets/banner-1544x500.jpg?rev=1521267\";s:2:\"1x\";s:64:\"https://ps.w.org/prismatic/assets/banner-772x250.jpg?rev=1521267\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"4.6\";s:6:\"tested\";s:3:\"6.1\";s:12:\"requires_php\";s:6:\"5.6.20\";}s:51:\"sharethis-share-buttons/sharethis-share-buttons.php\";O:8:\"stdClass\":12:{s:2:\"id\";s:37:\"w.org/plugins/sharethis-share-buttons\";s:4:\"slug\";s:23:\"sharethis-share-buttons\";s:6:\"plugin\";s:51:\"sharethis-share-buttons/sharethis-share-buttons.php\";s:11:\"new_version\";s:5:\"2.1.5\";s:3:\"url\";s:54:\"https://wordpress.org/plugins/sharethis-share-buttons/\";s:7:\"package\";s:72:\"https://downloads.wordpress.org/plugin/sharethis-share-buttons.2.1.5.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:76:\"https://ps.w.org/sharethis-share-buttons/assets/icon-256x256.gif?rev=2782088\";s:2:\"1x\";s:76:\"https://ps.w.org/sharethis-share-buttons/assets/icon-128x128.gif?rev=2782088\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:79:\"https://ps.w.org/sharethis-share-buttons/assets/banner-1544x500.jpg?rev=2587274\";s:2:\"1x\";s:78:\"https://ps.w.org/sharethis-share-buttons/assets/banner-772x250.jpg?rev=2587274\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"5.5\";s:6:\"tested\";s:5:\"6.0.3\";s:12:\"requires_php\";b:0;}s:37:\"wp-post-author/aft-wp-post-author.php\";O:8:\"stdClass\":12:{s:2:\"id\";s:28:\"w.org/plugins/wp-post-author\";s:4:\"slug\";s:14:\"wp-post-author\";s:6:\"plugin\";s:37:\"wp-post-author/aft-wp-post-author.php\";s:11:\"new_version\";s:5:\"3.2.1\";s:3:\"url\";s:45:\"https://wordpress.org/plugins/wp-post-author/\";s:7:\"package\";s:57:\"https://downloads.wordpress.org/plugin/wp-post-author.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:67:\"https://ps.w.org/wp-post-author/assets/icon-256x256.png?rev=2404051\";s:2:\"1x\";s:67:\"https://ps.w.org/wp-post-author/assets/icon-128x128.png?rev=2404051\";}s:7:\"banners\";a:1:{s:2:\"1x\";s:69:\"https://ps.w.org/wp-post-author/assets/banner-772x250.png?rev=2762943\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:5:\"3.0.1\";s:6:\"tested\";s:5:\"6.0.3\";s:12:\"requires_php\";b:0;}}s:12:\"translations\";a:0:{}s:9:\"no_update\";a:1:{s:9:\"hello.php\";O:8:\"stdClass\":10:{s:2:\"id\";s:25:\"w.org/plugins/hello-dolly\";s:4:\"slug\";s:11:\"hello-dolly\";s:6:\"plugin\";s:9:\"hello.php\";s:11:\"new_version\";s:5:\"1.7.2\";s:3:\"url\";s:42:\"https://wordpress.org/plugins/hello-dolly/\";s:7:\"package\";s:60:\"https://downloads.wordpress.org/plugin/hello-dolly.1.7.2.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:64:\"https://ps.w.org/hello-dolly/assets/icon-256x256.jpg?rev=2052855\";s:2:\"1x\";s:64:\"https://ps.w.org/hello-dolly/assets/icon-128x128.jpg?rev=2052855\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:67:\"https://ps.w.org/hello-dolly/assets/banner-1544x500.jpg?rev=2645582\";s:2:\"1x\";s:66:\"https://ps.w.org/hello-dolly/assets/banner-772x250.jpg?rev=2052855\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"4.6\";}}s:7:\"checked\";a:7:{s:30:\"advanced-custom-fields/acf.php\";s:6:\"5.12.2\";s:19:\"akismet/akismet.php\";s:5:\"4.2.2\";s:36:\"contact-form-7/wp-contact-form-7.php\";s:5:\"5.5.6\";s:9:\"hello.php\";s:5:\"1.7.2\";s:23:\"prismatic/prismatic.php\";s:3:\"3.0\";s:51:\"sharethis-share-buttons/sharethis-share-buttons.php\";s:5:\"1.5.7\";s:37:\"wp-post-author/aft-wp-post-author.php\";s:5:\"2.0.4\";}}', 'no'),
(2134, '_transient_timeout_global_styles_developertips', '1666806114', 'no');
INSERT INTO `wp_options` (`option_id`, `option_name`, `option_value`, `autoload`) VALUES
(2135, '_transient_global_styles_developertips', 'body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url(\'#wp-duotone-dark-grayscale\');--wp--preset--duotone--grayscale: url(\'#wp-duotone-grayscale\');--wp--preset--duotone--purple-yellow: url(\'#wp-duotone-purple-yellow\');--wp--preset--duotone--blue-red: url(\'#wp-duotone-blue-red\');--wp--preset--duotone--midnight: url(\'#wp-duotone-midnight\');--wp--preset--duotone--magenta-yellow: url(\'#wp-duotone-magenta-yellow\');--wp--preset--duotone--purple-green: url(\'#wp-duotone-purple-green\');--wp--preset--duotone--blue-orange: url(\'#wp-duotone-blue-orange\');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}', 'no');

-- --------------------------------------------------------

--
-- Table structure for table `wp_postmeta`
--

CREATE TABLE `wp_postmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_postmeta`
--

INSERT INTO `wp_postmeta` (`meta_id`, `post_id`, `meta_key`, `meta_value`) VALUES
(3, 5, '_wp_attached_file', '2022/02/dev-hero.png'),
(4, 5, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:430;s:6:\"height\";i:408;s:4:\"file\";s:20:\"2022/02/dev-hero.png\";s:5:\"sizes\";a:2:{s:6:\"medium\";a:4:{s:4:\"file\";s:20:\"dev-hero-300x285.png\";s:5:\"width\";i:300;s:6:\"height\";i:285;s:9:\"mime-type\";s:9:\"image/png\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:20:\"dev-hero-150x150.png\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(5, 7, '_wp_attached_file', '2022/02/YouTubeThumbnailMaker10.jpg'),
(6, 7, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:630;s:6:\"height\";i:352;s:4:\"file\";s:35:\"2022/02/YouTubeThumbnailMaker10.jpg\";s:5:\"sizes\";a:2:{s:6:\"medium\";a:4:{s:4:\"file\";s:35:\"YouTubeThumbnailMaker10-300x168.jpg\";s:5:\"width\";i:300;s:6:\"height\";i:168;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:35:\"YouTubeThumbnailMaker10-150x150.jpg\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/jpeg\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(51, 23, '_edit_lock', '1650619946:1'),
(53, 27, '_edit_lock', '1644669003:1'),
(54, 29, '_edit_lock', '1644669013:1'),
(55, 31, '_edit_lock', '1644669024:1'),
(56, 33, '_menu_item_type', 'post_type'),
(57, 33, '_menu_item_menu_item_parent', '0'),
(58, 33, '_menu_item_object_id', '23'),
(59, 33, '_menu_item_object', 'page'),
(60, 33, '_menu_item_target', ''),
(61, 33, '_menu_item_classes', 'a:1:{i:0;s:0:\"\";}'),
(62, 33, '_menu_item_xfn', ''),
(63, 33, '_menu_item_url', ''),
(65, 34, '_menu_item_type', 'post_type'),
(66, 34, '_menu_item_menu_item_parent', '0'),
(67, 34, '_menu_item_object_id', '29'),
(68, 34, '_menu_item_object', 'page'),
(69, 34, '_menu_item_target', ''),
(70, 34, '_menu_item_classes', 'a:1:{i:0;s:0:\"\";}'),
(71, 34, '_menu_item_xfn', ''),
(72, 34, '_menu_item_url', ''),
(83, 36, '_menu_item_type', 'post_type'),
(84, 36, '_menu_item_menu_item_parent', '0'),
(85, 36, '_menu_item_object_id', '31'),
(86, 36, '_menu_item_object', 'page'),
(87, 36, '_menu_item_target', ''),
(88, 36, '_menu_item_classes', 'a:1:{i:0;s:0:\"\";}'),
(89, 36, '_menu_item_xfn', ''),
(90, 36, '_menu_item_url', ''),
(92, 37, '_menu_item_type', 'post_type'),
(93, 37, '_menu_item_menu_item_parent', '0'),
(94, 37, '_menu_item_object_id', '27'),
(95, 37, '_menu_item_object', 'page'),
(96, 37, '_menu_item_target', ''),
(97, 37, '_menu_item_classes', 'a:1:{i:0;s:0:\"\";}'),
(98, 37, '_menu_item_xfn', ''),
(99, 37, '_menu_item_url', ''),
(101, 38, '_menu_item_type', 'post_type'),
(102, 38, '_menu_item_menu_item_parent', '0'),
(103, 38, '_menu_item_object_id', '31'),
(104, 38, '_menu_item_object', 'page'),
(105, 38, '_menu_item_target', ''),
(106, 38, '_menu_item_classes', 'a:1:{i:0;s:0:\"\";}'),
(107, 38, '_menu_item_xfn', ''),
(108, 38, '_menu_item_url', ''),
(110, 39, '_menu_item_type', 'post_type'),
(111, 39, '_menu_item_menu_item_parent', '0'),
(112, 39, '_menu_item_object_id', '29'),
(113, 39, '_menu_item_object', 'page'),
(114, 39, '_menu_item_target', ''),
(115, 39, '_menu_item_classes', 'a:1:{i:0;s:0:\"\";}'),
(116, 39, '_menu_item_xfn', ''),
(117, 39, '_menu_item_url', ''),
(119, 40, '_menu_item_type', 'post_type'),
(120, 40, '_menu_item_menu_item_parent', '0'),
(121, 40, '_menu_item_object_id', '27'),
(122, 40, '_menu_item_object', 'page'),
(123, 40, '_menu_item_target', ''),
(124, 40, '_menu_item_classes', 'a:1:{i:0;s:0:\"\";}'),
(125, 40, '_menu_item_xfn', ''),
(126, 40, '_menu_item_url', ''),
(137, 42, '_menu_item_type', 'post_type'),
(138, 42, '_menu_item_menu_item_parent', '0'),
(139, 42, '_menu_item_object_id', '23'),
(140, 42, '_menu_item_object', 'page'),
(141, 42, '_menu_item_target', ''),
(142, 42, '_menu_item_classes', 'a:1:{i:0;s:0:\"\";}'),
(143, 42, '_menu_item_xfn', ''),
(144, 42, '_menu_item_url', ''),
(154, 51, '_edit_lock', '1644780319:1'),
(155, 52, '_wp_attached_file', '2022/02/code-magnify.png'),
(156, 52, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:1000;s:6:\"height\";i:500;s:4:\"file\";s:24:\"2022/02/code-magnify.png\";s:5:\"sizes\";a:3:{s:6:\"medium\";a:4:{s:4:\"file\";s:24:\"code-magnify-300x150.png\";s:5:\"width\";i:300;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:24:\"code-magnify-150x150.png\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:24:\"code-magnify-768x384.png\";s:5:\"width\";i:768;s:6:\"height\";i:384;s:9:\"mime-type\";s:9:\"image/png\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(157, 51, '_thumbnail_id', '52'),
(162, 54, '_edit_lock', '1644756268:1'),
(163, 55, '_wp_attached_file', '2022/02/react.jpg'),
(164, 55, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:768;s:6:\"height\";i:384;s:4:\"file\";s:17:\"2022/02/react.jpg\";s:5:\"sizes\";a:2:{s:6:\"medium\";a:4:{s:4:\"file\";s:17:\"react-300x150.jpg\";s:5:\"width\";i:300;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:17:\"react-150x150.jpg\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/jpeg\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(165, 54, '_thumbnail_id', '55'),
(166, 56, '_edit_lock', '1644756763:1'),
(167, 57, '_wp_attached_file', '2022/02/custom-properties-code-block.png'),
(168, 57, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:1024;s:6:\"height\";i:512;s:4:\"file\";s:40:\"2022/02/custom-properties-code-block.png\";s:5:\"sizes\";a:3:{s:6:\"medium\";a:4:{s:4:\"file\";s:40:\"custom-properties-code-block-300x150.png\";s:5:\"width\";i:300;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:40:\"custom-properties-code-block-150x150.png\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:40:\"custom-properties-code-block-768x384.png\";s:5:\"width\";i:768;s:6:\"height\";i:384;s:9:\"mime-type\";s:9:\"image/png\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(169, 56, '_thumbnail_id', '57'),
(171, 51, '_edit_last', '1'),
(172, 61, '_edit_lock', '1645361208:1'),
(173, 62, '_wp_attached_file', '2022/02/paid-subscription-newsletter-thumb-no-text.png'),
(174, 62, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:1280;s:6:\"height\";i:720;s:4:\"file\";s:54:\"2022/02/paid-subscription-newsletter-thumb-no-text.png\";s:5:\"sizes\";a:4:{s:6:\"medium\";a:4:{s:4:\"file\";s:54:\"paid-subscription-newsletter-thumb-no-text-300x169.png\";s:5:\"width\";i:300;s:6:\"height\";i:169;s:9:\"mime-type\";s:9:\"image/png\";}s:5:\"large\";a:4:{s:4:\"file\";s:55:\"paid-subscription-newsletter-thumb-no-text-1024x576.png\";s:5:\"width\";i:1024;s:6:\"height\";i:576;s:9:\"mime-type\";s:9:\"image/png\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:54:\"paid-subscription-newsletter-thumb-no-text-150x150.png\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:54:\"paid-subscription-newsletter-thumb-no-text-768x432.png\";s:5:\"width\";i:768;s:6:\"height\";i:432;s:9:\"mime-type\";s:9:\"image/png\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(175, 61, '_thumbnail_id', '62'),
(176, 63, '_edit_lock', '1645361196:1'),
(177, 64, '_wp_attached_file', '2022/02/netflix-thumb.png'),
(178, 64, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:1280;s:6:\"height\";i:720;s:4:\"file\";s:25:\"2022/02/netflix-thumb.png\";s:5:\"sizes\";a:4:{s:6:\"medium\";a:4:{s:4:\"file\";s:25:\"netflix-thumb-300x169.png\";s:5:\"width\";i:300;s:6:\"height\";i:169;s:9:\"mime-type\";s:9:\"image/png\";}s:5:\"large\";a:4:{s:4:\"file\";s:26:\"netflix-thumb-1024x576.png\";s:5:\"width\";i:1024;s:6:\"height\";i:576;s:9:\"mime-type\";s:9:\"image/png\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:25:\"netflix-thumb-150x150.png\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:25:\"netflix-thumb-768x432.png\";s:5:\"width\";i:768;s:6:\"height\";i:432;s:9:\"mime-type\";s:9:\"image/png\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(179, 63, '_thumbnail_id', '64'),
(180, 65, '_edit_lock', '1650867514:1'),
(181, 66, '_wp_attached_file', '2022/02/astro-thumb-no-text.png'),
(182, 66, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:1280;s:6:\"height\";i:720;s:4:\"file\";s:31:\"2022/02/astro-thumb-no-text.png\";s:5:\"sizes\";a:4:{s:6:\"medium\";a:4:{s:4:\"file\";s:31:\"astro-thumb-no-text-300x169.png\";s:5:\"width\";i:300;s:6:\"height\";i:169;s:9:\"mime-type\";s:9:\"image/png\";}s:5:\"large\";a:4:{s:4:\"file\";s:32:\"astro-thumb-no-text-1024x576.png\";s:5:\"width\";i:1024;s:6:\"height\";i:576;s:9:\"mime-type\";s:9:\"image/png\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:31:\"astro-thumb-no-text-150x150.png\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:31:\"astro-thumb-no-text-768x432.png\";s:5:\"width\";i:768;s:6:\"height\";i:432;s:9:\"mime-type\";s:9:\"image/png\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(183, 65, '_thumbnail_id', '66'),
(187, 68, '_edit_lock', '1650024895:1'),
(194, 70, '_edit_lock', '1649594522:1'),
(195, 71, '_wp_attached_file', '2022/04/bookmarklets.webp'),
(196, 71, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:1000;s:6:\"height\";i:500;s:4:\"file\";s:25:\"2022/04/bookmarklets.webp\";s:5:\"sizes\";a:3:{s:6:\"medium\";a:4:{s:4:\"file\";s:25:\"bookmarklets-300x150.webp\";s:5:\"width\";i:300;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/webp\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:25:\"bookmarklets-150x150.webp\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/webp\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:25:\"bookmarklets-768x384.webp\";s:5:\"width\";i:768;s:6:\"height\";i:384;s:9:\"mime-type\";s:10:\"image/webp\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(197, 70, '_thumbnail_id', '71'),
(198, 72, '_edit_lock', '1649594455:1'),
(199, 73, '_wp_attached_file', '2022/04/xhtml.webp'),
(200, 73, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:1000;s:6:\"height\";i:500;s:4:\"file\";s:18:\"2022/04/xhtml.webp\";s:5:\"sizes\";a:3:{s:6:\"medium\";a:4:{s:4:\"file\";s:18:\"xhtml-300x150.webp\";s:5:\"width\";i:300;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/webp\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:18:\"xhtml-150x150.webp\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/webp\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:18:\"xhtml-768x384.webp\";s:5:\"width\";i:768;s:6:\"height\";i:384;s:9:\"mime-type\";s:10:\"image/webp\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(201, 72, '_thumbnail_id', '73'),
(202, 74, '_edit_lock', '1649594663:1'),
(203, 75, '_wp_attached_file', '2022/04/6-modern-css-color-1.jpg'),
(204, 75, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:768;s:6:\"height\";i:296;s:4:\"file\";s:32:\"2022/04/6-modern-css-color-1.jpg\";s:5:\"sizes\";a:2:{s:6:\"medium\";a:4:{s:4:\"file\";s:32:\"6-modern-css-color-1-300x116.jpg\";s:5:\"width\";i:300;s:6:\"height\";i:116;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:32:\"6-modern-css-color-1-150x150.jpg\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/jpeg\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(205, 74, '_thumbnail_id', '75'),
(206, 76, '_edit_lock', '1650038459:1'),
(207, 77, '_wp_attached_file', '2022/04/vite-cloudfront.webp'),
(208, 77, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:1000;s:6:\"height\";i:500;s:4:\"file\";s:28:\"2022/04/vite-cloudfront.webp\";s:5:\"sizes\";a:3:{s:6:\"medium\";a:4:{s:4:\"file\";s:28:\"vite-cloudfront-300x150.webp\";s:5:\"width\";i:300;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/webp\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:28:\"vite-cloudfront-150x150.webp\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/webp\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:28:\"vite-cloudfront-768x384.webp\";s:5:\"width\";i:768;s:6:\"height\";i:384;s:9:\"mime-type\";s:10:\"image/webp\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(209, 76, '_thumbnail_id', '77'),
(210, 78, '_wp_attached_file', '2022/04/logo-carousel.png'),
(211, 78, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:2504;s:6:\"height\";i:275;s:4:\"file\";s:25:\"2022/04/logo-carousel.png\";s:5:\"sizes\";a:6:{s:6:\"medium\";a:4:{s:4:\"file\";s:24:\"logo-carousel-300x33.png\";s:5:\"width\";i:300;s:6:\"height\";i:33;s:9:\"mime-type\";s:9:\"image/png\";}s:5:\"large\";a:4:{s:4:\"file\";s:26:\"logo-carousel-1024x112.png\";s:5:\"width\";i:1024;s:6:\"height\";i:112;s:9:\"mime-type\";s:9:\"image/png\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:25:\"logo-carousel-150x150.png\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:24:\"logo-carousel-768x84.png\";s:5:\"width\";i:768;s:6:\"height\";i:84;s:9:\"mime-type\";s:9:\"image/png\";}s:9:\"1536x1536\";a:4:{s:4:\"file\";s:26:\"logo-carousel-1536x169.png\";s:5:\"width\";i:1536;s:6:\"height\";i:169;s:9:\"mime-type\";s:9:\"image/png\";}s:9:\"2048x2048\";a:4:{s:4:\"file\";s:26:\"logo-carousel-2048x225.png\";s:5:\"width\";i:2048;s:6:\"height\";i:225;s:9:\"mime-type\";s:9:\"image/png\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(212, 79, '_menu_item_type', 'post_type'),
(213, 79, '_menu_item_menu_item_parent', '0'),
(214, 79, '_menu_item_object_id', '68'),
(215, 79, '_menu_item_object', 'page'),
(216, 79, '_menu_item_target', ''),
(217, 79, '_menu_item_classes', 'a:1:{i:0;s:0:\"\";}'),
(218, 79, '_menu_item_xfn', ''),
(219, 79, '_menu_item_url', ''),
(221, 33, '_wp_old_date', '2022-02-12'),
(222, 37, '_wp_old_date', '2022-02-12'),
(223, 34, '_wp_old_date', '2022-02-12'),
(224, 36, '_wp_old_date', '2022-02-12'),
(225, 80, '_menu_item_type', 'post_type'),
(226, 80, '_menu_item_menu_item_parent', '0'),
(227, 80, '_menu_item_object_id', '68'),
(228, 80, '_menu_item_object', 'page'),
(229, 80, '_menu_item_target', ''),
(230, 80, '_menu_item_classes', 'a:1:{i:0;s:0:\"\";}'),
(231, 80, '_menu_item_xfn', ''),
(232, 80, '_menu_item_url', ''),
(234, 42, '_wp_old_date', '2022-02-12'),
(235, 40, '_wp_old_date', '2022-02-12'),
(236, 39, '_wp_old_date', '2022-02-12'),
(237, 38, '_wp_old_date', '2022-02-12'),
(238, 81, '_edit_last', '1'),
(239, 81, '_edit_lock', '1650865188:1'),
(240, 76, '_edit_last', '1'),
(241, 76, 'article_header_bg_color', 'rgb(0, 208, 126)'),
(242, 76, '_article_header_bg_color', 'field_62597694b0ecc'),
(243, 84, '_edit_lock', '1650038641:1'),
(244, 85, '_wp_attached_file', '2022/04/lens-flare.webp'),
(245, 85, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:1024;s:6:\"height\";i:512;s:4:\"file\";s:23:\"2022/04/lens-flare.webp\";s:5:\"sizes\";a:3:{s:6:\"medium\";a:4:{s:4:\"file\";s:23:\"lens-flare-300x150.webp\";s:5:\"width\";i:300;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/webp\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:23:\"lens-flare-150x150.webp\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/webp\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:23:\"lens-flare-768x384.webp\";s:5:\"width\";i:768;s:6:\"height\";i:384;s:9:\"mime-type\";s:10:\"image/webp\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(246, 84, '_thumbnail_id', '85'),
(247, 84, '_edit_last', '1'),
(248, 84, 'article_header_bg_color', '#0084f4'),
(249, 84, '_article_header_bg_color', 'field_62597694b0ecc'),
(250, 86, '_edit_lock', '1650038810:1'),
(251, 87, '_wp_attached_file', '2022/04/website-lightning.webp'),
(252, 87, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:1000;s:6:\"height\";i:500;s:4:\"file\";s:30:\"2022/04/website-lightning.webp\";s:5:\"sizes\";a:3:{s:6:\"medium\";a:4:{s:4:\"file\";s:30:\"website-lightning-300x150.webp\";s:5:\"width\";i:300;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/webp\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:30:\"website-lightning-150x150.webp\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/webp\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:30:\"website-lightning-768x384.webp\";s:5:\"width\";i:768;s:6:\"height\";i:384;s:9:\"mime-type\";s:10:\"image/webp\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(253, 86, '_thumbnail_id', '87'),
(254, 86, '_edit_last', '1'),
(255, 86, 'article_header_bg_color', '#262626'),
(256, 86, '_article_header_bg_color', 'field_62597694b0ecc'),
(257, 88, '_edit_lock', '1650798379:1'),
(258, 89, '_wp_attached_file', '2022/04/text-selection-styling.webp'),
(259, 89, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:1000;s:6:\"height\";i:500;s:4:\"file\";s:35:\"2022/04/text-selection-styling.webp\";s:5:\"sizes\";a:3:{s:6:\"medium\";a:4:{s:4:\"file\";s:35:\"text-selection-styling-300x150.webp\";s:5:\"width\";i:300;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/webp\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:35:\"text-selection-styling-150x150.webp\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/webp\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:35:\"text-selection-styling-768x384.webp\";s:5:\"width\";i:768;s:6:\"height\";i:384;s:9:\"mime-type\";s:10:\"image/webp\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(260, 88, '_thumbnail_id', '89'),
(261, 88, '_edit_last', '1'),
(262, 88, 'article_header_bg_color', '#262626'),
(263, 88, '_article_header_bg_color', 'field_62597694b0ecc'),
(267, 95, '_edit_lock', '1650621648:1'),
(268, 95, '_thumbnail_id', '7'),
(269, 95, '_edit_last', '1'),
(270, 95, 'article_header_bg_color', '#f4a2a2'),
(271, 95, '_article_header_bg_color', 'field_62597694b0ecc'),
(274, 98, 'article_header_bg_color', '#f4a2a2'),
(275, 98, '_article_header_bg_color', 'field_62597694b0ecc'),
(276, 99, 'article_header_bg_color', '#262626'),
(277, 99, '_article_header_bg_color', 'field_62597694b0ecc'),
(280, 65, '_edit_last', '1'),
(281, 65, 'article_header_bg_color', '#005ea6'),
(282, 65, '_article_header_bg_color', 'field_62597694b0ecc'),
(283, 102, 'article_header_bg_color', '#005ea6'),
(284, 102, '_article_header_bg_color', 'field_62597694b0ecc'),
(285, 103, 'article_header_bg_color', '#005ea6'),
(286, 103, '_article_header_bg_color', 'field_62597694b0ecc'),
(287, 104, 'article_header_bg_color', '#005ea6'),
(288, 104, '_article_header_bg_color', 'field_62597694b0ecc'),
(289, 105, 'article_header_bg_color', '#005ea6'),
(290, 105, '_article_header_bg_color', 'field_62597694b0ecc'),
(291, 106, 'article_header_bg_color', '#005ea6'),
(292, 106, '_article_header_bg_color', 'field_62597694b0ecc'),
(293, 108, '_edit_last', '1'),
(294, 108, '_edit_lock', '1650871479:1'),
(295, 65, 'youtube_video_link', 'https://www.youtube.com/watch?v=aTtBStIqQpg'),
(296, 65, '_youtube_video_link', 'field_626634c3653b6'),
(297, 111, 'article_header_bg_color', '#005ea6'),
(298, 111, '_article_header_bg_color', 'field_62597694b0ecc'),
(299, 111, 'youtube_video_link', 'https://youtu.be/OYRkIGaP80M'),
(300, 111, '_youtube_video_link', 'field_626634c3653b6'),
(301, 112, 'article_header_bg_color', '#005ea6'),
(302, 112, '_article_header_bg_color', 'field_62597694b0ecc'),
(303, 112, 'youtube_video_link', 'https://www.youtube.com/watch?v=aTtBStIqQpg&t=8s'),
(304, 112, '_youtube_video_link', 'field_626634c3653b6'),
(305, 113, 'article_header_bg_color', '#005ea6'),
(306, 113, '_article_header_bg_color', 'field_62597694b0ecc'),
(307, 113, 'youtube_video_link', 'https://www.youtube.com/watch?v=OYRkIGaP80M&t'),
(308, 113, '_youtube_video_link', 'field_626634c3653b6'),
(309, 114, 'article_header_bg_color', '#005ea6'),
(310, 114, '_article_header_bg_color', 'field_62597694b0ecc'),
(311, 114, 'youtube_video_link', 'https://www.youtube.com/watch?v=bY-mOdgz7zQ'),
(312, 114, '_youtube_video_link', 'field_626634c3653b6'),
(313, 115, 'article_header_bg_color', '#005ea6'),
(314, 115, '_article_header_bg_color', 'field_62597694b0ecc'),
(315, 115, 'youtube_video_link', 'https://youtu.be/KkwULXrhEuI'),
(316, 115, '_youtube_video_link', 'field_626634c3653b6'),
(317, 116, 'article_header_bg_color', '#005ea6'),
(318, 116, '_article_header_bg_color', 'field_62597694b0ecc'),
(319, 116, 'youtube_video_link', 'https://www.youtube.com/watch?v=aTtBStIqQpg'),
(320, 116, '_youtube_video_link', 'field_626634c3653b6'),
(321, 117, '_wp_attached_file', '2022/04/Banner.png'),
(322, 117, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:1920;s:6:\"height\";i:750;s:4:\"file\";s:18:\"2022/04/Banner.png\";s:5:\"sizes\";a:5:{s:6:\"medium\";a:4:{s:4:\"file\";s:18:\"Banner-300x117.png\";s:5:\"width\";i:300;s:6:\"height\";i:117;s:9:\"mime-type\";s:9:\"image/png\";}s:5:\"large\";a:4:{s:4:\"file\";s:19:\"Banner-1024x400.png\";s:5:\"width\";i:1024;s:6:\"height\";i:400;s:9:\"mime-type\";s:9:\"image/png\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:18:\"Banner-150x150.png\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:18:\"Banner-768x300.png\";s:5:\"width\";i:768;s:6:\"height\";i:300;s:9:\"mime-type\";s:9:\"image/png\";}s:9:\"1536x1536\";a:4:{s:4:\"file\";s:19:\"Banner-1536x600.png\";s:5:\"width\";i:1536;s:6:\"height\";i:600;s:9:\"mime-type\";s:9:\"image/png\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(327, 120, '_wp_attached_file', '2022/04/about.png'),
(328, 120, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:800;s:6:\"height\";i:467;s:4:\"file\";s:17:\"2022/04/about.png\";s:5:\"sizes\";a:3:{s:6:\"medium\";a:4:{s:4:\"file\";s:17:\"about-300x175.png\";s:5:\"width\";i:300;s:6:\"height\";i:175;s:9:\"mime-type\";s:9:\"image/png\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:17:\"about-150x150.png\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:17:\"about-768x448.png\";s:5:\"width\";i:768;s:6:\"height\";i:448;s:9:\"mime-type\";s:9:\"image/png\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(329, 121, '_form', '<div class=\'form-column\'>\n<div class=\'form-row\'>\n [text* first-name placeholder \"First Name *\"]\n</div>\n<div class=\'form-row\'> \n[text* last-name placeholder \"Last Name *\"] \n</div>\n</div>\n<div class=\'form-column\'>\n<div class=\'form-row\'>\n[email* your-email placeholder \"Email *\"] \n</div>\n<div class=\'form-row\'>\n  [tel* tel-521 placeholder \"phone *\"]\n</div>\n</div>\n\n<label> \n    [textarea your-message placeholder \"Message *\"] </label>\n\n[submit \"Submit\"]'),
(330, 121, '_mail', 'a:9:{s:6:\"active\";b:1;s:7:\"subject\";s:30:\"[_site_title] \"[your-subject]\"\";s:6:\"sender\";s:33:\"[_site_title] <wordpress@dev.com>\";s:9:\"recipient\";s:19:\"[_site_admin_email]\";s:4:\"body\";s:163:\"From: [your-name] <[your-email]>\nSubject: [your-subject]\n\nMessage Body:\n[your-message]\n\n-- \nThis e-mail was sent from a contact form on [_site_title] ([_site_url])\";s:18:\"additional_headers\";s:22:\"Reply-To: [your-email]\";s:11:\"attachments\";s:0:\"\";s:8:\"use_html\";b:0;s:13:\"exclude_blank\";b:0;}'),
(331, 121, '_mail_2', 'a:9:{s:6:\"active\";b:0;s:7:\"subject\";s:30:\"[_site_title] \"[your-subject]\"\";s:6:\"sender\";s:33:\"[_site_title] <wordpress@dev.com>\";s:9:\"recipient\";s:12:\"[your-email]\";s:4:\"body\";s:105:\"Message Body:\n[your-message]\n\n-- \nThis e-mail was sent from a contact form on [_site_title] ([_site_url])\";s:18:\"additional_headers\";s:29:\"Reply-To: [_site_admin_email]\";s:11:\"attachments\";s:0:\"\";s:8:\"use_html\";b:0;s:13:\"exclude_blank\";b:0;}'),
(332, 121, '_messages', 'a:22:{s:12:\"mail_sent_ok\";s:45:\"Thank you for your message. It has been sent.\";s:12:\"mail_sent_ng\";s:71:\"There was an error trying to send your message. Please try again later.\";s:16:\"validation_error\";s:61:\"One or more fields have an error. Please check and try again.\";s:4:\"spam\";s:71:\"There was an error trying to send your message. Please try again later.\";s:12:\"accept_terms\";s:69:\"You must accept the terms and conditions before sending your message.\";s:16:\"invalid_required\";s:22:\"The field is required.\";s:16:\"invalid_too_long\";s:22:\"The field is too long.\";s:17:\"invalid_too_short\";s:23:\"The field is too short.\";s:13:\"upload_failed\";s:46:\"There was an unknown error uploading the file.\";s:24:\"upload_file_type_invalid\";s:49:\"You are not allowed to upload files of this type.\";s:21:\"upload_file_too_large\";s:20:\"The file is too big.\";s:23:\"upload_failed_php_error\";s:38:\"There was an error uploading the file.\";s:12:\"invalid_date\";s:29:\"The date format is incorrect.\";s:14:\"date_too_early\";s:44:\"The date is before the earliest one allowed.\";s:13:\"date_too_late\";s:41:\"The date is after the latest one allowed.\";s:14:\"invalid_number\";s:29:\"The number format is invalid.\";s:16:\"number_too_small\";s:47:\"The number is smaller than the minimum allowed.\";s:16:\"number_too_large\";s:46:\"The number is larger than the maximum allowed.\";s:23:\"quiz_answer_not_correct\";s:36:\"The answer to the quiz is incorrect.\";s:13:\"invalid_email\";s:38:\"The e-mail address entered is invalid.\";s:11:\"invalid_url\";s:19:\"The URL is invalid.\";s:11:\"invalid_tel\";s:32:\"The telephone number is invalid.\";}'),
(333, 121, '_additional_settings', ''),
(334, 121, '_locale', 'en_US'),
(335, 123, '_wp_attached_file', '2022/04/photo-1611162616475-46b635cb6868.jpg'),
(336, 123, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:1000;s:6:\"height\";i:750;s:4:\"file\";s:44:\"2022/04/photo-1611162616475-46b635cb6868.jpg\";s:5:\"sizes\";a:3:{s:6:\"medium\";a:4:{s:4:\"file\";s:44:\"photo-1611162616475-46b635cb6868-300x225.jpg\";s:5:\"width\";i:300;s:6:\"height\";i:225;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:44:\"photo-1611162616475-46b635cb6868-150x150.jpg\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:44:\"photo-1611162616475-46b635cb6868-768x576.jpg\";s:5:\"width\";i:768;s:6:\"height\";i:576;s:9:\"mime-type\";s:10:\"image/jpeg\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}');

-- --------------------------------------------------------

--
-- Table structure for table `wp_posts`
--

CREATE TABLE `wp_posts` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `post_author` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `post_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_excerpt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'publish',
  `comment_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `ping_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `post_password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `post_name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `to_ping` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pinged` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_modified_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content_filtered` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_parent` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `guid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `menu_order` int(11) NOT NULL DEFAULT 0,
  `post_type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'post',
  `post_mime_type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment_count` bigint(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_posts`
--

INSERT INTO `wp_posts` (`ID`, `post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_password`, `post_name`, `to_ping`, `pinged`, `post_modified`, `post_modified_gmt`, `post_content_filtered`, `post_parent`, `guid`, `menu_order`, `post_type`, `post_mime_type`, `comment_count`) VALUES
(5, 1, '2022-02-05 13:14:31', '2022-02-05 13:14:31', '', 'dev-hero', '', 'inherit', 'open', 'closed', '', 'dev-hero', '', '', '2022-02-05 13:14:31', '2022-02-05 13:14:31', '', 0, 'http://dev.com/wp-content/uploads/2022/02/dev-hero.png', 0, 'attachment', 'image/png', 0),
(7, 1, '2022-02-12 10:11:54', '2022-02-12 10:11:54', '', 'YouTubeThumbnailMaker10', '', 'inherit', 'open', 'closed', '', 'youtubethumbnailmaker10', '', '', '2022-02-12 10:11:54', '2022-02-12 10:11:54', '', 0, 'http://dev.com/wp-content/uploads/2022/02/YouTubeThumbnailMaker10.jpg', 0, 'attachment', 'image/jpeg', 0),
(9, 1, '2022-02-12 12:14:20', '2022-02-12 12:14:20', '{\"version\": 2, \"isGlobalStylesUserThemeJSON\": true }', 'Custom Styles', '', 'publish', 'closed', 'closed', '', 'wp-global-styles-developertips', '', '', '2022-02-12 12:14:20', '2022-02-12 12:14:20', '', 0, 'http://dev.com/?p=9', 0, 'wp_global_styles', '', 0),
(23, 1, '2022-02-12 12:31:14', '2022-02-12 12:31:14', '', 'front', '', 'publish', 'closed', 'closed', '', 'front', '', '', '2022-02-12 12:31:14', '2022-02-12 12:31:14', '', 0, 'http://dev.com/?page_id=23', 0, 'page', '', 0),
(24, 1, '2022-02-12 12:31:14', '2022-02-12 12:31:14', '', 'front', '', 'inherit', 'closed', 'closed', '', '23-revision-v1', '', '', '2022-02-12 12:31:14', '2022-02-12 12:31:14', '', 23, 'http://dev.com/?p=24', 0, 'revision', '', 0),
(27, 1, '2022-02-12 12:32:26', '2022-02-12 12:32:26', '', 'Tutorials', '', 'publish', 'closed', 'closed', '', 'tutorials', '', '', '2022-02-12 12:32:26', '2022-02-12 12:32:26', '', 0, 'http://dev.com/?page_id=27', 0, 'page', '', 0),
(28, 1, '2022-02-12 12:32:26', '2022-02-12 12:32:26', '', 'Tutorials', '', 'inherit', 'closed', 'closed', '', '27-revision-v1', '', '', '2022-02-12 12:32:26', '2022-02-12 12:32:26', '', 27, 'http://dev.com/?p=28', 0, 'revision', '', 0),
(29, 1, '2022-02-12 12:32:36', '2022-02-12 12:32:36', '', 'About', '', 'publish', 'closed', 'closed', '', 'about', '', '', '2022-02-12 12:32:36', '2022-02-12 12:32:36', '', 0, 'http://dev.com/?page_id=29', 0, 'page', '', 0),
(30, 1, '2022-02-12 12:32:36', '2022-02-12 12:32:36', '', 'About', '', 'inherit', 'closed', 'closed', '', '29-revision-v1', '', '', '2022-02-12 12:32:36', '2022-02-12 12:32:36', '', 29, 'http://dev.com/?p=30', 0, 'revision', '', 0),
(31, 1, '2022-02-12 12:32:46', '2022-02-12 12:32:46', '', 'Contact', '', 'publish', 'closed', 'closed', '', 'contact', '', '', '2022-02-12 12:32:46', '2022-02-12 12:32:46', '', 0, 'http://dev.com/?page_id=31', 0, 'page', '', 0),
(32, 1, '2022-02-12 12:32:46', '2022-02-12 12:32:46', '', 'Contact', '', 'inherit', 'closed', 'closed', '', '31-revision-v1', '', '', '2022-02-12 12:32:46', '2022-02-12 12:32:46', '', 31, 'http://dev.com/?p=32', 0, 'revision', '', 0),
(33, 1, '2022-04-15 11:42:57', '2022-02-12 12:33:11', ' ', '', '', 'publish', 'closed', 'closed', '', '33', '', '', '2022-04-15 11:42:57', '2022-04-15 11:42:57', '', 0, 'http://dev.com/?p=33', 1, 'nav_menu_item', '', 0),
(34, 1, '2022-04-15 11:43:00', '2022-02-12 12:33:12', ' ', '', '', 'publish', 'closed', 'closed', '', '34', '', '', '2022-04-15 11:43:00', '2022-04-15 11:43:00', '', 0, 'http://dev.com/?p=34', 4, 'nav_menu_item', '', 0),
(36, 1, '2022-04-15 11:43:00', '2022-02-12 12:33:13', ' ', '', '', 'publish', 'closed', 'closed', '', '36', '', '', '2022-04-15 11:43:00', '2022-04-15 11:43:00', '', 0, 'http://dev.com/?p=36', 5, 'nav_menu_item', '', 0),
(37, 1, '2022-04-15 11:42:59', '2022-02-12 12:33:13', ' ', '', '', 'publish', 'closed', 'closed', '', '37', '', '', '2022-04-15 11:42:59', '2022-04-15 11:42:59', '', 0, 'http://dev.com/?p=37', 3, 'nav_menu_item', '', 0),
(38, 1, '2022-04-15 11:44:26', '2022-02-12 12:34:10', ' ', '', '', 'publish', 'closed', 'closed', '', '38', '', '', '2022-04-15 11:44:26', '2022-04-15 11:44:26', '', 0, 'http://dev.com/?p=38', 5, 'nav_menu_item', '', 0),
(39, 1, '2022-04-15 11:44:25', '2022-02-12 12:34:09', ' ', '', '', 'publish', 'closed', 'closed', '', '39', '', '', '2022-04-15 11:44:25', '2022-04-15 11:44:25', '', 0, 'http://dev.com/?p=39', 4, 'nav_menu_item', '', 0),
(40, 1, '2022-04-15 11:44:22', '2022-02-12 12:34:09', ' ', '', '', 'publish', 'closed', 'closed', '', '40', '', '', '2022-04-15 11:44:22', '2022-04-15 11:44:22', '', 0, 'http://dev.com/?p=40', 3, 'nav_menu_item', '', 0),
(42, 1, '2022-04-15 11:44:10', '2022-02-12 12:34:45', '', 'Home', '', 'publish', 'closed', 'closed', '', '42', '', '', '2022-04-15 11:44:10', '2022-04-15 11:44:10', '', 0, 'http://dev.com/?p=42', 1, 'nav_menu_item', '', 0),
(51, 1, '2022-02-12 19:27:46', '2022-02-12 19:27:46', '', 'Your CSS reset needs text-size-adjust (probably)', 'Kilian Valkhof: […] Mobile Safari increases the default font-size when you switch a website from portrait to landscape. On phones that is, it doesn’t do it on iPad. Safari has been doing this for a long time, as a way to improve readability on non-mobile optimized websites. While undoubtedly useful in a time when literally […]', 'publish', 'closed', 'closed', '', 'your-css-reset-needs-text-size-adjust-probably', '', '', '2022-02-13 17:39:20', '2022-02-13 17:39:20', '', 0, 'http://dev.com/?post_type=blogs&#038;p=51', 0, 'blogs', '', 0),
(52, 1, '2022-02-12 19:27:01', '2022-02-12 19:27:01', '', 'code-magnify', '', 'inherit', 'open', 'closed', '', 'code-magnify', '', '', '2022-02-12 19:27:01', '2022-02-12 19:27:01', '', 51, 'http://dev.com/wp-content/uploads/2022/02/code-magnify.png', 0, 'attachment', 'image/png', 0),
(54, 1, '2022-02-13 12:45:13', '2022-02-13 12:45:13', '', '9 New React and JavaScript Links for February 2022', 'Every now and then, I find that I’ve accumulated a bunch of links about various things I find interesting. Like React and JavaScript! Here’s a list of nine links to other articles about them that I’ve been saving up and …', 'publish', 'closed', 'closed', '', '9-new-react-and-javascript-links-for-february-2022', '', '', '2022-02-13 12:46:50', '2022-02-13 12:46:50', '', 0, 'http://dev.com/?post_type=blogs&#038;p=54', 0, 'blogs', '', 0),
(55, 1, '2022-02-13 12:45:02', '2022-02-13 12:45:02', '', 'react', '', 'inherit', 'open', 'closed', '', 'react', '', '', '2022-02-13 12:45:02', '2022-02-13 12:45:02', '', 54, 'http://dev.com/wp-content/uploads/2022/02/react.jpg', 0, 'attachment', 'image/jpeg', 0),
(56, 1, '2022-02-13 12:53:04', '2022-02-13 12:53:04', '', 'Multi-Value CSS Properties With Optional Custom Property Values', 'Imagine you have an element with a multi-value CSS property, such as transform: optional custom property values:', 'publish', 'closed', 'closed', '', 'multi-value-css-properties-with-optional-custom-property-values', '', '', '2022-02-13 12:53:04', '2022-02-13 12:53:04', '', 0, 'http://dev.com/?post_type=blogs&#038;p=56', 0, 'blogs', '', 0),
(57, 1, '2022-02-13 12:52:58', '2022-02-13 12:52:58', '', 'custom-properties-code-block', '', 'inherit', 'open', 'closed', '', 'custom-properties-code-block', '', '', '2022-02-13 12:52:58', '2022-02-13 12:52:58', '', 56, 'http://dev.com/wp-content/uploads/2022/02/custom-properties-code-block.png', 0, 'attachment', 'image/png', 0),
(61, 1, '2022-02-20 12:40:55', '2022-02-20 12:40:55', '', 'Building a Paid Subscription Newsletter with MailPoet + WooCommerce + WordPress', 'With MailPoet and WooCommerce, we can build a paid subscription newsletter into a WordPress website. Our only costs are transaction fees, whatever WordPress hosting we might need, and a yearly fee for WooCommerce Subscriptions, making it a very cost-friendly …', 'publish', 'closed', 'closed', '', 'building-a-paid-subscription-newsletter-with-mailpoet-woocommerce-wordpress', '', '', '2022-02-20 12:49:11', '2022-02-20 12:49:11', '', 0, 'http://dev.com/?post_type=youtube&#038;p=61', 0, 'youtube', '', 0),
(62, 1, '2022-02-20 12:40:32', '2022-02-20 12:40:32', '', 'paid-subscription-newsletter-thumb-no-text', '', 'inherit', 'open', 'closed', '', 'paid-subscription-newsletter-thumb-no-text', '', '', '2022-02-20 12:40:32', '2022-02-20 12:40:32', '', 61, 'http://dev.com/wp-content/uploads/2022/02/paid-subscription-newsletter-thumb-no-text.png', 0, 'attachment', 'image/png', 0),
(63, 1, '2022-02-20 12:45:39', '2022-02-20 12:45:39', '', 'Yapping About Astro', 'I think Astro is a pretty cool bit of technology for building websites! Should we call it a framework? We’ll get into that in the video. How can we call it a framework if it asks you to “bring your …', 'publish', 'closed', 'closed', '', 'yapping-about-astro', '', '', '2022-02-20 12:48:59', '2022-02-20 12:48:59', '', 0, 'http://dev.com/?post_type=youtube&#038;p=63', 0, 'youtube', '', 0),
(64, 1, '2022-02-20 12:45:29', '2022-02-20 12:45:29', '', 'netflix-thumb', '', 'inherit', 'open', 'closed', '', 'netflix-thumb', '', '', '2022-02-20 12:45:29', '2022-02-20 12:45:29', '', 63, 'http://dev.com/wp-content/uploads/2022/02/netflix-thumb.png', 0, 'attachment', 'image/png', 0),
(65, 1, '2022-02-20 12:47:29', '2022-02-20 12:47:29', '<!-- wp:paragraph -->\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it&nbsp;</p>\n<!-- /wp:paragraph -->', 'A Netflix Clone with DataStax Astra and Netlify', 'I paired up with David Jones-Gilardi of DataStax to go through one of the workshops they have put together (with Ania Kubów, who has a video you should watch as well) that does a good job of showcasing how …', 'publish', 'open', 'closed', '', 'a-netflix-clone-with-datastax-astra-and-netlify', '', '', '2022-04-25 06:02:19', '2022-04-25 06:02:19', '', 0, 'http://dev.com/?post_type=youtube&#038;p=65', 0, 'youtube', '', 0),
(66, 1, '2022-02-20 12:47:11', '2022-02-20 12:47:11', '', 'astro-thumb-no-text', '', 'inherit', 'open', 'closed', '', 'astro-thumb-no-text', '', '', '2022-02-20 12:47:11', '2022-02-20 12:47:11', '', 65, 'http://dev.com/wp-content/uploads/2022/02/astro-thumb-no-text.png', 0, 'attachment', 'image/png', 0),
(68, 1, '2022-04-10 12:07:12', '2022-04-10 12:07:12', '', 'Blog', '', 'publish', 'closed', 'closed', '', 'blog', '', '', '2022-04-10 12:07:12', '2022-04-10 12:07:12', '', 0, 'http://dev.com/?page_id=68', 0, 'page', '', 0),
(69, 1, '2022-04-10 12:07:12', '2022-04-10 12:07:12', '', 'Blog', '', 'inherit', 'closed', 'closed', '', '68-revision-v1', '', '', '2022-04-10 12:07:12', '2022-04-10 12:07:12', '', 68, 'http://dev.com/?p=69', 0, 'revision', '', 0),
(70, 1, '2022-04-10 12:41:55', '2022-04-10 12:41:55', '', '6 Useful Bookmarklets to Boost Web Development', 'A bookmarklet is a JavaScript-based bookmark that adds to a web browser. I’d like to show you some awesome web browser hacks to aid your web development workflow and how to convert those hacks into time-saving bookmarklets.…', 'publish', 'closed', 'closed', '', '6-useful-bookmarklets-to-boost-web-development', '', '', '2022-04-10 12:41:55', '2022-04-10 12:41:55', '', 0, 'http://dev.com/?post_type=blog&#038;p=70', 0, 'blog', '', 0),
(71, 1, '2022-04-10 12:41:39', '2022-04-10 12:41:39', '', 'bookmarklets', '', 'inherit', 'open', 'closed', '', 'bookmarklets', '', '', '2022-04-10 12:41:39', '2022-04-10 12:41:39', '', 70, 'http://dev.com/wp-content/uploads/2022/04/bookmarklets.webp', 0, 'attachment', 'image/webp', 0),
(72, 1, '2022-04-10 12:43:08', '2022-04-10 12:43:08', '', 'Write HTML, the HTML Way (Not the XHTML Way)', 'You may not use XHTML (anymore), but when you write HTML, you may be more influenced by XHTML than you think. You are very likely writing HTML, the XHTML way.\n\nWhat is the XHTML way of writing HTML, and what …', 'publish', 'closed', 'closed', '', 'write-html-the-html-way-not-the-xhtml-way', '', '', '2022-04-10 12:43:08', '2022-04-10 12:43:08', '', 0, 'http://dev.com/?post_type=blog&#038;p=72', 0, 'blog', '', 0),
(73, 1, '2022-04-10 12:43:00', '2022-04-10 12:43:00', '', 'xhtml', '', 'inherit', 'open', 'closed', '', 'xhtml', '', '', '2022-04-10 12:43:00', '2022-04-10 12:43:00', '', 72, 'http://dev.com/wp-content/uploads/2022/04/xhtml.webp', 0, 'attachment', 'image/webp', 0),
(74, 1, '2022-04-10 12:44:03', '2022-04-10 12:44:03', '', 'Optimizing SVG Patterns to Their Smallest Size', 'I recently created a brick wall pattern as part of my #PetitePatterns series, a challenge where I create organic-looking patterns or textures in SVG within 560 bytes (or approximately the size of two tweets). To fit this constraint, I have …', 'publish', 'closed', 'closed', '', 'optimizing-svg-patterns-to-their-smallest-size', '', '', '2022-04-10 12:44:17', '2022-04-10 12:44:17', '', 0, 'http://dev.com/?post_type=blog&#038;p=74', 0, 'blog', '', 0),
(75, 1, '2022-04-10 12:43:55', '2022-04-10 12:43:55', '', '6-modern-css-color-1', '', 'inherit', 'open', 'closed', '', '6-modern-css-color-1', '', '', '2022-04-10 12:43:55', '2022-04-10 12:43:55', '', 74, 'http://dev.com/wp-content/uploads/2022/04/6-modern-css-color-1.jpg', 0, 'attachment', 'image/jpeg', 0),
(76, 1, '2022-04-10 12:45:10', '2022-04-10 12:45:10', '<!-- wp:paragraph -->\n<p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>\n<!-- /wp:paragraph -->', 'Adding CDN Caching to a Vite Build', 'Content delivery networks, or CDNs, allow you to improve the delivery of your website’s static resources, most notably, with CDN caching. They do this by serving your content from edge locations, which are located all over the world. When a user browses to your site, and your site requests resources from the CDN, the CDN […]', 'publish', 'closed', 'closed', '', 'adding-cdn-caching-to-a-vite-build', '', '', '2022-04-15 15:50:03', '2022-04-15 15:50:03', '', 0, 'http://dev.com/?post_type=blog&#038;p=76', 0, 'blog', '', 0),
(77, 1, '2022-04-10 12:45:04', '2022-04-10 12:45:04', '', 'vite-cloudfront', '', 'inherit', 'open', 'closed', '', 'vite-cloudfront', '', '', '2022-04-10 12:45:04', '2022-04-10 12:45:04', '', 76, 'http://dev.com/wp-content/uploads/2022/04/vite-cloudfront.webp', 0, 'attachment', 'image/webp', 0),
(78, 1, '2022-04-12 16:35:01', '2022-04-12 16:35:01', '', 'logo-carousel', '', 'inherit', 'open', 'closed', '', 'logo-carousel', '', '', '2022-04-12 16:35:01', '2022-04-12 16:35:01', '', 0, 'http://dev.com/wp-content/uploads/2022/04/logo-carousel.png', 0, 'attachment', 'image/png', 0),
(79, 1, '2022-04-15 11:42:59', '2022-04-15 11:42:59', ' ', '', '', 'publish', 'closed', 'closed', '', '79', '', '', '2022-04-15 11:42:59', '2022-04-15 11:42:59', '', 0, 'http://dev.com/?p=79', 2, 'nav_menu_item', '', 0),
(80, 1, '2022-04-15 11:44:21', '2022-04-15 11:44:21', ' ', '', '', 'publish', 'closed', 'closed', '', '80', '', '', '2022-04-15 11:44:21', '2022-04-15 11:44:21', '', 0, 'http://dev.com/?p=80', 2, 'nav_menu_item', '', 0),
(81, 1, '2022-04-15 13:43:41', '2022-04-15 13:43:41', 'a:8:{s:8:\"location\";a:2:{i:0;a:1:{i:0;a:3:{s:5:\"param\";s:9:\"post_type\";s:8:\"operator\";s:2:\"==\";s:5:\"value\";s:4:\"blog\";}}i:1;a:1:{i:0;a:3:{s:5:\"param\";s:9:\"post_type\";s:8:\"operator\";s:2:\"==\";s:5:\"value\";s:7:\"youtube\";}}}s:8:\"position\";s:6:\"normal\";s:5:\"style\";s:7:\"default\";s:15:\"label_placement\";s:3:\"top\";s:21:\"instruction_placement\";s:5:\"label\";s:14:\"hide_on_screen\";s:0:\"\";s:11:\"description\";s:0:\"\";s:12:\"show_in_rest\";i:0;}', 'article header background', 'article-header-background', 'publish', 'closed', 'closed', '', 'group_62597633e3558', '', '', '2022-04-25 05:01:23', '2022-04-25 05:01:23', '', 0, 'http://dev.com/?post_type=acf-field-group&#038;p=81', 0, 'acf-field-group', '', 0),
(82, 1, '2022-04-15 13:44:18', '2022-04-15 13:44:18', 'a:10:{s:4:\"type\";s:4:\"text\";s:12:\"instructions\";s:0:\"\";s:8:\"required\";i:1;s:17:\"conditional_logic\";i:0;s:7:\"wrapper\";a:3:{s:5:\"width\";s:0:\"\";s:5:\"class\";s:0:\"\";s:2:\"id\";s:0:\"\";}s:13:\"default_value\";s:0:\"\";s:11:\"placeholder\";s:0:\"\";s:7:\"prepend\";s:0:\"\";s:6:\"append\";s:0:\"\";s:9:\"maxlength\";s:0:\"\";}', 'article header bg color', 'article_header_bg_color', 'publish', 'closed', 'closed', '', 'field_62597694b0ecc', '', '', '2022-04-15 13:44:18', '2022-04-15 13:44:18', '', 81, 'http://dev.com/?post_type=acf-field&p=82', 0, 'acf-field', '', 0),
(84, 1, '2022-04-15 16:03:55', '2022-04-15 16:03:55', '<!-- wp:paragraph -->\n<p>I’m a big fan of movies by&nbsp;<a href=\"https://en.wikipedia.org/wiki/J._J._Abrams\">J.J. Abrams</a>. I enjoy their tight plots, quippy dialog, and of course:&nbsp;<strong>anamorphic lens flares</strong>.&nbsp;<a href=\"https://gizmodo.com/j-j-abrams-admits-star-trek-lens-flares-are-ridiculou-5230278\">Filmmakers like Abrams use lens flare</a>&nbsp;to add a dash of ‘homemade’ realism to their movies, a technique we can easily recreate in tools like Photoshop, then add to our sites as raster images.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>But what if we wanted to apply the same lens flare look&nbsp;<em>without</em>&nbsp;the use of photo editing tools? We can create a CSS lens flare to add a cinematic touch to our gallery images, background photos, or user profiles.</p>\n<!-- /wp:paragraph -->', 'Add a CSS Lens Flare to Photos for a Bright Touch', '', 'publish', 'closed', 'closed', '', 'add-a-css-lens-flare-to-photos-for-a-bright-touch', '', '', '2022-04-15 16:03:58', '2022-04-15 16:03:58', '', 0, 'http://dev.com/?post_type=blog&#038;p=84', 0, 'blog', '', 0),
(85, 1, '2022-04-15 16:03:26', '2022-04-15 16:03:26', '', 'lens-flare', '', 'inherit', 'open', 'closed', '', 'lens-flare', '', '', '2022-04-15 16:03:26', '2022-04-15 16:03:26', '', 84, 'http://dev.com/wp-content/uploads/2022/04/lens-flare.webp', 0, 'attachment', 'image/webp', 0),
(86, 1, '2022-04-15 16:05:58', '2022-04-15 16:05:58', '<!-- wp:paragraph -->\n<p>I have a handful of good links to articles about performance that are burning a hole in my bookmarks folder, and wanna drop them here to share.</p>\n<!-- /wp:paragraph -->', '7 Fresh Links on Performance For March 2022', '', 'publish', 'closed', 'closed', '', '7-fresh-links-on-performance-for-march-2022', '', '', '2022-04-15 16:06:00', '2022-04-15 16:06:00', '', 0, 'http://dev.com/?post_type=blog&#038;p=86', 0, 'blog', '', 0),
(87, 1, '2022-04-15 16:05:53', '2022-04-15 16:05:53', '', 'website-lightning', '', 'inherit', 'open', 'closed', '', 'website-lightning', '', '', '2022-04-15 16:05:53', '2022-04-15 16:05:53', '', 86, 'http://dev.com/wp-content/uploads/2022/04/website-lightning.webp', 0, 'attachment', 'image/webp', 0),
(88, 1, '2022-04-15 16:08:15', '2022-04-15 16:08:15', '<!-- wp:paragraph -->\n<p><strong>Styling ranges of text</strong>&nbsp;in software is a very useful thing to be able to do. Thankfully, we have the CSS Custom Highlight API to look forward to because it represents the future of styling text ranges on the web.…</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>But more importantly, making our website the home base for this is definitely the way to go. A newsletter is likely to be just a part of your business—in essence, a product people can buy from you. Doing things this way, you’re setting up a store that can sell&nbsp;<em>anything</em>, a newsletter subscription just being one possibility. Plus, now you’ve got the world’s most robust CMS to do anything else you need to do to run a business.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:preformatted -->\n<pre class=\"wp-block-preformatted\"><div class=\"open_grepper_editor\" title=\"Edit &amp; Save To Grepper\"></div></pre>\n<!-- /wp:preformatted -->\n\n<!-- wp:prismatic/blocks {\"language\":\"xml\"} -->\n<pre class=\"wp-block-prismatic-blocks\"><code class=\"language-xml\">&lt;section class=\"article-header section-padding-top \" style=\" background-color:&lt;?php echo get_field(\'article_header_bg_color\') ?>\">\n    &lt;div class=\"article-header-content\">\n        &lt;div class=\"container\">\n        &lt;div class=\"article-title\">\n           &lt;h1>&lt;?php single_post_title() ?>&lt;/h1>\n       &lt;/div>\n       &lt;div class=\"article-meta\">\n            &lt;div class=\"author-info\">\n                &lt;div class=\"author-profile\">\n                &lt;?php \n                echo get_avatar(get_the_author_meta( \'ID\', $post->post_author ),50);\n                 ?>\n                &lt;/div>\n                &lt;div class=\"auther-name\">\n                    &lt;p> by &lt;span>&lt;?php echo  get_the_author_meta( \'display_name\', $post->post_author ); ?>&lt;/span>&lt;/p>\n                &lt;/div>\n                &lt;div class=\"publication-date\">\n                    &lt;p>Updated - &lt;?php echo  get_the_date(); ?>&lt;/p>\n                &lt;/div>\n                &lt;/div>\n       &lt;/div>\n       &lt;div class=\"article-thumbnail\">\n    &lt;?php echo  the_post_thumbnail(); ?>\n    &lt;/div>\n        &lt;/div>\n       \n    &lt;/div>\n   </code></pre>\n<!-- /wp:prismatic/blocks -->\n\n<!-- wp:prismatic/blocks {\"language\":\"php\"} -->\n<pre class=\"wp-block-prismatic-blocks\"><code class=\"language-php\">&lt;?php\n$cars = array(\"Volvo\", \"BMW\", \"Toyota\");\necho \"I like \" . $cars[0] . \", \" . $cars[1] . \" and \" . $cars[2] . \".\";\n?></code></pre>\n<!-- /wp:prismatic/blocks -->\n\n<!-- wp:paragraph -->\n<p>I’m not going to explain this code in detail, but it creates the tables we need to hold our data. It will also create a quiz, a question, and four answers, and store all of this in a file called&nbsp;<code>quiz.db</code>. After saving this file, we can run our script from the command line using this command:</p>\n<!-- /wp:paragraph -->', 'CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web', '', 'publish', 'open', 'closed', '', 'css-custom-highlight-api-the-future-of-highlighting-text-ranges-on-the-web', '', '', '2022-04-22 09:51:46', '2022-04-22 09:51:46', '', 0, 'http://dev.com/?post_type=blog&#038;p=88', 0, 'blog', '', 6),
(89, 1, '2022-04-15 16:08:09', '2022-04-15 16:08:09', '', 'text-selection-styling', '', 'inherit', 'open', 'closed', '', 'text-selection-styling', '', '', '2022-04-15 16:08:09', '2022-04-15 16:08:09', '', 88, 'http://dev.com/wp-content/uploads/2022/04/text-selection-styling.webp', 0, 'attachment', 'image/webp', 0),
(94, 1, '2022-04-22 09:34:46', '2022-04-22 09:34:46', '{\"version\": 2, \"isGlobalStylesUserThemeJSON\": true }', 'Custom Styles', '', 'publish', 'closed', 'closed', '', 'wp-global-styles-twentytwentyone', '', '', '2022-04-22 09:34:46', '2022-04-22 09:34:46', '', 0, 'http://dev.com/wp-global-styles-twentytwentyone/', 0, 'wp_global_styles', '', 0),
(95, 1, '2022-04-22 09:46:45', '2022-04-22 09:46:45', '<!-- wp:paragraph -->\n<p>We start to figure out how exactly to use it. First of all, we tell CodeKit to concatenate this library into our global JavaScript file (which is empty so far, but we’ll be writing code there later). We link up the compressed JavaScript file in our included footer part.</p>\n<!-- /wp:paragraph -->', 'Code Syntax Highlighting, Part 1', '', 'publish', 'open', 'closed', '', 'code-syntax-highlighting-part-1', '', '', '2022-04-22 09:51:24', '2022-04-22 09:51:24', '', 0, 'http://dev.com/?post_type=blog&#038;p=95', 0, 'blog', '', 0),
(98, 1, '2022-04-22 09:51:24', '2022-04-22 09:51:24', '<!-- wp:paragraph -->\n<p>We start to figure out how exactly to use it. First of all, we tell CodeKit to concatenate this library into our global JavaScript file (which is empty so far, but we’ll be writing code there later). We link up the compressed JavaScript file in our included footer part.</p>\n<!-- /wp:paragraph -->', 'Code Syntax Highlighting, Part 1', '', 'inherit', 'closed', 'closed', '', '95-revision-v1', '', '', '2022-04-22 09:51:24', '2022-04-22 09:51:24', '', 95, 'http://dev.com/?p=98', 0, 'revision', '', 0),
(99, 1, '2022-04-22 09:51:45', '2022-04-22 09:51:45', '<!-- wp:paragraph -->\n<p><strong>Styling ranges of text</strong>&nbsp;in software is a very useful thing to be able to do. Thankfully, we have the CSS Custom Highlight API to look forward to because it represents the future of styling text ranges on the web.…</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>But more importantly, making our website the home base for this is definitely the way to go. A newsletter is likely to be just a part of your business—in essence, a product people can buy from you. Doing things this way, you’re setting up a store that can sell&nbsp;<em>anything</em>, a newsletter subscription just being one possibility. Plus, now you’ve got the world’s most robust CMS to do anything else you need to do to run a business.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:preformatted -->\n<pre class=\"wp-block-preformatted\"><div class=\"open_grepper_editor\" title=\"Edit &amp; Save To Grepper\"></div></pre>\n<!-- /wp:preformatted -->\n\n<!-- wp:prismatic/blocks {\"language\":\"xml\"} -->\n<pre class=\"wp-block-prismatic-blocks\"><code class=\"language-xml\">&lt;section class=\"article-header section-padding-top \" style=\" background-color:&lt;?php echo get_field(\'article_header_bg_color\') ?>\">\n    &lt;div class=\"article-header-content\">\n        &lt;div class=\"container\">\n        &lt;div class=\"article-title\">\n           &lt;h1>&lt;?php single_post_title() ?>&lt;/h1>\n       &lt;/div>\n       &lt;div class=\"article-meta\">\n            &lt;div class=\"author-info\">\n                &lt;div class=\"author-profile\">\n                &lt;?php \n                echo get_avatar(get_the_author_meta( \'ID\', $post->post_author ),50);\n                 ?>\n                &lt;/div>\n                &lt;div class=\"auther-name\">\n                    &lt;p> by &lt;span>&lt;?php echo  get_the_author_meta( \'display_name\', $post->post_author ); ?>&lt;/span>&lt;/p>\n                &lt;/div>\n                &lt;div class=\"publication-date\">\n                    &lt;p>Updated - &lt;?php echo  get_the_date(); ?>&lt;/p>\n                &lt;/div>\n                &lt;/div>\n       &lt;/div>\n       &lt;div class=\"article-thumbnail\">\n    &lt;?php echo  the_post_thumbnail(); ?>\n    &lt;/div>\n        &lt;/div>\n       \n    &lt;/div>\n   </code></pre>\n<!-- /wp:prismatic/blocks -->\n\n<!-- wp:prismatic/blocks {\"language\":\"php\"} -->\n<pre class=\"wp-block-prismatic-blocks\"><code class=\"language-php\">&lt;?php\n$cars = array(\"Volvo\", \"BMW\", \"Toyota\");\necho \"I like \" . $cars[0] . \", \" . $cars[1] . \" and \" . $cars[2] . \".\";\n?></code></pre>\n<!-- /wp:prismatic/blocks -->\n\n<!-- wp:paragraph -->\n<p>I’m not going to explain this code in detail, but it creates the tables we need to hold our data. It will also create a quiz, a question, and four answers, and store all of this in a file called&nbsp;<code>quiz.db</code>. After saving this file, we can run our script from the command line using this command:</p>\n<!-- /wp:paragraph -->', 'CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web', '', 'inherit', 'closed', 'closed', '', '88-revision-v1', '', '', '2022-04-22 09:51:45', '2022-04-22 09:51:45', '', 88, 'http://dev.com/?p=99', 0, 'revision', '', 0),
(102, 1, '2022-04-25 05:03:55', '2022-04-25 05:03:55', '', 'A Netflix Clone with DataStax Astra and Netlify', 'I paired up with David Jones-Gilardi of DataStax to go through one of the workshops they have put together (with Ania Kubów, who has a video you should watch as well) that does a good job of showcasing how …', 'inherit', 'closed', 'closed', '', '65-revision-v1', '', '', '2022-04-25 05:03:55', '2022-04-25 05:03:55', '', 65, 'http://dev.com/?p=102', 0, 'revision', '', 0),
(103, 1, '2022-04-25 05:04:45', '2022-04-25 05:04:45', '<!-- wp:paragraph -->\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it </p>\n<!-- /wp:paragraph -->', 'A Netflix Clone with DataStax Astra and Netlify', 'I paired up with David Jones-Gilardi of DataStax to go through one of the workshops they have put together (with Ania Kubów, who has a video you should watch as well) that does a good job of showcasing how …', 'inherit', 'closed', 'closed', '', '65-revision-v1', '', '', '2022-04-25 05:04:45', '2022-04-25 05:04:45', '', 65, 'http://dev.com/?p=103', 0, 'revision', '', 0),
(104, 1, '2022-04-25 05:07:14', '2022-04-25 05:07:14', '<!-- wp:paragraph -->\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it </p>\n<!-- /wp:paragraph -->\n\n<!-- wp:html -->\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/aTtBStIqQpg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n<!-- /wp:html -->', 'A Netflix Clone with DataStax Astra and Netlify', 'I paired up with David Jones-Gilardi of DataStax to go through one of the workshops they have put together (with Ania Kubów, who has a video you should watch as well) that does a good job of showcasing how …', 'inherit', 'closed', 'closed', '', '65-revision-v1', '', '', '2022-04-25 05:07:14', '2022-04-25 05:07:14', '', 65, 'http://dev.com/?p=104', 0, 'revision', '', 0),
(105, 1, '2022-04-25 05:08:04', '2022-04-25 05:08:04', '<!-- wp:paragraph -->\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it </p>\n<!-- /wp:paragraph -->\n\n<!-- wp:html -->\n<iframe width=\"100%\" height=\"450\" src=\"https://www.youtube.com/embed/aTtBStIqQpg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n<!-- /wp:html -->', 'A Netflix Clone with DataStax Astra and Netlify', 'I paired up with David Jones-Gilardi of DataStax to go through one of the workshops they have put together (with Ania Kubów, who has a video you should watch as well) that does a good job of showcasing how …', 'inherit', 'closed', 'closed', '', '65-revision-v1', '', '', '2022-04-25 05:08:04', '2022-04-25 05:08:04', '', 65, 'http://dev.com/?p=105', 0, 'revision', '', 0),
(106, 1, '2022-04-25 05:09:42', '2022-04-25 05:09:42', '<!-- wp:paragraph -->\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it </p>\n<!-- /wp:paragraph -->', 'A Netflix Clone with DataStax Astra and Netlify', 'I paired up with David Jones-Gilardi of DataStax to go through one of the workshops they have put together (with Ania Kubów, who has a video you should watch as well) that does a good job of showcasing how …', 'inherit', 'closed', 'closed', '', '65-revision-v1', '', '', '2022-04-25 05:09:42', '2022-04-25 05:09:42', '', 65, 'http://dev.com/?p=106', 0, 'revision', '', 0),
(108, 1, '2022-04-25 05:43:23', '2022-04-25 05:43:23', 'a:8:{s:8:\"location\";a:1:{i:0;a:1:{i:0;a:3:{s:5:\"param\";s:9:\"post_type\";s:8:\"operator\";s:2:\"==\";s:5:\"value\";s:7:\"youtube\";}}}s:8:\"position\";s:6:\"normal\";s:5:\"style\";s:7:\"default\";s:15:\"label_placement\";s:3:\"top\";s:21:\"instruction_placement\";s:5:\"label\";s:14:\"hide_on_screen\";s:0:\"\";s:11:\"description\";s:0:\"\";s:12:\"show_in_rest\";i:0;}', 'Youtube video link', 'youtube-video-link', 'publish', 'closed', 'closed', '', 'group_626634b5591c3', '', '', '2022-04-25 05:43:23', '2022-04-25 05:43:23', '', 0, 'http://dev.com/?post_type=acf-field-group&#038;p=108', 0, 'acf-field-group', '', 0),
(109, 1, '2022-04-25 05:43:23', '2022-04-25 05:43:23', 'a:7:{s:4:\"type\";s:3:\"url\";s:12:\"instructions\";s:0:\"\";s:8:\"required\";i:0;s:17:\"conditional_logic\";i:0;s:7:\"wrapper\";a:3:{s:5:\"width\";s:0:\"\";s:5:\"class\";s:0:\"\";s:2:\"id\";s:0:\"\";}s:13:\"default_value\";s:0:\"\";s:11:\"placeholder\";s:0:\"\";}', 'Youtube video link', 'youtube_video_link', 'publish', 'closed', 'closed', '', 'field_626634c3653b6', '', '', '2022-04-25 05:43:23', '2022-04-25 05:43:23', '', 108, 'http://dev.com/?post_type=acf-field&p=109', 0, 'acf-field', '', 0),
(110, 1, '2022-04-25 05:44:52', '2022-04-25 05:44:52', '<!-- wp:paragraph -->\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it&nbsp;</p>\n<!-- /wp:paragraph -->', 'A Netflix Clone with DataStax Astra and Netlify', 'I paired up with David Jones-Gilardi of DataStax to go through one of the workshops they have put together (with Ania Kubów, who has a video you should watch as well) that does a good job of showcasing how …', 'inherit', 'closed', 'closed', '', '65-revision-v1', '', '', '2022-04-25 05:44:52', '2022-04-25 05:44:52', '', 65, 'http://dev.com/?p=110', 0, 'revision', '', 0),
(111, 1, '2022-04-25 05:44:53', '2022-04-25 05:44:53', '<!-- wp:paragraph -->\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it&nbsp;</p>\n<!-- /wp:paragraph -->', 'A Netflix Clone with DataStax Astra and Netlify', 'I paired up with David Jones-Gilardi of DataStax to go through one of the workshops they have put together (with Ania Kubów, who has a video you should watch as well) that does a good job of showcasing how …', 'inherit', 'closed', 'closed', '', '65-revision-v1', '', '', '2022-04-25 05:44:53', '2022-04-25 05:44:53', '', 65, 'http://dev.com/?p=111', 0, 'revision', '', 0),
(112, 1, '2022-04-25 05:46:50', '2022-04-25 05:46:50', '<!-- wp:paragraph -->\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it&nbsp;</p>\n<!-- /wp:paragraph -->', 'A Netflix Clone with DataStax Astra and Netlify', 'I paired up with David Jones-Gilardi of DataStax to go through one of the workshops they have put together (with Ania Kubów, who has a video you should watch as well) that does a good job of showcasing how …', 'inherit', 'closed', 'closed', '', '65-revision-v1', '', '', '2022-04-25 05:46:50', '2022-04-25 05:46:50', '', 65, 'http://dev.com/?p=112', 0, 'revision', '', 0),
(113, 1, '2022-04-25 05:47:30', '2022-04-25 05:47:30', '<!-- wp:paragraph -->\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it&nbsp;</p>\n<!-- /wp:paragraph -->', 'A Netflix Clone with DataStax Astra and Netlify', 'I paired up with David Jones-Gilardi of DataStax to go through one of the workshops they have put together (with Ania Kubów, who has a video you should watch as well) that does a good job of showcasing how …', 'inherit', 'closed', 'closed', '', '65-revision-v1', '', '', '2022-04-25 05:47:30', '2022-04-25 05:47:30', '', 65, 'http://dev.com/?p=113', 0, 'revision', '', 0),
(114, 1, '2022-04-25 05:48:01', '2022-04-25 05:48:01', '<!-- wp:paragraph -->\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it&nbsp;</p>\n<!-- /wp:paragraph -->', 'A Netflix Clone with DataStax Astra and Netlify', 'I paired up with David Jones-Gilardi of DataStax to go through one of the workshops they have put together (with Ania Kubów, who has a video you should watch as well) that does a good job of showcasing how …', 'inherit', 'closed', 'closed', '', '65-revision-v1', '', '', '2022-04-25 05:48:01', '2022-04-25 05:48:01', '', 65, 'http://dev.com/?p=114', 0, 'revision', '', 0),
(115, 1, '2022-04-25 05:56:31', '2022-04-25 05:56:31', '<!-- wp:paragraph -->\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it&nbsp;</p>\n<!-- /wp:paragraph -->', 'A Netflix Clone with DataStax Astra and Netlify', 'I paired up with David Jones-Gilardi of DataStax to go through one of the workshops they have put together (with Ania Kubów, who has a video you should watch as well) that does a good job of showcasing how …', 'inherit', 'closed', 'closed', '', '65-revision-v1', '', '', '2022-04-25 05:56:31', '2022-04-25 05:56:31', '', 65, 'http://dev.com/?p=115', 0, 'revision', '', 0),
(116, 1, '2022-04-25 06:02:19', '2022-04-25 06:02:19', '<!-- wp:paragraph -->\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it&nbsp;</p>\n<!-- /wp:paragraph -->', 'A Netflix Clone with DataStax Astra and Netlify', 'I paired up with David Jones-Gilardi of DataStax to go through one of the workshops they have put together (with Ania Kubów, who has a video you should watch as well) that does a good job of showcasing how …', 'inherit', 'closed', 'closed', '', '65-revision-v1', '', '', '2022-04-25 06:02:19', '2022-04-25 06:02:19', '', 65, 'http://dev.com/?p=116', 0, 'revision', '', 0),
(117, 1, '2022-04-27 09:36:36', '2022-04-27 09:36:36', '', 'Banner', '', 'inherit', 'open', 'closed', '', 'banner', '', '', '2022-04-27 09:36:36', '2022-04-27 09:36:36', '', 0, 'http://dev.com/wp-content/uploads/2022/04/Banner.png', 0, 'attachment', 'image/png', 0),
(120, 1, '2022-04-27 10:17:26', '2022-04-27 10:17:26', '', 'about', '', 'inherit', 'open', 'closed', '', 'about-2', '', '', '2022-04-27 10:17:26', '2022-04-27 10:17:26', '', 0, 'http://dev.com/wp-content/uploads/2022/04/about.png', 0, 'attachment', 'image/png', 0),
(121, 1, '2022-04-27 11:03:15', '2022-04-27 11:03:15', '<div class=\'form-column\'>\r\n<div class=\'form-row\'>\r\n [text* first-name placeholder \"First Name *\"]\r\n</div>\r\n<div class=\'form-row\'> \r\n[text* last-name placeholder \"Last Name *\"] \r\n</div>\r\n</div>\r\n<div class=\'form-column\'>\r\n<div class=\'form-row\'>\r\n[email* your-email placeholder \"Email *\"] \r\n</div>\r\n<div class=\'form-row\'>\r\n  [tel* tel-521 placeholder \"phone *\"]\r\n</div>\r\n</div>\r\n\r\n<label> \r\n    [textarea your-message placeholder \"Message *\"] </label>\r\n\r\n[submit \"Submit\"]\n1\n[_site_title] \"[your-subject]\"\n[_site_title] <wordpress@dev.com>\n[_site_admin_email]\nFrom: [your-name] <[your-email]>\r\nSubject: [your-subject]\r\n\r\nMessage Body:\r\n[your-message]\r\n\r\n-- \r\nThis e-mail was sent from a contact form on [_site_title] ([_site_url])\nReply-To: [your-email]\n\n\n\n\n[_site_title] \"[your-subject]\"\n[_site_title] <wordpress@dev.com>\n[your-email]\nMessage Body:\r\n[your-message]\r\n\r\n-- \r\nThis e-mail was sent from a contact form on [_site_title] ([_site_url])\nReply-To: [_site_admin_email]\n\n\n\nThank you for your message. It has been sent.\nThere was an error trying to send your message. Please try again later.\nOne or more fields have an error. Please check and try again.\nThere was an error trying to send your message. Please try again later.\nYou must accept the terms and conditions before sending your message.\nThe field is required.\nThe field is too long.\nThe field is too short.\nThere was an unknown error uploading the file.\nYou are not allowed to upload files of this type.\nThe file is too big.\nThere was an error uploading the file.\nThe date format is incorrect.\nThe date is before the earliest one allowed.\nThe date is after the latest one allowed.\nThe number format is invalid.\nThe number is smaller than the minimum allowed.\nThe number is larger than the maximum allowed.\nThe answer to the quiz is incorrect.\nThe e-mail address entered is invalid.\nThe URL is invalid.\nThe telephone number is invalid.', 'Contact form 1', '', 'publish', 'closed', 'closed', '', 'contact-form-1', '', '', '2022-04-29 07:55:16', '2022-04-29 07:55:16', '', 0, 'http://dev.com/?post_type=wpcf7_contact_form&#038;p=121', 0, 'wpcf7_contact_form', '', 0),
(123, 1, '2022-04-29 09:04:07', '2022-04-29 09:04:07', '', 'photo-1611162616475-46b635cb6868', '', 'inherit', 'open', 'closed', '', 'photo-1611162616475-46b635cb6868', '', '', '2022-04-29 09:04:07', '2022-04-29 09:04:07', '', 0, 'http://dev.com/wp-content/uploads/2022/04/photo-1611162616475-46b635cb6868.jpg', 0, 'attachment', 'image/jpeg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_termmeta`
--

CREATE TABLE `wp_termmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `term_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wp_terms`
--

CREATE TABLE `wp_terms` (
  `term_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `slug` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `term_group` bigint(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_terms`
--

INSERT INTO `wp_terms` (`term_id`, `name`, `slug`, `term_group`) VALUES
(1, 'Uncategorized', 'uncategorized', 0),
(2, 'developertips', 'developertips', 0),
(3, 'Menu 1', 'menu-1', 0),
(4, 'primary', 'primary', 0),
(5, 'html', 'html', 0),
(6, 'css', 'css', 0),
(7, 'js', 'js', 0),
(8, 'react', 'react', 0),
(9, 'featured', 'featured', 0),
(11, 'twentytwentyone', 'twentytwentyone', 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_term_relationships`
--

CREATE TABLE `wp_term_relationships` (
  `object_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `term_order` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_term_relationships`
--

INSERT INTO `wp_term_relationships` (`object_id`, `term_taxonomy_id`, `term_order`) VALUES
(9, 2, 0),
(33, 3, 0),
(34, 3, 0),
(36, 3, 0),
(37, 3, 0),
(38, 4, 0),
(39, 4, 0),
(40, 4, 0),
(42, 4, 0),
(51, 5, 0),
(51, 6, 0),
(51, 7, 0),
(51, 8, 0),
(51, 9, 0),
(54, 9, 0),
(56, 9, 0),
(61, 9, 0),
(63, 9, 0),
(65, 9, 0),
(70, 9, 0),
(72, 9, 0),
(74, 9, 0),
(79, 3, 0),
(80, 4, 0),
(94, 11, 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_term_taxonomy`
--

CREATE TABLE `wp_term_taxonomy` (
  `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL,
  `term_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `taxonomy` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `count` bigint(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_term_taxonomy`
--

INSERT INTO `wp_term_taxonomy` (`term_taxonomy_id`, `term_id`, `taxonomy`, `description`, `parent`, `count`) VALUES
(1, 1, 'category', '', 0, 0),
(2, 2, 'wp_theme', '', 0, 1),
(3, 3, 'nav_menu', '', 0, 5),
(4, 4, 'nav_menu', '', 0, 5),
(5, 5, 'post_tag', '', 0, 1),
(6, 6, 'post_tag', '', 0, 1),
(7, 7, 'post_tag', '', 0, 1),
(8, 8, 'post_tag', '', 0, 1),
(9, 9, 'category', '', 0, 6),
(11, 11, 'wp_theme', '', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wp_usermeta`
--

CREATE TABLE `wp_usermeta` (
  `umeta_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_usermeta`
--

INSERT INTO `wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) VALUES
(1, 1, 'nickname', 'Rumesh Amarasinghe'),
(2, 1, 'first_name', 'Rumesh'),
(3, 1, 'last_name', 'Amarasinghe'),
(4, 1, 'description', 'Tiffani is the Content and Social Marketing Manager for the Bluehost brand. She has a passion for creating engaging content, SEO and social media!'),
(5, 1, 'rich_editing', 'true'),
(6, 1, 'syntax_highlighting', 'true'),
(7, 1, 'comment_shortcuts', 'false'),
(8, 1, 'admin_color', 'fresh'),
(9, 1, 'use_ssl', '0'),
(10, 1, 'show_admin_bar_front', 'false'),
(11, 1, 'locale', ''),
(12, 1, 'wp_capabilities', 'a:1:{s:13:\"administrator\";b:1;}'),
(13, 1, 'wp_user_level', '10'),
(14, 1, 'dismissed_wp_pointers', 'molongui-authorship_users,molongui-authorship_settings,molongui-authorship_box,molongui-authorship_advanced_button'),
(15, 1, 'show_welcome_panel', '0'),
(16, 1, 'session_tokens', 'a:1:{s:64:\"6c3425b9143e4077ac9ec9e40dc1476bfba85f737af9459757475133535767ff\";a:4:{s:10:\"expiration\";i:1656478781;s:2:\"ip\";s:3:\"::1\";s:2:\"ua\";s:111:\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36\";s:5:\"login\";i:1656305981;}}'),
(17, 1, 'wp_user-settings', 'libraryContent=browse&ampampampampampampampampampamphidetb=0&ampampampampampampampampampampeditor=tinymce&ampampampampampampampampampampposts_list_mode=list&ampampampampampampampampampamppost_dfw=off&ampampampampampampampampeditor=tinymce&ampampampampampampampampmfold=o&ampampeditor=tinymce&editor=html'),
(18, 1, 'wp_user-settings-time', '1656305979'),
(19, 1, 'wp_dashboard_quick_press_last_post_id', '124'),
(20, 1, 'community-events-location', 'a:1:{s:2:\"ip\";s:9:\"127.0.0.0\";}'),
(21, 1, 'managenav-menuscolumnshidden', 'a:5:{i:0;s:11:\"link-target\";i:1;s:11:\"css-classes\";i:2;s:3:\"xfn\";i:3;s:11:\"description\";i:4;s:15:\"title-attribute\";}'),
(22, 1, 'metaboxhidden_nav-menus', 'a:2:{i:0;s:19:\"add-post-type-blogs\";i:1;s:12:\"add-post_tag\";}'),
(23, 1, 'nav_menu_recently_edited', '4'),
(24, 1, 'closedpostboxes_post', 'a:3:{i:0;s:23:\"sharethis_share_buttons\";i:1;s:12:\"authorboxdiv\";i:2;s:10:\"showboxdiv\";}'),
(25, 1, 'metaboxhidden_post', 'a:0:{}'),
(26, 1, 'awpa_contact_facebook', 'https://www.facebook.com/rumesh.amarasingha/'),
(27, 1, 'awpa_contact_instagram', ''),
(28, 1, 'awpa_contact_youtube', ''),
(29, 1, 'awpa_contact_twitter', ''),
(30, 1, 'awpa_contact_linkedin', '');

-- --------------------------------------------------------

--
-- Table structure for table `wp_users`
--

CREATE TABLE `wp_users` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `user_login` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_pass` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_nicename` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_url` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_activation_key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_status` int(11) NOT NULL DEFAULT 0,
  `display_name` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_users`
--

INSERT INTO `wp_users` (`ID`, `user_login`, `user_pass`, `user_nicename`, `user_email`, `user_url`, `user_registered`, `user_activation_key`, `user_status`, `display_name`) VALUES
(1, 'rumesh', '$P$BweXmHHaoHoOob6ZQY3MflkZuIkhPz/', 'rumesh', 'tharindurumesh20@gmail.com', 'http://dev.com', '2022-01-30 08:06:50', '', 0, 'Rumesh Amarasinghe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wp_commentmeta`
--
ALTER TABLE `wp_commentmeta`
  ADD PRIMARY KEY (`meta_id`),
  ADD KEY `comment_id` (`comment_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indexes for table `wp_comments`
--
ALTER TABLE `wp_comments`
  ADD PRIMARY KEY (`comment_ID`),
  ADD KEY `comment_post_ID` (`comment_post_ID`),
  ADD KEY `comment_approved_date_gmt` (`comment_approved`,`comment_date_gmt`),
  ADD KEY `comment_date_gmt` (`comment_date_gmt`),
  ADD KEY `comment_parent` (`comment_parent`),
  ADD KEY `comment_author_email` (`comment_author_email`(10));

--
-- Indexes for table `wp_links`
--
ALTER TABLE `wp_links`
  ADD PRIMARY KEY (`link_id`),
  ADD KEY `link_visible` (`link_visible`);

--
-- Indexes for table `wp_options`
--
ALTER TABLE `wp_options`
  ADD PRIMARY KEY (`option_id`),
  ADD UNIQUE KEY `option_name` (`option_name`),
  ADD KEY `autoload` (`autoload`);

--
-- Indexes for table `wp_postmeta`
--
ALTER TABLE `wp_postmeta`
  ADD PRIMARY KEY (`meta_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indexes for table `wp_posts`
--
ALTER TABLE `wp_posts`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `post_name` (`post_name`(191)),
  ADD KEY `type_status_date` (`post_type`,`post_status`,`post_date`,`ID`),
  ADD KEY `post_parent` (`post_parent`),
  ADD KEY `post_author` (`post_author`);

--
-- Indexes for table `wp_termmeta`
--
ALTER TABLE `wp_termmeta`
  ADD PRIMARY KEY (`meta_id`),
  ADD KEY `term_id` (`term_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indexes for table `wp_terms`
--
ALTER TABLE `wp_terms`
  ADD PRIMARY KEY (`term_id`),
  ADD KEY `slug` (`slug`(191)),
  ADD KEY `name` (`name`(191));

--
-- Indexes for table `wp_term_relationships`
--
ALTER TABLE `wp_term_relationships`
  ADD PRIMARY KEY (`object_id`,`term_taxonomy_id`),
  ADD KEY `term_taxonomy_id` (`term_taxonomy_id`);

--
-- Indexes for table `wp_term_taxonomy`
--
ALTER TABLE `wp_term_taxonomy`
  ADD PRIMARY KEY (`term_taxonomy_id`),
  ADD UNIQUE KEY `term_id_taxonomy` (`term_id`,`taxonomy`),
  ADD KEY `taxonomy` (`taxonomy`);

--
-- Indexes for table `wp_usermeta`
--
ALTER TABLE `wp_usermeta`
  ADD PRIMARY KEY (`umeta_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indexes for table `wp_users`
--
ALTER TABLE `wp_users`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_login_key` (`user_login`),
  ADD KEY `user_nicename` (`user_nicename`),
  ADD KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wp_commentmeta`
--
ALTER TABLE `wp_commentmeta`
  MODIFY `meta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `wp_comments`
--
ALTER TABLE `wp_comments`
  MODIFY `comment_ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `wp_links`
--
ALTER TABLE `wp_links`
  MODIFY `link_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wp_options`
--
ALTER TABLE `wp_options`
  MODIFY `option_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2136;

--
-- AUTO_INCREMENT for table `wp_postmeta`
--
ALTER TABLE `wp_postmeta`
  MODIFY `meta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=337;

--
-- AUTO_INCREMENT for table `wp_posts`
--
ALTER TABLE `wp_posts`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT for table `wp_termmeta`
--
ALTER TABLE `wp_termmeta`
  MODIFY `meta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wp_terms`
--
ALTER TABLE `wp_terms`
  MODIFY `term_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `wp_term_taxonomy`
--
ALTER TABLE `wp_term_taxonomy`
  MODIFY `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `wp_usermeta`
--
ALTER TABLE `wp_usermeta`
  MODIFY `umeta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `wp_users`
--
ALTER TABLE `wp_users`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
