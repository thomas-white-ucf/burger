-- Write SQL queries this file that do the following:

--  Switch to or use the `burgers_db`   
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

--  Create a `burgers` table with these fields:
    --  Create new table with a primary key that auto-increments

CREATE TABLE burgers 
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);