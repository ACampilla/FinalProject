const http = require('http');
const express = require("express");
const mongoose = require("mongoose");
app = express();

//set HTML to EJS
app.set("view engine","ejs");


//Created Server
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>Server</h1></body><html>");
        res.end();

    }  else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<html><body><h1>404 page not found</h1></body><html>");
         res.end();
    }
})



//connect to MONGODB







//listen to server

server.listen(8000);

console.log("listening to port 8000")