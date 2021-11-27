const Shipping = require('../Model/schema');
var User = require ('../Model/schema');

//create and save user

exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be empty!"});
        return;
    }

    // new user
    const user = new User({
     
        Acc_ID:req.body.Acc_ID,
        Email_Address:req.body.Email_Address,
        Fullname: req.body.Fullname,
        Mobile_Number: req.body.Mobile_Number,
        Password:req.body.Password,
        Delivery_Address:req.body.Delivery_Address
    })

    //new Order

    const order = new Order({
         Order_ID:body.Order_ID,
         Order_Status:body.Order_Status,
         Order_Date:body.Order_Date,
         Order_QTY: body.Order_QTY,
         Order_Price: body.Order_Price,
         Order_Users: body.Order_Users,
         Order_Products: body.Order_Products

        })

    //new products

    const products = new Products({
        Prod_ID:body.Prod_ID,
        Item:body.Item,
        Unit_Price: body.Unit_Price,
        Description:body.Description,
        Category:body.Category
    })


    //new Shipping

    const shipping = new Shipping({
        Shipping_ID:body.Shipping_ID,
        Shipping_Date:body.Shipping_Date,
        Shipping_Fee:body.Shipping_Fee,
        Shipping_Address:body.Shipping_Address,
        Shipping_Order:body.Shipping_Order,
        Shipping_User:body.Shipping_User
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        User.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        User.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    User.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}