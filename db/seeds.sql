USE burgers_db;

INSERT INTO burgers (burger_name, devoured) VALUES ('RARE Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('MEDIUM Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('well done please cheeseBurger', false);

SELECT * FROM `burgers_db`.`burgers` LIMIT 1000;