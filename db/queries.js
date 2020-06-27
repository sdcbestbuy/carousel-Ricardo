const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME||'localhost',
  user: process.env.RDS_USERNAME||'root',
  password: process.env.RDS_PASSWORD||'Unlucky1!',
  database: process.env.RDS_DB_NAME||'products',
  port: process.env.RDS_PORT || 3306,
});

connection.connect((err)=>{
  if (err){
    console.log('DB CONNECTION FAILED',err)
    return;
  }
  console.log('Connected to DB')
});

//to do sanitize queries

const seedDatabase = (reviewAverage, reviewCount, image, name, price, description, thumbnail, callback) => {
  connection.query('INSERT INTO product (customer_review_AVG, customerReviewCount, image, name, regularPrice, thumbnailImage) VALUES (?, ?, ?, ?, ?, ?)',[reviewCount, image, name, price, description, thumbnail],  (error, result) => {
      if (error) {
          console.error('error with query', error);
          callback(error, null);
      } else {
          console.log('query successful')
          callback(null, result);
      }
  })
}

const getProducts = (callback) => {
  connection.query('SELECT * FROM product', (error, result) => {
      if (error) {
          callback(error, null);
          console.error('error getting products at query level', error);
      } else {
          console.log(result)
          callback(null, result);
      }
  })
}

module.exports = {
  seedDatabase,
  getProducts
}