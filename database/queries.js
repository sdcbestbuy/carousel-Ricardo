// import connection from './index';
const {connection} = require('./index');

const seedDatabase = (reviewCount, image, name, price, description, thumbnail, callback) => {

    connection.query('INSERT INTO items (customerReviewCount, image, name, regularPrice, thumbnailImage) VALUES (?, ?, ?, ?, ?)',[reviewCount, image, name, price, description, thumbnail],  (error, result) => {

        if (error) {
            console.error('error with query', error);
            // callback(error, null);
        } else {
            console.log('query successful')
            // callback(null, result);
        }
    })
}

const getProducts = (callback) => {

    connection.query('SELECT * FROM items', (error, result) => {

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

// {
//     "customerReviewAverage": 1,
//     "customerReviewCount": 2,
//     "description": null,
//     "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5956/5956026_sa.jpg",
//     "name": "Lenovo - Refurbished Desktop - Intel Core i5 - 8GB Memory - 500GB Hard Drive - Black",
//     "regularPrice": 254.99,
//     "shortDescription": "RefurbishedWindows 10 Pro 64-bitTechnical details: 3rd Gen Intel&#174; Core&#8482; i5-3470 processor; 8GB memory; 500GB hard driveSpecial features: keyboard; mouse",
//     "thumbnailImage": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5956/5956026_s.gif",
//     "url": "https://api.bestbuy.com/click/-/5956026/pdp"
// }