const express = require('express');
const app = express();
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
    changeOrigin: true,
});

const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');
const queries = require('../database/queries');
const data = require('../bestBuyScrape');

app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/products', (request, response) => {

    queries.getProducts((error, result) => {

        if (error) {

            console.error('error at endpoint with getting products', error);
        } else {
            console.log('here is your return result', result);
            response.send(result);
        }
    })
})

const port = 3333;
app.listen(port, () => {

    console.log(`Listening on port ${port}`);
})

// only used when seeding the database
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