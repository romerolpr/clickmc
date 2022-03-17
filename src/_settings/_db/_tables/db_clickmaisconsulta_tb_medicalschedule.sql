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
