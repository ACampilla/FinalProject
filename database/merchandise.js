//connect to node merchandise
const express = require('express');
const mysql =require('mysql2');
const PORT = process.env.PORT||3000;
const app = express();//app object
//connect the node app with mysql server
const con =mysql.createConnection({
    host:"localhost",
    port:3306,
    user: "root",
    password:"ellahnicole.chua1125",
    database:"merchproduct",
});
con.connect((err)=>{
    if (!err){
        console.log("connected to mysql server  at port 3306..");
    }
});
//create a databse
app.get("/create-merchproductdb",(req,res)=>{
    let sql = "CREATE DATABASE merchproduct";
    con.query(sql,(err,result)=>{
        if(!err){
            res.send("successfully created the merchproduct database");
        }else{
            res.send(err);
        }
    });
});
//create a table user account, product, orderdetails
app.get("/create-table-User_Account",(req,res)=>{
    let sql = "CREATE TABLE User_Account(Acc_ID int NOT NULL AUTO_INCREMENT, Email_Address varchar(60) NOT NULL UNIQUE,Fullname varchar(90),Mobile_Number varchar(12)UNIQUE, password varchar(60) NOT NULL,Delivery_Address varchar(90) NOT NULL, PRIMARY KEY(Acc_ID))";
    con.query(sql,(err,result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
app.get("/create-table-Product_Details",(req,res)=>{
    let sql = "CREATE TABLE Product_Details(Prod_ID int NOT NULL  AUTO_INCREMENT, Item varchar(50) NOT NULL, Unit_Price decimal(10,2) NOT NULL, Description varchar(90) NOT NULL, Category varchar(30), PRIMARY KEY(Prod_ID))";
    con.query(sql,(err,result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
app.get("/create-table-Order_Details",(req,res)=>{
    let sql = "CREATE TABLE Order_Details(Ord_ID int NOT NULL  AUTO_INCREMENT, Acc_ID int NOT NULL, Prod_ID int NOT NULL, Order_Status varchar(20), Order_Date DATE NOT NULL, Order_Price decimal(10,4) NOT NULL, Order_QTY int NOT NULL,  PRIMARY KEY(Ord_ID), FOREIGN KEY (Acc_ID) REFERENCES user_account(Acc_ID), FOREIGN KEY (Prod_ID) REFERENCES product_details(Prod_ID))";
    con.query(sql,(err,result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
app.get("/create-table-Shipping_HD",(req,res)=>{
    let sql = "CREATE TABLE Shipping_HD(Shipping_ID int NOT NULL  AUTO_INCREMENT, Ord_ID int NOT NULL, Acc_ID int NOT NULL,  Shipping_Address varchar(100), Shipping_Date DATE NOT NULL, Shipping_Fee decimal(10,4) NOT NULL, PRIMARY KEY(Shipping_ID), FOREIGN KEY (Acc_ID) REFERENCES user_account(Acc_ID), FOREIGN KEY (Ord_ID) REFERENCES order_details(Ord_ID))";
    con.query(sql,(err,result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});


//perform CRUD operations
//create
app.get("/insert-Product_Details", (req,res)=>{
    let newRow ={Item:"TRI.BE BOTTLE", Unit_Price: 139.99, Description:"body-stainless steel, packing-silicone rubber, size-350ml", Category:"K-MERCH"};
    let sql = "INSERT INTO Product_Details SET ?";
    con.query(sql, newRow, (err, result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
//read
app.get("/read-Product_Detals", (req,res)=>{
    let sql = "SELECT * FROM  Product_Details";
    con.query(sql, (err, result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
//update
app.get("/update-Product_Details", (req,res)=>{
    let sql = "UPDATE Product_Details SET Prod_ID=1 WHERE Prod_id=3";
    con.query(sql, (err, result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
//Delete
app.get("/delete-Product_Details", (req,res)=>{
    let sql = "DELETE FROM Product_Details WHERE Prod_id=1";
    con.query(sql, (err, result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
app.get("/delete-Product_Details1", (req,res)=>{
    let sql = "DELETE FROM Product_Details WHERE Prod_id=2";
    con.query(sql, (err, result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});

//test the app object by listening to port
app.listen(PORT,() =>{
    console.log("listening to port"+PORT+"...")
});