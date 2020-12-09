/*
            -----blood bank management system database schema----- 
tables:
1.userdetails-table
2.user_login
3.user_health
4.emp_details
5.emp_login
6.blood_stocks
7.user_request
*/


+--------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| user_details | CREATE TABLE `user_details` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `userFName` varchar(30) NOT NULL,
  `userAge` int NOT NULL,
  `userGender` char(1) NOT NULL,
  `userBloodGroup` varchar(5) NOT NULL,
  `userPhone` bigint NOT NULL,
  `userMail` varchar(35) DEFAULT NULL,
  `userPlace` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
+--------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+


+------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| user_login | CREATE TABLE `user_login` (
  `user_id` int NOT NULL,
  `userUserName` varchar(15) NOT NULL,
  `userPassword` varchar(15) NOT NULL,
  PRIMARY KEY (`user_id`,`userUserName`),
  UNIQUE KEY `userUserName_UNIQUE` (`userUserName`),
  CONSTRAINT `user_login_id` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
+------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+


+-------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| user_health | CREATE TABLE `user_health` (
  `user_id` int NOT NULL,
  `userVitals` varchar(10) DEFAULT NULL,
  `userHeight` int DEFAULT NULL,
  `userWeight` int DEFAULT NULL,
  `userStatus` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `user_id_health` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
+-------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+


+-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| emp_details | CREATE TABLE `emp_details` (
  `emp_id` int NOT NULL AUTO_INCREMENT,
  `empName` varchar(45) NOT NULL,
  `empMail` varchar(45) NOT NULL,
  `empPhone` varchar(12) NOT NULL,
  `empAddress` varchar(70) NOT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
+-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+


+-----------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| emp_login | CREATE TABLE `emp_login` (
  `emp_id` int NOT NULL,
  `userName` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  PRIMARY KEY (`emp_id`),
  UNIQUE KEY `userName_UNIQUE` (`userName`),
  CONSTRAINT `emp_login_id` FOREIGN KEY (`emp_id`) REFERENCES `emp_details` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
+-----------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+


+--------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| blood_stocks | CREATE TABLE `blood_stocks` (
  `b_id` int NOT NULL AUTO_INCREMENT,
  `blood_group` varchar(5) NOT NULL,
  `unit` int NOT NULL,
  PRIMARY KEY (`b_id`,`blood_group`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
+--------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+


+--------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| user_request | CREATE TABLE `user_request` (
  `user_id` int NOT NULL,
  `req_id` int NOT NULL AUTO_INCREMENT,
  `blood_group` varchar(5) NOT NULL,
  `unit` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`req_id`),
  KEY `user_id_request_idx` (`user_id`),
  CONSTRAINT `user_id_request` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`user_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
+--------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+


/*inserting dummy data to the employee details table*/
INSERT INTO `bbms`.`emp_details` (`emp_id`, `empName`, `empMail`, `empPhone`, `empAddress`) VALUES ('1', 'Anand', 'anand123@gmail.com', '9854765214', 'Kannur');
INSERT INTO `bbms`.`emp_details` (`emp_id`, `empName`, `empMail`, `empPhone`, `empAddress`) VALUES ('2', 'Arya', 'arya199@hotmail.com', '9644712385', 'Kannur');
INSERT INTO `bbms`.`emp_details` (`emp_id`, `empName`, `empMail`, `empPhone`, `empAddress`) VALUES ('3', 'Revathi', 'rev23@gmail.com', '6282478945', 'Kozhikode');
INSERT INTO `bbms`.`emp_details` (`emp_id`, `empName`, `empMail`, `empPhone`, `empAddress`) VALUES ('4', 'Sanoop', 'san00p92@gmail.com', '9447545896', 'Kasargode');


/*inserting details to the employee login table*/
INSERT INTO `bbms`.`emp_login` (`emp_id`, `userName`, `password`) VALUES ('1', 'anand', 'anand@123');
INSERT INTO `bbms`.`emp_login` (`emp_id`, `userName`, `password`) VALUES ('2', 'arya', 'arya@123');
INSERT INTO `bbms`.`emp_login` (`emp_id`, `userName`, `password`) VALUES ('3', 'revathi', 'revathi@123');
INSERT INTO `bbms`.`emp_login` (`emp_id`, `userName`, `password`) VALUES ('4', 'sanoop', 'sanoop@123');


/*inserting some dummy data to the user details table*/
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('1', 'Ron', '24', 'M', 'O+ve', '9847561245', 'ronroy@gmail.com', 'Payyanur');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('2', 'Sajan', '34', 'M', 'B-ve', '9647524561', 'sajank@hotmail.com', 'Kannur');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('3', 'Sheethal', '26', 'F', 'O+ve', '6247285479', 'sheethalkumar@gmail.com', 'Kandoth');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('4', 'Anirudh', '22', 'M', 'O+ve', '9854766524', 'ani@gmail.com', 'Kannur');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('5', 'Arathi', '30', 'F', 'B+ve', '6287458479', 'arathi17@gmail.com', 'Kasargode');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('6', 'Ajoy', '20', 'M', 'AB-ve', '9854756418', 'ajoyk@gmail.com', 'Kannur');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('7', 'Sherya', '33', 'F', 'AB-ve', '9847512457', 'shreyasheyas@gmail.com', 'Kannur');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('8', 'Rajan', '44', 'M', 'A+ve', '6814754718', 'rajankayyil@gmail.com', 'Payyanur');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('9', 'Manohar', '38', 'M', 'A-ve', '9857462541', 'manoharraj@gmail.com', 'Payyanur');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('10', 'Anaina', '23', 'F', 'A-ve', '9847516842', 'anaina@gmail.com', 'Kannur');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('11', 'Arundathi', '20', 'F', 'O+ve', '6847125489', 'arundathi@gmail.com', 'Kannur');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('12', 'Lakshmi', '30', 'F', 'A+ve', '6282478514', 'lakshmikirshna@gmail.com', 'Payynur');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('13', 'Akash', '22', 'M', 'Pnull', '9857489576', 'akashaja@gmail.com', 'Kannur');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('14', 'Zidan', '30', 'M', 'B+ve', '6821478596', 'mzidan@gmail.com', 'Payyanur');
INSERT INTO `bbms`.`user_details` (`user_id`, `userFName`, `userAge`, `userGender`, `userBloodGroup`, `userPhone`, `userMail`, `userPlace`) VALUES ('15', 'Akshay', '32', 'M', 'B+ve', '9685745219', 'akshayaj@gmai..com', 'Payyanur');



/*inserting dummy data to the user_login table*/
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('1', 'ron', 'ron@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('2', 'sajan', 'sajan@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('3', 'sheethal', 'sheethal@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('4', 'anirudh', 'anirudh@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('5', 'arathi', 'arathi@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('6', 'ajoy', 'ajoy@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('7', 'shreya', 'shreya@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('8', 'rajan', 'rajan@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('9', 'manohar', 'manohar@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('10', 'anaina', 'anaina@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('11', 'arundathi', 'arundathi@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('12', 'lakshmi', 'lakshmi@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('13', 'akash', 'akash@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('14', 'zidan', 'zidan@123');
INSERT INTO `bbms`.`user_login` (`user_id`, `userUserName`, `userPassword`) VALUES ('15', 'akshay', 'akshay@123');


/*adding dummy data to the user health table*/
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('1');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('2');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('3');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('4');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('5');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('6');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('7');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('8');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('9');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('10');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('11');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('12');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('13');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('14');
INSERT INTO `bbms`.`user_health` (`user_id`) VALUES ('15');
