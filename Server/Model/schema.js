const  mongoose = require ('mongoose');

var user = new mongoose.Schema({
    Acc_ID:{
        type: String,
        required:true
    },
    Email_Address:{
        type: String,
        required:true
    },
    Fullname: {
        type: String,
        required:true
    },
    Mobile_Number:{
        type: Number,
        required:true
    },
    Password:{
        type: String,
        required:true
    },
    Delivery_Address:{
        type: String,
        required:true
    }
});

var orders = new mongoose.Schema({
    Order_ID: {
        type: String,
        required: true
    },
    Order_Status: {
        type: String,
        required: true
    },
    Order_Date: {
        type: Date,
        required: true
    },
    Order_QTY: {
        type: Number,
        required: true
    },
    Order_Price: {
        type: Number,
        required: true
    },
    Order_Users:{
        Acc_ID:{
            type: String,
            required: true
        }
    },
    Order_Products: {
        Prod_ID:{
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
        }
    }
    
});

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

const shipping = new mongoose.Schema({
    Shipping_ID: {
        type: String,
        required: true
    },
    Shipping_Date: {
        type: Date,
        required: true
    },
    Shipping_Fee: {
        type: Number,
        required: true
    },
    Shipping_Address: {
        type: String,
        required: true
    },
    Shipping_Order: {
        Order_ID: {
            type: String,
            required: true
        },
        Order_Status: {
            type: String,
            required: true
        },
        Order_Price: {
            type: Number,
            required: true
        }
    },
    Shipping_User: {
        Acc_ID: {
            type: String,
            required: true
        },
        Fullname: {
            type: String,
            required: true
        },
        Mobile_Number: {
            type: Number,
            required: true
        },
        Delivery_Address: {
            type: String,
            required: true
        }
    }
});


const User = mongoose.model('User', user);
module.exports = User;

const Orders = mongoose.model('Orders', orders);
module.exports = Orders;

const Products = mongoose.model('Products', products);
module.exports = Products;

const Shipping = mongoose.model('Shipping', shipping);
module.exports = Shipping;
