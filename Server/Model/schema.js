const  mongoose = require ('mongoose');

var user = new mongoose.Schema({
    Acc_ID:{
        type: String,
        
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



const User = mongoose.model('User', user);
module.exports = User;


