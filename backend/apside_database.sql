CREATE DATABASE IF NOT EXISTS `apside` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `apside`;

CREATE TABLE `USERS` (
  `id` VARCHAR(255) NOT NULL,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `fonction` VARCHAR(255) NOT NULL,
  `site` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PROJECTS` (
  `id` VARCHAR(255) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(1500) NOT NULL,
  `goals` VARCHAR(1500) NOT NULL,
  `customer` VARCHAR(255) NOT NULL,
  `status` VARCHAR(100) NOT NULL,
  `creation_date` DATE NOT NULL,
  `update_to_project_date` DATE,
  `update_to_finish_date` DATE,
  `belonging_site` VARCHAR(255) NOT NULL,
  `nb_likes` INT NOT NULL,
  `notation` INT,
  `user_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `KEYWORDS` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `keyword` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `LANGUAGES` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `language` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `COMMENTS` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR(500) NOT NULL,
  `user_id` VARCHAR(255) NOT NULL,
  `project_id` VARCHAR(255) NOT NULL,
  `creation_date` DATE NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `USERS_PROJECTS` (
  `user_id` VARCHAR(255) NOT NULL,
  `project_id` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PROJECTS_KEYWORDS` (
  `keyword_id` INT NOT NULL,
  `project_id` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PROJECTS_LANGUAGES` (
  `language_id` INT NOT NULL,
  `project_id` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `COMMENTS` ADD FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`);
ALTER TABLE `COMMENTS` ADD FOREIGN KEY (`project_id`) REFERENCES `PROJECTS` (`id`);
ALTER TABLE `PROJECTS` ADD FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`);
ALTER TABLE `PROJECTS_KEYWORDS` ADD FOREIGN KEY (`project_id`) REFERENCES `PROJECTS` (`id`);
ALTER TABLE `PROJECTS_KEYWORDS` ADD FOREIGN KEY (`keyword_id`) REFERENCES `KEYWORDS` (`id`);
ALTER TABLE `PROJECTS_LANGUAGES` ADD FOREIGN KEY (`project_id`) REFERENCES `PROJECTS` (`id`);
ALTER TABLE `PROJECTS_LANGUAGES` ADD FOREIGN KEY (`language_id`) REFERENCES `LANGUAGES` (`id`);
ALTER TABLE `USERS_PROJECTS` ADD FOREIGN KEY (`project_id`) REFERENCES `PROJECTS` (`id`);
ALTER TABLE `USERS_PROJECTS` ADD FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`);

INSERT INTO  `USERS` (`id`, `firstname`, `lastname`, `email`, `password`, `fonction`, `site`) VALUES
('2fsf204-755a-4d90-bcb9-15vdffez83327', 'Emma', 'Bignon', 'emmabignon@apside.com', '$argon2id$v=19$m=65536,t=5,p=1$2IONFl8xZzDfBi0Bb8yduA$7DtJKZwDp3bN0Q0L+fbEeU1Mta62bTs+JKiJYQbnuM8', 'UX UI', 'Apside Remote'),
('2c40b204-755a-4d90-bcb9-15vdf4df3327', 'Thomas', 'Casper', 'thomascasper@apside.com', '$argon2id$v=19$m=65536,t=5,p=1$2IONFl8xZzDfBi0Bb8yduA$7DtJKZwDp3bN0Q0L+fbEeU1Mta62bTs+JKiJYQbnuM8', 'Dev Op', 'Apside Berlin'),
('2c40b2c4-755a-4d90-bcb9-15vdf4df3327', 'Wendy', 'Alter', 'wendyalter@apside.com', '$argon2id$v=19$m=65536,t=5,p=1$2IONFl8xZzDfBi0Bb8yduA$7DtJKZwDp3bN0Q0L+fbEeU1Mta62bTs+JKiJYQbnuM8', 'graphiste', 'Apside Nantes'),
('2c40b2c4-755a-4d90-bcb9-155ff4df3327', 'Peter', 'Pan', 'peterpan@apside.com', '$argon2id$v=19$m=65536,t=5,p=1$2IONFl8xZzDfBi0Bb8yduA$7DtJKZwDp3bN0Q0L+fbEeU1Mta62bTs+JKiJYQbnuM8', 'dev', 'Apside Paris'),
('2c40b2c4-755a-4d90-bcb9-155ff4083327', 'John', 'Doe', 'johndoe@apside.com', '$argon2id$v=19$m=65536,t=5,p=1$2IONFl8xZzDfBi0Bb8yduA$7DtJKZwDp3bN0Q0L+fbEeU1Mta62bTs+JKiJYQbnuM8', 'dev', 'Apside Paris'),
('2c40b2c4-755a-4d90-bcb9-155ff4083325', 'Susana', 'Malone', 'susanamalone@apside.com', '$argon2id$v=19$m=65536,t=5,p=1$2IONFl8xZzDfBi0Bb8yduA$7DtJKZwDp3bN0Q0L+fbEeU1Mta62bTs+JKiJYQbnuM8', 'Product Owner', 'Apside New York'),
('2c40b2c4-755a-4d90-bcb9-155ff4083324', 'Eugene', 'Dostie', 'eugenedostie@apside.com', '$argon2id$v=19$m=65536,t=5,p=1$2IONFl8xZzDfBi0Bb8yduA$7DtJKZwDp3bN0Q0L+fbEeU1Mta62bTs+JKiJYQbnuM8', 'Customer Manager', 'Apside Berlin');




INSERT INTO `PROJECTS` (`id`,`name`, `description`, `goals`, `customer`, `status`, `creation_date`, `update_to_project_date`, `update_to_finish_date`,
 `belonging_site`, `nb_likes`, `user_id`) VALUES
 ('ilytkqsdngr654ssfeqfe51','How to manage My Desk','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
'APSIDE', 'idea', '2022-03-01','1900-01-01', '1900-01-01', 'BERLIN', 0, '2c40b2c4-755a-4d90-bcb9-155ff4083325'),
 ('ilytkfqngr654ssfeqfe51','Web App Location bicycle','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
'APSIDE', 'idea', '2021-03-01','1900-01-01', '1900-01-01', 'BERLIN', 0, '2c40b2c4-755a-4d90-bcb9-155ff4083324'),
 ('ilytkfqngrotusfeqfe51','Web App Location vélo','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
'APSIDE', 'idea', '2021-03-01','1900-01-01', '1900-01-01', 'BERLIN', 0, '2c40b204-755a-4d90-bcb9-15vdf4df3327'),
 ('ilytkfq45tusfef7651','Web App Gestion de Projet','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
'APSIDE', 'idea', '2021-04-01','1900-01-01', '1900-01-01', 'BERLIN', 0, '2c40b2c4-755a-4d90-bcb9-155ff4df3327'),
 ('ilytkfqngrotusfef7651','Web App Geolocalisation','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
'APSIDE', 'idea', '2021-03-01','1900-01-01', '1900-01-01', 'BERLIN', 0, '2c40b204-755a-4d90-bcb9-15vdf4df3327'),
 ('ilytkfqngrotuihg15687651','DEPARTMENT REORGANISATION','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
'APSIDE', 'in progress', '2020-03-01','2021-02-15', '1900-01-01', 'STRASBOURG', 0, '2c40b2c4-755a-4d90-bcb9-155ff4083327'),
('ilytkfqngrotui31687651','INTEGRATION OF NEW COLLABORATORS','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
'APSIDE', 'in progress', '2019-12-12', '2020-02-12','1900-01-01', 'STRASBOURG', 8, '2c40b2c4-755a-4d90-bcb9-155ff4083327'),
('lykfjgklftylg8523164','COMPUTERISED DOCUMENT MANAGEMENT','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
'APSIDE', 'finished','2018-09-11','2019-02-11','2019-09-20', 'ANGERS', 26, '2c40b2c4-755a-4d90-bcb9-155ff4083325'),
('lykfjgdsqdzlg8523164','Interne secret project','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
'APSIDE', 'finished','2018-09-11','2019-02-11','2021-09-20', 'ANGERS', 12, '2c40b2c4-755a-4d90-bcb9-155ff4df3327'),
('lykfjfezfzlg8523164','Interne secret project','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
'APSIDE', 'finished','2018-09-11','2019-02-11','2021-09-20', 'ANGERS', 2, '2c40b2c4-755a-4d90-bcb9-15vdf4df3327'),
('ilytkfqngfotuihg15687651','CARD TEST FOR EXEMPLE','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
'APSIDE', 'idea', '2020-03-01','1900-01-01', '1900-01-01', 'STRASBOURG', 0, '2c40b2c4-755a-4d90-bcb9-155ff4083327');



INSERT INTO `KEYWORDS` (`id`, `keyword`) VALUES
(1, "management"),
(2, "virtual reality"),
(3, "mobile"),
(4, "desktop"),
(5, "bicycle"),
(6, "community"),
(7, "remote");

INSERT INTO `LANGUAGES` (`id`, `language`) VALUES
(1, "javascript"),
(2, "php"),
(3, "react"),
(4, "kobolt"),
(5, "ruby");


INSERT INTO `COMMENTS` (`id`, `comment`, `user_id`, `project_id`, `creation_date`) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', '2c40b2c4-755a-4d90-bcb9-155ff4083324', 'ilytkfqngrotuihg15687651','2022-06-20'),
(2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', '2c40b2c4-755a-4d90-bcb9-155ff4083324', 'lykfjgklftylg8523164','2022-06-18'),
(3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', '2c40b2c4-755a-4d90-bcb9-155ff4083327', 'ilytkfqngrotuihg15687651','2022-06-15'),
(4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083324','ilytkfqngrotuihg15687651','2022-06-20'),
(5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b204-755a-4d90-bcb9-15vdf4df3327','ilytkfqngrotuihg15687651','2022-04-15'),
(6, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-15vdf4df3327','ilytkfqngrotuihg15687651','2021-07-07'),
(7, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4df3327','ilytkfqngrotuihg15687651','2019-03-03'),
(8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083327','ilytkfqngrotuihg15687651','2021-06-14'),
(9, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083327','ilytkfqngrotuihg15687651','2022-04-07'),
(10, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083325','ilytkfqngrotuihg15687651','2022-09-21'),
(11, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4df3327','ilytkfqngrotuihg15687651','2021-11-20'),
(12, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083324','ilytkfqngrotuihg15687651','2019-06-15'),
(13, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b204-755a-4d90-bcb9-15vdf4df3327','ilytkfqngr654ssfeqfe51','2021-04-07'),
(14, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083324','ilytkfqngr654ssfeqfe51','2022-07-03'),
(15, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083324','ilytkfqngr654ssfeqfe51','2022-03-14'),
(16, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4df3327','ilytkfqngr654ssfeqfe51','2021-06-07'),
(17, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083325','ilytkfqngr654ssfeqfe51','2019-04-11'),
(18, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083327','ilytkfqngr654ssfeqfe51','2021-09-20'),
(19, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083327','ilytkfqngr654ssfeqfe51','2022-11-15'),
(20, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083325','ilytkfqngr654ssfeqfe51','2022-06-07'),
(21, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4df3327','ilytkfqngr654ssfeqfe51','2021-04-03'),
(22, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083324','ilytkfqngr654ssfeqfe51','2019-07-14'),
(23, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083324','ilytkfqngrotusfeqfe51','2021-03-07'),
(24, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083327','ilytkfqngrotusfeqfe51','2022-06-21'),
(25, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083327','ilytkfqngrotusfeqfe51','2022-04-20'),
(26, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083327','ilytkfqngrotusfeqfe51','2021-09-15'),
(27, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083327','ilytkfqngrotusfeqfe51','2019-11-07'),
(28, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083327','ilytkfqngrotusfeqfe51','2021-06-03'),
(29, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083325','ilytkfqngrotusfeqfe51','2022-04-14'),
(30, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4df3327','ilytkfqngrotusfeqfe51','2022-07-07'),
(31, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083324','ilytkfqngrotusfeqfe51','2021-03-11'),
(32, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083325','ilytkfqngrotuihg15687651','2019-06-20'),
(33, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083327','ilytkfqngrotuihg15687651','2021-04-15'),
(34, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083327','ilytkfqngrotuihg15687651','2022-09-07'),
(35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083325','ilytkfqngrotuihg15687651','2022-11-03'),
(36, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4df3327','ilytkfqngrotuihg15687651','2022-04-14'),
(37, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.','2c40b2c4-755a-4d90-bcb9-155ff4083324','ilytkfqngrotuihg15687651','2022-09-07');


INSERT INTO `USERS_PROJECTS` (`user_id`, `project_id`) VALUES
('2fsf204-755a-4d90-bcb9-15vdffez83327', 'ilytkqsdngr654ssfeqfe51'),
('2c40b204-755a-4d90-bcb9-15vdf4df3327', 'ilytkfqngr654ssfeqfe51'),
('2fsf204-755a-4d90-bcb9-15vdffez83327', 'ilytkfqngrotusfeqfe51'),
('2c40b2c4-755a-4d90-bcb9-155ff4df3327', 'ilytkfq45tusfef7651'),
('2c40b2c4-755a-4d90-bcb9-155ff4083327', 'ilytkfqngrotusfef7651'),
('2fsf204-755a-4d90-bcb9-15vdffez83327', 'ilytkfqngrotuihg15687651'),
('2c40b2c4-755a-4d90-bcb9-155ff4083327', 'ilytkfqngrotui31687651'),
('2c40b2c4-755a-4d90-bcb9-155ff4df3327', 'lykfjgklftylg8523164'),
('2c40b2c4-755a-4d90-bcb9-155ff4083327', 'lykfjgdsqdzlg8523164'),
('2c40b2c4-755a-4d90-bcb9-155ff4083327', 'lykfjfezfzlg8523164'),
('2fsf204-755a-4d90-bcb9-15vdffez83327', 'ilytkfqngfotuihg15687651'),
('2c40b2c4-755a-4d90-bcb9-15vdf4df3327', 'ilytkqsdngr654ssfeqfe51'),
('2c40b2c4-755a-4d90-bcb9-155ff4083327', 'ilytkqsdngr654ssfeqfe51'),
('2c40b2c4-755a-4d90-bcb9-155ff4083325', 'ilytkqsdngr654ssfeqfe51'),
('2c40b2c4-755a-4d90-bcb9-155ff4083324', 'ilytkqsdngr654ssfeqfe51');


INSERT INTO `PROJECTS_KEYWORDS` (`keyword_id`, `project_id`) VALUES
(1, 'ilytkqsdngr654ssfeqfe51'),
(2, 'ilytkfqngr654ssfeqfe51'),
(3, 'ilytkfqngrotusfeqfe51'),
(4, 'ilytkfq45tusfef7651'),
(5, 'ilytkfqngrotusfef7651'),
(6, 'ilytkfqngrotuihg15687651'),
(7, 'ilytkfqngrotui31687651'),
(1, 'lykfjgklftylg8523164'),
(2, 'lykfjgdsqdzlg8523164'),
(3, 'lykfjfezfzlg8523164'),
(4, 'ilytkfqngfotuihg15687651'),
(5, 'ilytkqsdngr654ssfeqfe51'),
(6, 'ilytkfqngrotuihg15687651'),
(7, 'ilytkqsdngr654ssfeqfe51'),
(1, 'ilytkfqngr654ssfeqfe51'),
(2, 'ilytkfqngrotusfeqfe51'),
(3, 'ilytkfq45tusfef7651'),
(4, 'ilytkfqngrotusfef7651'),
(5, 'ilytkfqngrotuihg15687651'),
(6, 'ilytkfqngrotui31687651'),
(7, 'lykfjgklftylg8523164'),
(1, 'lykfjgdsqdzlg8523164'),
(2, 'lykfjfezfzlg8523164'),
(3, 'ilytkfqngfotuihg15687651'),
(4, 'ilytkqsdngr654ssfeqfe51'),
(5, 'ilytkfqngrotuihg15687651');




INSERT INTO `PROJECTS_LANGUAGES` (`language_id`,`project_id`) VALUES
(1, 'ilytkqsdngr654ssfeqfe51'),
(2, 'ilytkfqngr654ssfeqfe51'),
(3, 'ilytkfqngrotusfeqfe51'),
(4, 'ilytkfq45tusfef7651'),
(5, 'ilytkfqngrotusfef7651'),
(1, 'ilytkfqngrotuihg15687651'),
(2, 'ilytkfqngrotui31687651'),
(3, 'lykfjgklftylg8523164'),
(4, 'lykfjgdsqdzlg8523164'),
(5, 'lykfjfezfzlg8523164'),
(1, 'ilytkfqngfotuihg15687651'),
(2, 'ilytkqsdngr654ssfeqfe51'),
(5, 'ilytkfqngrotuihg15687651');
