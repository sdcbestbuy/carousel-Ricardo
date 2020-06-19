DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;

CREATE TABLE product (
  id int NOT NULL AUTO_INCREMENT,
  customerReviewCount INT,
  image VARCHAR(240),
  name VARCHAR(240),
  regularPrice INT,
  shortDescription VARCHAR(240),
  thumbnailImage VARCHAR(240),
  url VARCHAR(240),
);

INSERT INTO product (id, customerReviewCount, image, name, regularPrice, shortDescription, thumbnailImage, url) 
VALUES (2, "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5956/5956026_sa.jpg",
             "Lenovo - Refurbished Desktop - Intel Core i5 - 8GB Memory - 500GB Hard Drive - Black", 
             254.99,
             "RefurbishedWindows 10 Pro 64-bitTechnical details: 3rd Gen Intel&#174; Core&#8482; i5-3470 processor; 8GB memory; 500GB hard driveSpecial features: keyboard; mouse",
             "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5956/5956026_s.gif",
             "https://api.bestbuy.com/click/-/5956026/pdp");
