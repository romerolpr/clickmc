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
-- Table structure for table `tb_medic`
--

DROP TABLE IF EXISTS `tb_medic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_medic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categId` int NOT NULL,
  `title` varchar(75) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`),
  KEY `categId` (`categId`),
  CONSTRAINT `tb_medic_ibfk_1` FOREIGN KEY (`categId`) REFERENCES `tb_categmedic` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_medic`
--

LOCK TABLES `tb_medic` WRITE;
/*!40000 ALTER TABLE `tb_medic` DISABLE KEYS */;
INSERT INTO `tb_medic` VALUES (3,1,'cardiologista',1),(4,1,'urologista',1),(5,1,'infectologista',1),(6,1,'alergista e imunologista',1),(7,1,'anestesiologista',1),(8,1,'cirurgico geral',1),(9,1,'dermatologista',1),(10,1,'endoscopia',1),(11,1,'gastroenterologista',1),(12,1,'ginecologista',1),(13,1,'hematologista e hemoterapista',1),(14,1,'medico clinic',1),(17,1,'medico familiar',1),(18,1,'medico trabalhista',1),(21,1,'medico intensivista',1),(22,1,'medico perista legal',1),(23,1,'nefrologista',1),(24,1,'neurologista',1),(25,1,'nutrologista',1),(26,1,'oftalmologista',1),(27,1,'oncologista',1),(28,1,'ortopedista',1),(29,1,'otorrinolaringologista',1),(30,1,'patologista',1),(31,1,'pediatra',1),(32,1,'pneumologista',1),(33,1,'psiquiatra',1),(34,1,'reumatologista',1),(36,2,'centro cirúrgico',1),(37,2,'nefrologia',1),(38,2,'saúde coletiva',1),(39,2,'saúde pública',1),(40,2,'saúde do trabalhador',1),(41,2,'saúde intensiva',1),(42,5,'cardiovascular',1),(43,5,'dermatofuncional',1),(44,5,'respiratória',1),(45,5,'traumato-ortopédica',1),(46,3,'clínico',1),(47,3,'esportivo',1),(48,3,'comportamental',1),(49,3,'saúde coletivo',1),(50,3,'gastronômico',1),(51,4,'audiologista',1),(52,4,'disfagista',1),(53,4,'fluência',1),(54,4,'fonoaudiologia escolar/ educacional',1),(55,4,'fonoaudiologia do trabalho',1),(56,4,'fonoaudiologia neurofuncional',1),(57,4,'gerontologista',1),(58,4,'linguagem',1);
/*!40000 ALTER TABLE `tb_medic` ENABLE KEYS */;
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
