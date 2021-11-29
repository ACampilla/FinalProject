const  mongoose = require ('mongoose');


var orders = new mongoose.Schema({
    Order_ID: {
        type: String,
        
    },
    Order_Status: {
        type: String,
       
    },
    Order_Date: {
        type: Date,
        
    },
    Order_QTY: {
        type: Number,
        
    },
    Order_Price: {
        type: Number,
       
    },
    Order_Users:{
        Acc_ID:{
            type: String,
            
        }
    },
    Order_Products: {
        Prod_ID:{
            type: String,
            
        },
        Item: {
            type: String,
            
        },
        Unit_Price: {
            type: Number,
            
        }
    }
    
});


const Orders = mongoose.model('Orders', orders);
module.exports = Orders;


