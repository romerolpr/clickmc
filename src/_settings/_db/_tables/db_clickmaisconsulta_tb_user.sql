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
-- Table structure for table `tb_user`
--

DROP TABLE IF EXISTS `tb_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `nvl` int NOT NULL DEFAULT '0',
  `name` varchar(144) NOT NULL,
  `email` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `crm` varchar(12) NOT NULL,
  `categmedicId` int NOT NULL,
  `phone` varchar(255) NOT NULL,
  `backdrop` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `address` varchar(144) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `number` int DEFAULT NULL,
  `county` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `state` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `country` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `postalCode` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `daysCall` int NOT NULL DEFAULT '0',
  `price` float NOT NULL DEFAULT '0',
  `valDiscount` float NOT NULL DEFAULT '0',
  `birthday` timestamp NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `last_modifed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `categmedicId` (`categmedicId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user`
--

LOCK TABLES `tb_user` WRITE;
/*!40000 ALTER TABLE `tb_user` DISABLE KEYS */;
INSERT INTO `tb_user` VALUES (1,'joaofagner',1,'João Fagner Costa','joao.fagnercosta21@gmail.com','12345',3,'+55 11 9 1111-1111','images/profiles/defaultDoctor.png','Alterando descrição no painel do médico.','Rua Doutor Edgar Garcia Vieira',171,'Vila Matilde','São Paulo','Brasil','03510-040',0,40,0,'1978-04-08 00:00:00','2022-03-03 01:09:22','2022-02-07 23:40:33',1),(2,'sandramaria',1,'Sandra Maria Alessandri Ribeiro','sandramaria7@hotmail.com','54321',3,'+55 11 9 1111-1111','images/profiles/defaultDoctor.png','Mais de 20 anos cuidando do seu coração.','Rua Gustavo Vicenzzoto',490,'Aricanduva','São Paulo','Brasil','08250-650',0,50,0,'1980-04-12 00:00:00','2022-02-07 23:44:13','2022-02-07 23:43:14',1),(3,'usuarionovo',1,'Kleber Barroso Nunes','usuario@gmail.com','12346',37,'+55 11 9 1111-1111','images/profiles/defaultDoctor.png','20 anos de experiência atuados pela área. Muito respeito e compromisso.','R. Dona Matilde',428,'Vila Matilde','São Paulo','Brasil','03512-000',0,45,0,'2002-02-09 00:00:00','2022-02-09 23:00:06','2022-02-09 22:19:29',1),(4,'bergferreira',1,'Lindenberg Ferreira','berg.ferreira@gmail.com','1234',28,'+55 11 9 1111-1111','images/profiles/defaultDoctor.png','Descrição de teste do teste de teste do teste.','Av Rio das Pedras',2350,'Itaquera','São Paulo','Brasil','13425-380',0,40,0,'1991-01-01 00:00:00','2022-02-15 02:40:10','2022-02-15 02:37:01',1);
/*!40000 ALTER TABLE `tb_user` ENABLE KEYS */;
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
