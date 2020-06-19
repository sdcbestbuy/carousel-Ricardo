const express = require('express');
const app = express();
const port = 3333;
const path = require('path');
const bodyParser = require('body-parser');
const queries = require('../database/queries');
const data = require('../bestBuyScrape');

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let reviewCount = data.data.customerReviewCount;
let image = data.data.image;
let name = data.data.name;
let price = data.data.regularPrice;
let description = data.data.shortDescription;
let thumbnail = data.data.thumbnailImage;

app.get('/seed', (request, response) => {

    data.data.forEach((item) => {
        console.log(item)
        queries.seedDatabase(item.customerReviewCount, item.image, item.name, item.regularPrice, item.thumbnailImage, (error, result) => {
    
            if (error) {
                console.error(error);
            } else {
                console.log('database seeded');
            }
        })
    })
})
app.listen(port, () => {

    console.log(`Listening on port ${port}`);
})
