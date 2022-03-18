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

-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_clickmaisconsulta
-- ------------------------------------------------------
-- Server version 8.0.28

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


-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_clickmaisconsulta
-- ------------------------------------------------------
-- Server version 8.0.28

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

-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_clickmaisconsulta
-- ------------------------------------------------------
-- Server version 8.0.28

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
-- Table structure for table `tb_medicalschedule`
--

DROP TABLE IF EXISTS `tb_medicalschedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_medicalschedule` (
  `id` int NOT NULL AUTO_INCREMENT,
  `medicalId` int NOT NULL,
  `appointment` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `userId` varchar(256) NOT NULL,
  `urlCode` varchar(255) NOT NULL,
  `datelimit` datetime NOT NULL,
  `timepost` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `medicalId` (`medicalId`),
  CONSTRAINT `tb_medicalschedule_chk_1` CHECK (json_valid(`appointment`))
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_medicalschedule`
--

LOCK TABLES `tb_medicalschedule` WRITE;
/*!40000 ALTER TABLE `tb_medicalschedule` DISABLE KEYS */;
INSERT INTO `tb_medicalschedule` VALUES (1,1,'{\"date\":\"2022-2-28\",\"time\":\"10:00\",\"userId\":\"romerolpr\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5515,\"lon\":-46.6343},\"timestamp\":1645982167259},\"complementary\":null}',5,'romerolpr','ABA1-DH12-Y94ANG','2022-02-28 10:00:00','2022-02-27 17:16:25'),(2,1,'{\"date\":\"2022-2-27\",\"time\":\"15:30\",\"userId\":\"romerolpr\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5515,\"lon\":-46.6343},\"timestamp\":1645982167259},\"complementary\":null}',5,'romerolpr','BCD2-AC20-7TTKHF','2022-02-27 15:30:00','2022-02-27 17:16:41'),(3,1,'{\"date\":\"2022-2-27\",\"time\":\"18:30\",\"userId\":\"romerolpr\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5515,\"lon\":-46.6343},\"timestamp\":1645982167259},\"complementary\":null}',5,'romerolpr','FEG6-GA65-SVFTX9','2022-02-27 18:30:00','2022-02-27 17:16:59'),(4,1,'{\"date\":\"2022-2-28\",\"time\":\"18:30\",\"userId\":\"renato.aragao\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5391328,\"lon\":-46.5269149},\"timestamp\":1646082851491},\"complementary\":null}',5,'renato.aragao','BHF2-HH28-LOVUEL','2022-02-28 18:30:00','2022-02-28 21:53:08'),(5,1,'{\"date\":\"2022-2-28\",\"time\":\"19:00\",\"userId\":\"renato.aragao\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5391328,\"lon\":-46.5269149},\"timestamp\":1646085454082}}',5,'renato.aragao','EEH5-EC55-E5FARC','2022-02-28 19:00:00','2022-02-28 21:58:26'),(6,2,'{\"date\":\"2022-2-28\",\"time\":\"19:00\",\"userId\":\"renato.aragao\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5391328,\"lon\":-46.5269149},\"timestamp\":1646085454082},\"complementary\":{\"weight\":\"62\",\"height\":\"180\"}}',5,'renato.aragao','FHD6-HH60-NDLC0T','2022-02-28 19:00:00','2022-02-28 22:03:00'),(7,1,'{\"date\":\"2022-2-28\",\"time\":\"19:30\",\"userId\":\"romerolpr\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5515,\"lon\":-46.6343},\"timestamp\":1646086665920}}',5,'romerolpr','EEF5-HG55-GCFOAQ','2022-02-28 19:30:00','2022-02-28 22:17:58'),(8,1,'{\"date\":\"2022-2-28\",\"time\":\"21:00\",\"userId\":\"romerolpr\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5515,\"lon\":-46.6343},\"timestamp\":1646086665920},\"complementary\":{\"weight\":\"60\",\"height\":\"180\"}}',5,'romerolpr','EBH5-CA52-ND2NYM','2022-02-28 21:00:00','2022-02-28 22:18:23'),(9,1,'{\"date\":\"2022-2-28\",\"time\":\"21:45\",\"userId\":\"romerolpr\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5515,\"lon\":-46.6343},\"timestamp\":1646091326158}}',4,'romerolpr','BDG2-BD24-7CAR7D','2022-03-01 21:45:00','2022-02-28 23:35:42'),(10,1,'{\"date\":\"2022-2-28\",\"time\":\"21:55\",\"userId\":\"romerolpr\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5515,\"lon\":-46.6343},\"timestamp\":1646095610406}}',5,'romerolpr','FHE6-IC68-JMEQCX','2022-02-28 21:55:00','2022-03-01 00:47:19'),(11,1,'{\"date\":\"2022-2-28\",\"time\":\"22:00\",\"userId\":\"romerolpr\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5515,\"lon\":-46.6343},\"timestamp\":1646095788323}}',2,'romerolpr','FEH0-BI05-JE1MQT','2022-02-28 22:00:00','2022-03-01 00:50:02'),(12,1,'{\"date\":\"2022-2-28\",\"time\":\"22:10\",\"userId\":\"romerolpr\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5515,\"lon\":-46.6343},\"timestamp\":1646095940068}}',4,'romerolpr','IBD9-GE92-Z7M19B','2022-02-28 22:10:00','2022-03-01 00:52:37'),(13,1,'{\"date\":\"2022-3-3\",\"time\":\"10:30\",\"userId\":\"romerolpr\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5391504,\"lon\":-46.5268585},\"timestamp\":1646269462240}}',4,'romerolpr','AAI0-HI01-828KDS','2022-03-03 10:30:00','2022-03-03 01:06:38'),(14,1,'{\"date\":\"2022-3-3\",\"time\":\"10:00\",\"userId\":\"romerolpr\",\"payment\":{\"type\":\"card-authorized\",\"installmentsTimes\":1,\"installmentsInterest\":false},\"coords\":{\"coords\":{\"lat\":-23.5391504,\"lon\":-46.5268585},\"timestamp\":1646271883750}}',2,'romerolpr','HGD0-FG07-JMDORP','2022-03-03 10:00:00','2022-03-03 01:46:10');
/*!40000 ALTER TABLE `tb_medicalschedule` ENABLE KEYS */;
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

-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_clickmaisconsulta
-- ------------------------------------------------------
-- Server version 8.0.28

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

-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_clickmaisconsulta
-- ------------------------------------------------------
-- Server version 8.0.28

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
-- Table structure for table `tb_categmedic`
--

DROP TABLE IF EXISTS `tb_categmedic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_categmedic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(75) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_categmedic`
--

LOCK TABLES `tb_categmedic` WRITE;
/*!40000 ALTER TABLE `tb_categmedic` DISABLE KEYS */;
INSERT INTO `tb_categmedic` VALUES (1,'medico',1),(2,'enfermagem',1),(3,'nutricionista',1),(4,'fonodiologo',1),(5,'fisioterapeuta',1);
/*!40000 ALTER TABLE `tb_categmedic` ENABLE KEYS */;
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

-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_clickmaisconsulta
-- ------------------------------------------------------
-- Server version 8.0.28

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
-- Table structure for table `tb_cancellation`
--

DROP TABLE IF EXISTS `tb_cancellation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_cancellation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `urlCode` varchar(100) NOT NULL,
  `requester` varchar(256) NOT NULL,
  `receiver` varchar(256) NOT NULL,
  `timepost` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cancellation`
--

LOCK TABLES `tb_cancellation` WRITE;
/*!40000 ALTER TABLE `tb_cancellation` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_cancellation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-17 18:09:23

-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_clickmaisconsulta
-- ------------------------------------------------------
-- Server version 8.0.28

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
-- Table structure for table `tb_access`
--

DROP TABLE IF EXISTS `tb_access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_access` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `hash` varchar(256) NOT NULL,
  `dateCreated` varchar(54) NOT NULL,
  `dateUpdated` varchar(54) NOT NULL,
  `status` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_access`
--

LOCK TABLES `tb_access` WRITE;
/*!40000 ALTER TABLE `tb_access` DISABLE KEYS */;
INSERT INTO `tb_access` VALUES (1,'joaofagner','$2a$10$fbDHj51pumbj/bWnMZ6PRepHOxEd4uY/aJHzGzmTgJdjt9Xu8LTey','2022-02-04T00:00:14.096Z','2022-02-04T00:00:14.096Z',1),(2,'joaoDiniz','$2a$10$iLX93YnVLLbOLfaCEsq9EexV.oGw1DGpevhVaBdPc8cvdJ7w.GB8W','2022-02-04T21:36:43.317Z','2022-02-04T21:36:43.317Z',1),(3,'sandra_maria','$2a$10$o67nXGDCecPM/ANf1jijK.4oKYtP6uPl8J/1PkNUepJTe9CDekObS','2022-02-04T21:55:42.123Z','2022-02-04T21:55:42.123Z',1);
/*!40000 ALTER TABLE `tb_access` ENABLE KEYS */;
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
