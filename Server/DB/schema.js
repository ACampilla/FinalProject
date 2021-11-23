const mongoose = ("mongoose");

var Users = new.mongoose.Schema({
    Acc_ID:String,
    Email_Address: String,
    Fullname: String,
    Mobile_Number: Number,
    Password:String,
    Delivery_Address:String

},{versionKey:false});

var Orders = new mongoose.Schema({
    Ord_ID:String,
    Order_Status: String,
    Order_Date: Date,
    Order_QTY: Number,
    Order_Price:Number,
    Order_users:[{
        Acc_ID:String
    }],
    Order_products:[{
        Prod_ID:String,
        Item:String,
        Unit_Price:Number
    }]

},{versionKey: false});

var Products = new mongoose.Schema({
    Prod_ID:String,
    Item:String,
    Unit_Price:Number,
    Description:String,
    Category:String

    },{versionKey: false});

    const Shipping = new mongoose.Schema({
        Shipping_ID:String,
        Shipping_Date:Date,
        Shipping_Fee:Number,
        Shipping_Address:String,
        Shipping_Order:[{
            Order_ID:String,
            Order_Status: String,
            Order_Price:Number
        }],
        Shipping_User:[{
            Acc_ID:String,
            Fullname: String,
            Mobile_Number: Number,
            Delivery_Address:String
        }]

        },{versionKey: false}); 


const user = mongoose.model('Users',Users);
const order = mongoose.model('Orders',Orders);
const product = mongoose.model('Products',Products);
const shipping = mongoose.model('shipping',Shipping);

module.exports =  user;
module.exports =  order;
module.exports =  product;
module.exports =  shipping;
