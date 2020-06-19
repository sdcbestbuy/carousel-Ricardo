const mysql = require('mysql');

const connection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: 'Unlucky1!',
  database: 'products'
});

connection.connect();

module.exports = {connection}