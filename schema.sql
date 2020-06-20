DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;

CREATE TABLE items (

  id INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  
  customerReviewCount INT,
  image VARCHAR(240),
  name VARCHAR(240),
  regularPrice int,
  shortDescription VARCHAR(240),
  thumbnailImage VARCHAR(240),
  customerReviewAverage int,
);

