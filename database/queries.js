import connection from './index';
import data from '../bestBuyScrape';

console.log(data);
let reviewCount = data.customerReviewCountl;
let image = data.image;
let name = data.name;
let price = data.regularPrice;
let description = data.shortDescription;
let thumbnail = data.thumbnailImage;


const seedDatabase = (name, price, description, image, thumbnail, reviewCount) => {

    connection.query('INSERT INTO product VALUES (?, ?, ?, ?, ?, ?)')
}

data.forEach( item => {

    seedDatabase(name, price, description, image, thumbnail, reviewCount);
})


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