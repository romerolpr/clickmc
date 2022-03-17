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
-- Table structure for table `tb_notice`
--

DROP TABLE IF EXISTS `tb_notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_notice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `send` varchar(256) NOT NULL,
  `receive` varchar(256) NOT NULL,
  `type` int NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `timepost` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  CONSTRAINT `tb_notice_chk_1` CHECK (json_valid(`content`))
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_notice`
--

LOCK TABLES `tb_notice` WRITE;
/*!40000 ALTER TABLE `tb_notice` DISABLE KEYS */;
INSERT INTO `tb_notice` VALUES (1,'romerolpr','2',0,'{\"message\": \"Você enviou um lembrete.\", \"urlCode\": \"BCG2-BG23-5GPFH7\"}','2022-01-22 18:48:35',1),(2,'romerolpr','2',1,'{\"message\": \"Você enviou um novo lembrete para João Fagner de Lima Costa.\", \"urlCode\": \"BCG2-BG23-5GPFH7\"}','2022-01-22 18:48:59',1),(3,'romerolpr','1',0,'{\"message\":\"Você enviou um lembrete.\",\"urlCode\":\"ABA1-DH12-Y94ANG\"}','2022-02-27 22:54:41',1),(4,'romerolpr','1',0,'{\"message\":\"Você enviou um lembrete.\",\"urlCode\":\"ABA1-DH12-Y94ANG\"}','2022-02-28 00:37:08',1),(5,'romerolpr','1',1,'{\"message\":\"Você enviou um novo lembrete para João Fagner.\",\"urlCode\":\"ABA1-DH12-Y94ANG\"}','2022-02-28 00:37:09',1),(6,'romerolpr','1',0,'{\"message\":\"Você enviou um lembrete.\",\"urlCode\":\"ABA1-DH12-Y94ANG\"}','2022-02-28 00:37:19',1),(7,'romerolpr','1',1,'{\"message\":\"Você enviou um novo lembrete para João Fagner.\",\"urlCode\":\"ABA1-DH12-Y94ANG\"}','2022-02-28 00:37:21',1),(8,'renato.aragao','2',0,'{\"message\":\"Você enviou um lembrete.\",\"urlCode\":\"FHD6-HH60-NDLC0T\"}','2022-02-28 22:03:34',1),(9,'renato.aragao','2',1,'{\"message\":\"Você enviou um novo lembrete para Sandra Maria Alessandri Ribeiro.\",\"urlCode\":\"FHD6-HH60-NDLC0T\"}','2022-02-28 22:03:34',1),(10,'romerolpr','1',0,'{\"message\":\"Você enviou um lembrete.\",\"urlCode\":\"BDG2-BD24-7CAR7D\"}','2022-02-28 23:36:00',1),(11,'romerolpr','1',0,'{\"message\":\"Você enviou um lembrete.\",\"urlCode\":\"FEH0-BI05-JE1MQT\"}','2022-03-01 01:02:46',1),(12,'romerolpr','1',1,'{\"message\":\"Você enviou um novo lembrete para João Fagner.\",\"urlCode\":\"FEH0-BI05-JE1MQT\"}','2022-03-01 01:02:47',1),(13,'romerolpr','1',0,'{\"message\":\"Você enviou um lembrete.\",\"urlCode\":\"AAI0-HI01-828KDS\"}','2022-03-03 01:16:10',1);
/*!40000 ALTER TABLE `tb_notice` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-17 18:09:21
