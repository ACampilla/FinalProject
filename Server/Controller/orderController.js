
const Order = require ('../Model/ordersModel');

//create and save order


exports.create = (req,res)=>{
    
    if(!req.body){
        res.status(400).send({ message : "Input content!"});
        return;
    }

    // new order
    const order = new Order({
     
        Order_ID: body.Order_ID,
        Order_Status: body.Order_Status,
        Order_Date: body.Order_Date,
        Order_QTY: body.Order_QTY,
        Order_Price: body.Order_Price,
        Order_Users:  body.Order_Users,
        Order_Products: body.Order_Products
    })

    // save order in the database
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

// retrieve and return all order/ retrive and return a single order
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Order.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found order with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving order with id " + id})
            })

    }else{
        Order.find()
            .then(order => {
                res.send(order)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving order information" })
            })
    }

    
}

// Update 
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update order with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update order information"})
        })
}

// Delete
exports.delete = (req, res)=>{
    const id = req.params.id;

    Order.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Order was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete order with id=" + id
            });
        });
}

