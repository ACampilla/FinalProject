const mongoose = require('mongoose');

const URI ="mongodb+srv://adrian29:1234@appdev.pz0rp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () =>{
   await mongoose.connect(URI, {
       useUnifiedTopology: true,
       useNewUrlParser: true
    });
   console.log('db connected..')
}

module.exports = connectDB;