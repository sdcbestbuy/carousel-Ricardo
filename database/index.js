const mysql = require('mysql');

const connection = mysql.createConnection({

    host: 'localhost',
    name: 'root',
    password: 'Unlucky1!',
    database: 'products'
})

connection.connect();

module.exports = {
    connection
}