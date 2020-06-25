"use strict";

var express = require('express');

var app = express();

var cors = require('cors');

var path = require('path');

var bodyParser = require('body-parser');

var queries = require('../database/queries');

var data = require('../testData/bestBuyScrape');

app.use(cors());
app.use(express["static"](path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/products', function (req, res) {
  queries.getProducts(function (error, result) {
    if (error) {
      console.error('error at endpoint with getting products', error);
    } else {
      res.send(result);
    }
  });
});
var port = 3333;
app.listen(port, function () {
  console.log("Listening on port ".concat(port));
}); // only used when seeding the database
// app.get('/seed', (request, response) => {
//     data.data.forEach((item) => {
//         console.log(item)
//         queries.seedDatabase(item.customerReviewCount, item.image, item.name, item.regularPrice, item.thumbnailImage, (error, result) => {
//             if (error) {
//                 console.error(error);
//             } else {
//                 // console.log('database seeded');
//                 response.end();
//             }
//         })
//     })
// })
