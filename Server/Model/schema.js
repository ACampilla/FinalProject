const  mongoose = require ('mongoose');

var user = new mongoose.Schema({
    Acc_ID:{
        type: String,
        
    },
    Email_Address:{
        type: String,
        require: true,
        unique: true
        
    },
    Fullname: {
        type: String,
        require: true
    },
    Mobile_Number:{
        type: Number,
        require: true,
        unique: true
    },
    Password:{
        type: String,
        require: true
    },
    Delivery_Address:{
        type: String,
        require: true
    }
});



const User = mongoose.model('User', user);
module.exports = User;


