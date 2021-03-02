DROP DATABASE IF EXISTS goals_DB;
CREATE database goals_DB;

USE goals_DB;

CREATE TABLE User (
 id VARCHAR(150) PRIMARY KEY,
 name VARCHAR(150),
 email VARCHAR(150),
 password VARCHAR(150)
);

CREATE TABLE bigGoal (
  id INT auto_increment NOT NULL,
  goal_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE milestones (
  id INT AUTO_INCREMENT NOT NULL,
  milestone_num INT,
  datetime_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  current_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  title VARCHAR(100),
  goal_id INT NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY (id)
);

SELECT * FROM bigGoal;
SELECT * FROM milestones; 
