const mysql = require('mysql');

const connection = mysql.createConnection({

  host: '2600:1700:1d2:3a00:253d:d1dc:600b:db3e',
  user: 'root',
  password: 'Unlucky1!',
  database: 'products',
  port: 3333,
});

connection.connect();

module.exports = {connection}