const express = require('express');
const connectDB = require ('./DB/connection')

const app = express();


connectDB();
app.use(express.json({ extended: false }));

app.use('/api/userModel', require ('./API/User'))
const Port = process.envPort || 7070;

app.listen(Port, ()=>console.log("Server at 7070"))