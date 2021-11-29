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

const Shipping = mongoose.model('Shipping', shipping);
module.exports = Shipping; 
