const Shipping = require("../Model/shippingModel");

exports.create = (req,res)=>{
    
    if(!req.body){
        res.status(400).send({ message : "Input content!"});
        return;
    }

    const shipping = new Shipping({

        Shipping_ID:body.Shipping_ID,
        Shipping_Date:body.Shipping_Date,
        Shipping_Fee:body.Shipping_Fee,
        Shipping_Address:body.Shipping_Order,
        Shipping_Order:body.Shipping_Order,
        Shipping_User:body.Shipping_User

        })
        
        
        shipping
        .save(shipping)
        .then(data => {
            
        
          res.redirect('/')
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });
        
        }
        
        exports.find = (req, res)=>{
        
            if(req.query.id){
                const id = req.query.id;
        
                Shipping.findById(id)
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
                Shipping.find()
                    .then(shipping => {
                        res.send(shipping)
                    })
                    .catch(err => {
                        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
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
    Shipping.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
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

// Delete
exports.delete = (req, res)=>{
    const id = req.params.id;

    Shipping.findByIdAndDelete(id)
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