-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_clickmaisconsulta
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_uploaded`
--

DROP TABLE IF EXISTS `tb_uploaded`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_uploaded` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `title` varchar(256) NOT NULL,
  `path` varchar(256) NOT NULL,
  `filetype` varchar(155) NOT NULL,
  `size` int NOT NULL,
  `userId` varchar(140) NOT NULL,
  `urlCode` varchar(25) NOT NULL,
  `timepost` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_uploaded`
--

LOCK TABLES `tb_uploaded` WRITE;
/*!40000 ALTER TABLE `tb_uploaded` DISABLE KEYS */;
INSERT INTO `tb_uploaded` VALUES (1,'ea18eb218bf0aabc3c51620f6df1767a.pdf','510012774578.pdf','upload/2022/01/ea18eb218bf0aabc3c51620f6df1767a.pdf','application/pdf',463704,'romerolpr','BCG2-BG23-5GPFH7','0000-00-00 00:00:00',1),(2,'f01a094613cf755acc69e93b23aa8a16.pdf','Currículo - Lucas Romero.pdf','upload\\2022\\02\\f01a094613cf755acc69e93b23aa8a16.pdf','application/pdf',136996,'romerolpr','ABA1-DH12-Y94ANG','2022-02-27 22:51:39',1),(3,'5cd2acdc17ed418eb88c89ddaf820587.pdf','Currículo - Lucas Romero.pdf','upload\\2022\\02\\5cd2acdc17ed418eb88c89ddaf820587.pdf','application/pdf',136996,'romerolpr','IBD9-GE92-Z7M19B','2022-03-01 00:53:23',1),(4,'89c799ad6fe3b660229a3c27223ed1f7.pdf','LUCAS PEREIRA ROMERO.pdf','upload\\2022\\02\\89c799ad6fe3b660229a3c27223ed1f7.pdf','application/pdf',924208,'romerolpr','FEH0-BI05-JE1MQT','2022-03-01 01:02:38',1),(5,'b675078a7f25b74dab041184cfbeb24e.jpg','6e91ac6720e4a84d8b989466bc86d1ac.jpg','upload\\2022\\03\\b675078a7f25b74dab041184cfbeb24e.jpg','image/jpeg',173930,'romerolpr','AAI0-HI01-828KDS','2022-03-03 01:11:16',1),(6,'9b3f79bd6e0fbb7c4639f7bb645d89f5.pdf','LUCAS PEREIRA ROMERO.pdf','upload\\2022\\03\\9b3f79bd6e0fbb7c4639f7bb645d89f5.pdf','application/pdf',924208,'romerolpr','AAI0-HI01-828KDS','2022-03-03 01:11:42',1),(7,'c403ed318316fdab65592891db412504.jpg','Planet-Earth-Space_1920x1080.jpg','upload\\2022\\03\\c403ed318316fdab65592891db412504.jpg','image/jpeg',409113,'romerolpr','HGD0-FG07-JMDORP','2022-03-03 01:47:54',1);
/*!40000 ALTER TABLE `tb_uploaded` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-17 18:09:22
