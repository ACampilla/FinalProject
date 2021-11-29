const  mongoose = require ('mongoose');


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


const Orders = mongoose.model('Orders', orders);
module.exports = Orders;


