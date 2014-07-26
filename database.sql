/*
SQLyog Community v11.1 Beta2 (64 bit)
MySQL - 5.5.37-35.1-log : Database - systemse_testforum
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `categories` */

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `categories` */

insert  into `categories`(`id`,`name`,`slug`,`created_at`,`updated_at`,`deleted_at`) values (21,'Pariatur repellendus ipsa.','pariatur-repellendus-ipsa','2014-07-17 08:29:37','2014-07-17 08:29:37',NULL),(22,'Et unde ut facere.','et-unde-ut-facere','2014-07-17 08:29:37','2014-07-17 08:29:37',NULL),(23,'Et molestiae tempore.','et-molestiae-tempore','2014-07-17 08:29:37','2014-07-17 08:29:37',NULL),(24,'Sint perspiciatis voluptas id.','sint-perspiciatis-voluptas-id','2014-07-17 08:29:37','2014-07-17 08:29:37',NULL);

/*Table structure for table `forums` */

DROP TABLE IF EXISTS `forums`;

CREATE TABLE `forums` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=88 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `forums` */

insert  into `forums`(`id`,`category_id`,`name`,`slug`,`created_at`,`updated_at`,`deleted_at`) values (59,24,'Dolor dolor est.','dolor-dolor-est','2014-07-17 08:29:38','2014-07-17 08:29:38',NULL),(60,23,'Eaque est sed.','eaque-est-sed','2014-07-17 08:29:38','2014-07-17 08:29:38',NULL),(61,24,'Officiis facilis quod qui.','officiis-facilis-quod-qui','2014-07-17 08:29:38','2014-07-17 08:29:38',NULL),(62,24,'Aspernatur laudantium doloribus omnis.','aspernatur-laudantium-doloribus-omnis','2014-07-17 08:29:38','2014-07-17 08:29:38',NULL),(63,21,'Commodi aut ut omnis architecto.','commodi-aut-ut-omnis-architecto','2014-07-17 08:29:38','2014-07-17 08:29:38',NULL),(64,22,'Corrupti ea.','corrupti-ea','2014-07-17 08:29:38','2014-07-17 08:29:38',NULL),(65,22,'Totam sit qui.','totam-sit-qui','2014-07-17 08:29:38','2014-07-17 08:29:38',NULL),(66,21,'Ab facilis voluptatem aut.','ab-facilis-voluptatem-aut','2014-07-17 08:29:39','2014-07-17 08:29:39',NULL),(67,21,'Omnis iure exercitationem.','omnis-iure-exercitationem','2014-07-17 08:29:39','2014-07-17 08:29:39',NULL),(68,22,'Molestiae accusantium harum soluta.','molestiae-accusantium-harum-soluta','2014-07-17 08:29:39','2014-07-17 08:29:39',NULL),(69,24,'Odit enim qui quos nam.','odit-enim-qui-quos-nam','2014-07-17 08:29:39','2014-07-17 08:29:39',NULL),(70,24,'Est nostrum.','est-nostrum','2014-07-17 08:29:39','2014-07-17 08:29:39',NULL),(71,24,'Perferendis consectetur dolorum.','perferendis-consectetur-dolorum','2014-07-17 08:29:39','2014-07-17 08:29:39',NULL),(72,22,'Et dolores quas atque.','et-dolores-quas-atque','2014-07-17 08:29:39','2014-07-17 08:29:39',NULL),(73,21,'Doloribus minima dolor.','doloribus-minima-dolor','2014-07-17 08:29:39','2014-07-17 08:29:39',NULL),(74,21,'Dolor et est.','dolor-et-est','2014-07-17 08:29:40','2014-07-17 08:29:40',NULL),(75,22,'Laborum at cum.','laborum-at-cum','2014-07-17 08:29:40','2014-07-17 08:29:40',NULL),(76,21,'Molestiae ut ut.','molestiae-ut-ut','2014-07-17 08:29:40','2014-07-17 08:29:40',NULL),(77,21,'Nulla ea fugit ullam.','nulla-ea-fugit-ullam','2014-07-17 08:29:40','2014-07-17 08:29:40',NULL),(78,24,'Ducimus rerum eligendi.','ducimus-rerum-eligendi','2014-07-17 08:29:40','2014-07-17 08:29:40',NULL),(79,22,'Qui qui soluta possimus.','qui-qui-soluta-possimus','2014-07-17 08:29:40','2014-07-17 08:29:40',NULL),(80,24,'Facere quaerat eveniet.','facere-quaerat-eveniet','2014-07-17 08:29:40','2014-07-17 08:29:40',NULL),(81,22,'Aliquid numquam.','aliquid-numquam','2014-07-17 08:29:40','2014-07-17 08:29:40',NULL),(82,24,'Officiis est nostrum nam nihil.','officiis-est-nostrum-nam-nihil','2014-07-17 08:29:40','2014-07-17 08:29:40',NULL),(83,23,'Animi sit quas necessitatibus.','animi-sit-quas-necessitatibus','2014-07-17 08:29:41','2014-07-17 08:29:41',NULL),(84,21,'Quam nostrum quo.','quam-nostrum-quo','2014-07-17 08:29:41','2014-07-17 08:29:41',NULL),(85,21,'Debitis eum voluptatem expedita ut.','debitis-eum-voluptatem-expedita-ut','2014-07-17 08:29:41','2014-07-17 08:29:41',NULL),(86,23,'Velit hic excepturi maiores.','velit-hic-excepturi-maiores','2014-07-17 08:29:41','2014-07-17 08:29:41',NULL),(87,21,'Dolorum amet quis hic.','dolorum-amet-quis-hic','2014-07-17 08:29:41','2014-07-17 08:29:41',NULL);

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`migration`,`batch`) values ('2014_07_16_0_create_users_table',1),('2014_07_16_1_create_categories_table',1),('2014_07_16_2_create_forums_table',1),('2014_07_16_3_create_topics_table',1),('2014_07_16_4_create_posts_table',1);

/*Table structure for table `posts` */

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `topic_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `body` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `posts` */

/*Table structure for table `topics` */

DROP TABLE IF EXISTS `topics`;

CREATE TABLE `topics` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `forum_id` int(11) NOT NULL,
  `user_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `body` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `topics` */

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`password`,`email`,`remember_token`,`created_at`,`updated_at`,`deleted_at`) values (15,'roman','$2y$10$8MK1D3JeH.eSXrpFQo3./OFwHv5nYrINl0cQCiRj5KCwqnz0t6VBm','roman@testforum.com',NULL,'2014-07-17 08:29:36','2014-07-17 08:29:36',NULL),(16,'nathon','$2y$10$2XY02sGOwa2BOrW4Am0e6urSjt4dweV.q0JRinNpHrHIVyi1w7V2S','nathon@testforum.com','BaZknR2lKvSFxlKUx5GifjNkgJq392xhmx7DFpCFH4JtKMUXsOadyxDC9mcG','2014-07-17 08:29:37','2014-07-19 22:15:48',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
