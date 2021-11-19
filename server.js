const express = require('express');
const connectDB = require ('./DB/connection')

const app = express();


connectDB();
const Port = process.envPort || 7070;

app.listen(Port, ()=>console.log("Server at 3000"))