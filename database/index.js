const mysql = require('mysql');

const connection = mysql.createConnection({

  host: 'hratxfec.cemgwuwgjtcx.us-west-1.rds.amazonaws.com',
  user: 'root',
  password: 'Unlucky1!',
  database: 'products',
});

connection.connect();

module.exports = {connection}