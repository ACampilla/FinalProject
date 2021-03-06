const Shipping = require("../Model/shippingModel");

exports.create = (req,res)=>{
    
    if(!req.body){
        res.status(400).send({ message : "Input content!"});
        return;
    }
    //new shipping
    const shipping = new Shipping({

        Shipping_ID:body.Shipping_ID,
        Shipping_Date:body.Shipping_Date,
        Shipping_Fee:body.Shipping_Fee,
        Shipping_Address:body.Shipping_Order,
        Shipping_Order:body.Shipping_Order,
        Shipping_User:body.Shipping_User

        })
        
     // save shipping in the database   
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
     // retrieve and return all shipping/ retrive and return a single shipping  
        exports.find = (req, res)=>{
        
            if(req.query.id){
                const id = req.query.id;
        
                Shipping.findById(id)
                    .then(data =>{
                        if(!data){
                            res.status(404).send({ message : "Not found shipping with id "+ id})
                        }else{
                            res.send(data)
                        }
                    })
                    .catch(err =>{
                        res.status(500).send({ message: "Error retrieving shipping with id " + id})
                    })
        
            }else{
                Shipping.find()
                    .then(shipping => {
                        res.send(shipping)
                    })
                    .catch(err => {
                        res.status(500).send({ message : err.message || "Error Occurred while retriving shipping information" })
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
                res.status(404).send({ message : `Cannot Update shipping with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update shipping information"})
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
                    message : "shipping was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete shipping with id=" + id
            });
        });
}