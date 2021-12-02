
const Order = require ('../Model/ordersModel');

//create and save order


exports.create = (req,res)=>{
    
    if(!req.body){
        res.status(400).send({ message : "Input content!"});
        return;
    }

    // new user
    const order = new Order({
     
        Order_ID: body.Order_ID,
        Order_Status: body.Order_Status,
        Order_Date: body.Order_Date,
        Order_QTY: body.Order_QTY,
        Order_Price: body.Order.Order_Price,
        Order_Users:  body.Order_Users,
        Order_Products: body.Order_Products
    })

    // save user in the database
    order
        .save(order)
        .then(data => {
            

          res.redirect('/')
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

        Order.findById(id)
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
        Order.find()
            .then(order => {
                res.send(order)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

