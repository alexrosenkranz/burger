CREATE DATABASE burgers_db;
USE burgers_db;

/*burgers
	id, burger_name, devoured (true or false, 1 or 0)*/
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean NOT NULL default 0,
  date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
