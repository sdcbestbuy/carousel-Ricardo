const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Unlucky1!',
  database: 'products',
  port: 3306,
});
'aa38ugi7pcuwxd.czkwyvdb9mxc.us-east-2.rds.amazonaws.com' || 
connection.connect((err)=>{
  if (err){
    console.log('DB CONNECTION FAILED',err)
    return;
  }
  console.log('Connected to DB')
});

const seedDatabase = (reviewAverage, reviewCount, image, name, price, description, thumbnail, callback) => {
  connection.query('INSERT INTO product (customer_review_AVG, customerReviewCount, product_image, product_name, regularPrice, thumbnailImage) VALUES (?, ?, ?, ?, ?, ?)',[reviewCount, image, name, price, description, thumbnail],  (error, result) => {
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

          callback(null, result);
      }
  })
}

module.exports = {
  seedDatabase,
  getProducts
}