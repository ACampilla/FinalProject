const express = require('express');
const connectDB = require ('./Server/DB/connection')
const path = require('path');
const bodyparser = require("body-parser");


const app = express();


//connect to MongoDB
connectDB();

app.use(express.json({ extended: false }));

const Port = process.envPort || 7070;
app.use(express.static(__dirname + "/public"));
//
app.get('/',(req,res)=>{
    res.render('index.html');
})

//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine", "html");
app.set("views",path.resolve(__dirname, "Public"));

//load asset
app.use('css',express.static(path.resolve(__dirname,"Public/css")));
app.use('IMG',express.static(path.resolve(__dirname,"Public")));

//load routers

app.use('/', require('./Server/Route/router'));

app.listen(Port, ()=>console.log("Server at 7070"))