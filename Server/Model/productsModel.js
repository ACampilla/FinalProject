const  mongoose = require ('mongoose');

var products = new mongoose.Schema({
    Prod_ID: {
        type: String,
        required: true
    },
    Item: {
        type: String,
        required: true
    },
    Unit_Price: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
});

const Products = mongoose.model('Products', products);
module.exports = Products;