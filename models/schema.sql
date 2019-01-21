DROP DATABASE IF EXISTS padrinos;
CREATE DATABASE padrinos;

USE padrinos;

CREATE TABLE kids
(
    id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  birth_date DATE NOT NULL,
  grade INT,
  kid_location VARCHAR(255),
  kid_bio VARCHAR(255) NOT NULL,
  need_sponsor BOOLEAN DEFAULT TRUE NOT NULL,
  donor_id INT,
  PRIMARY KEY
  (id)
);

CREATE TABLE donors
(
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
user_email VARCHAR(100) NOT NULL,
user_password VARCHAR(30) NOT NULL,
user_address VARCHAR(100) NOT NULL,
user_city VARCHAR(100) NOT NULL,
user_state VARCHAR(100) NOT NULL,
admin_status VARCHAR(255) DEFAULT NULL,
kid_id INT,
);

CREATE TABLE Content
(
    kid_id INT(255) NOT NULL,
    kid_notes VARCHAR(255),
    kid_pics VARCHAR(255),
    PRIMARY KEY 
    (kid_id)
)

