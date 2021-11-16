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



//create records for product details
app.get("/insert-Product_Details", (req,res)=>{
    let newRow ={Item:"LUMINOUS-Mini Album Vol.1[YOUTH]", Unit_Price: 14.68, 
    Description:"OUT SLEEVE:152*120mm,PHOTO BOOK:150*210mm, CONCEPT BOOKLET&POST CARD:151*210mm", Category:"ALBUMS"};
    let sql = "INSERT INTO Product_Details SET ?";
    con.query(sql, newRow, (err, result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
//update
app.get("/update-Order_Details", (req,res)=>{
    let sql = "UPDATE Order_Details SET Ord_ID=2 WHERE Ord_id=3";
    con.query(sql, (err, result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
//create records for user account
app.get("/insert-User_Accounts", (req,res)=>{
    let newRow ={Email_Address:"ellahnicole.chua.iics@ust.edu.ph", Fullname:"Ellah Nicole Chua", 
    Mobile_Number:"09365423110", password:"ellahnicole.chua", Delivery_Address:"6250 Malapit St. Olympia Makati City"};
    let sql = "INSERT INTO User_Account SET ?";
    con.query(sql, newRow, (err, result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
//create records for order details

app.get("/insert-Order_Details", (req,res)=>{
    let newRow ={Acc_ID:1, Prod_ID:2, 
    Order_Status:"Completed", Order_Date:'2021-11-02', Order_price:14.68, Order_QTY:1};
    let sql = "INSERT INTO Order_Details SET ?";
    con.query(sql, newRow, (err, result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
//create records for shipping

app.get("/insert-Shipping_HD", (req,res)=>{
    let newRow ={Acc_ID:1, Ord_ID:1, Shipping_Address:"6250 Malapit St. Olympia Makati City",
     Shipping_Date:'2021-11-06', Shipping_Fee:20.00};
    let sql = "INSERT INTO Shipping_HD SET ?";
    con.query(sql, newRow, (err, result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});

//display tables
app.get("/order_Recent", (req,res)=>{
    
    let sql = 
   
    "SELECT Order_Details.Order_Date,Order_Details.Ord_ID,Order_Details.Order_Status"+
    " FROM Order_Details "+
    "WHERE Order_Details.Order_Status='Pending'";
   
    con.query(sql, (err, result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
app.get("/order_History", (req,res)=>{
    
    let sql = 
    
    "SELECT Order_Details.Order_Date,Order_Details.Ord_ID,Order_Details.Order_QTY, Order_Details.Order_Price,Order_Details.Order_Status"+
    " FROM Order_Details "+
    "Where Order_Details.Order_Status='Completed'";
    
    con.query(sql, (err, result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
app.get("/Shipping_History", (req,res)=>{
    
    let sql = 
    
    "SELECT Shipping_HD.Shipping_Date,Shipping_HD.Shipping_ID,Shipping_HD.Shipping_Fee,Order_Details.Order_QTY,Order_Details.Order_Status"+
    " FROM Shipping_HD "+
    " INNER JOIN Order_Details"+
   " ON Shipping_HD.Ord_ID=Order_Details.Ord_ID";
    
    con.query(sql, (err, result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});
//THE DISPLAY TABLES CAN ONLY BE SEEN IN POSTMAN NOT YET A SAVED PROCEDURE




//test the app object by listening to port
app.listen(PORT,() =>{
    console.log("listening to port"+PORT+"...")
});