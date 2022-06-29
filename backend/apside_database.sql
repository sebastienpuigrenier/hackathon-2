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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `USERS_PROJECTS` (
  `user_id` VARCHAR(255) NOT NULL,
  `project_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`, `project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PROJECTS_KEYWORDS` (
  `keyword_id` INT NOT NULL,
  `project_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`keyword_id`, `project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PROJECTS_LANGUAGES` (
  `language_id` INT NOT NULL,
  `project_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`language_id`, `project_id`)
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
('2c40b2c4-755a-4d90-bcb9-155ff4083327', 'John', 'Doe', 'johndoe@apside.com', '$argon2id$v=19$m=65536,t=5,p=1$2IONFl8xZzDfBi0Bb8yduA$7DtJKZwDp3bN0Q0L+fbEeU1Mta62bTs+JKiJYQbnuM8', 'dev', 'Apside Paris'),
('2c40b2c4-755a-4d90-bcb9-155ff4083325', 'Susana', 'Malone', 'susanamalone@apside.com', '$argon2id$v=19$m=65536,t=5,p=1$2IONFl8xZzDfBi0Bb8yduA$7DtJKZwDp3bN0Q0L+fbEeU1Mta62bTs+JKiJYQbnuM8', 'Product Owner', 'Apside New York'),
('2c40b2c4-755a-4d90-bcb9-155ff4083324', 'Eugene', 'Dostie', 'eugenedostie@apside.com', '$argon2id$v=19$m=65536,t=5,p=1$2IONFl8xZzDfBi0Bb8yduA$7DtJKZwDp3bN0Q0L+fbEeU1Mta62bTs+JKiJYQbnuM8', 'Customer Manager', 'Apside Berlin');




INSERT INTO `PROJECTS` (`id`,`name`, `description`,`customer`, `status`, `creation_date`, `update_to_project_date`, `update_to_finish_date`,
 `belonging_site`, `nb_likes`, `user_id`) VALUES
 ('ilytkfqngrotuihg15687651','DEPARTMENT REORGANISATION','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'APSIDE', 'PROJECT', '2020-03-01','2021-02-15', '0000/00/00', 'STRASBOURG', 0, '2c40b2c4-755a-4d90-bcb9-155ff4083327'),
('ilytkfqngrotui31687651','INTEGRATION OF NEW COLLABORATORS','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'APSIDE', 'PROJECT', '2019-12-12', '2020-02-12','0000/00/00', 'STRASBOURG', 8, '2c40b2c4-755a-4d90-bcb9-155ff4083327'),
('lykfjgklftylg8523164','COMPUTERISED DOCUMENT MANAGEMENT','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'APSIDE', 'FINISHED','2018-09-11','2019-02-11','2019-09-20', 'ANGERS', 26, '2c40b2c4-755a-4d90-bcb9-155ff4083325');


INSERT INTO `KEYWORDS` (`id`, `keyword`) VALUES
(1, "management"),
(2, "virtual reality"),
(3, "mobile"),
(4, "desktop");

INSERT INTO `LANGUAGES` (`id`, `language`) VALUES
(1, "javascript"),
(2, "php"),
(3, "react"),
(4, "ruby");


INSERT INTO `COMMENTS` (`id`, `comment`, `user_id`, `project_id`) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', '2c40b2c4-755a-4d90-bcb9-155ff4083324', 'ilytkfqngrotuihg15687651'),
(2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', '2c40b2c4-755a-4d90-bcb9-155ff4083324', 'lykfjgklftylg8523164'),
(3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', '2c40b2c4-755a-4d90-bcb9-155ff4083327', 'ilytkfqngrotuihg15687651');


INSERT INTO `USERS_PROJECTS` (`user_id`, `project_id`) VALUES
('2c40b2c4-755a-4d90-bcb9-155ff4083324', 'ilytkfqngrotui31687651'),
('2c40b2c4-755a-4d90-bcb9-155ff4083327', 'ilytkfqngrotuihg15687651'),
('2c40b2c4-755a-4d90-bcb9-155ff4083325', 'lykfjgklftylg8523164'),
('2c40b2c4-755a-4d90-bcb9-155ff4083324', 'ilytkfqngrotuihg15687651');

INSERT INTO `PROJECTS_KEYWORDS` (`keyword_id`, `project_id`) VALUES
(1, 'ilytkfqngrotuihg15687651'),
(2, 'ilytkfqngrotuihg15687651'),
(3, 'ilytkfqngrotui31687651'),
(2, 'ilytkfqngrotui31687651'),
(4, 'lykfjgklftylg8523164'),
(2, 'lykfjgklftylg8523164');



INSERT INTO `PROJECTS_LANGUAGES` (`language_id`,`project_id`) VALUES (1,'ilytkfqngrotui31687651'), 
(1, 'lykfjgklftylg8523164'), (2, 'lykfjgklftylg8523164'), (3,'ilytkfqngrotuihg15687651'), (1,'ilytkfqngrotuihg15687651');
