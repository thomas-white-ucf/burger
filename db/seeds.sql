USE burgers_db;

INSERT INTO burgers (burger_name, devoured) VALUES ('RARE Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('MEDIUM Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('well done please cheeseBurger', true);

SELECT * FROM `burgers_db`.`burgers` LIMIT 1000;