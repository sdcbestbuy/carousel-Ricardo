const mysql = require('mysql');

const connection = mysql.createConnection({

  host: '2600:1700:1d2:3a00:b97c:28dc:4893:7088',
  user: 'root',
  password: 'Unlucky1!',
  database: 'products',
  port: 3333,
});

connection.connect();

module.exports = {connection}