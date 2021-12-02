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
        
        
        products
        .save(products)
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
        
                Products.findById(id)
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
                Products.find()
                    .then(user => {
                        res.send(user)
                    })
                    .catch(err => {
                        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
                    })
            }
        
            
        }
        
        