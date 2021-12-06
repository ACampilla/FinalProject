const Products = require("../Model/productsModel");

exports.create = (req,res)=>{
    
    if(!req.body){
        res.status(400).send({ message : "Input content!"});
        return;
    }

//new products
const products = new Products({

Prod_ID:body.Prod_ID,
Unit_Price:body.Unit_Price,
Description: body.Description, 
Category:body.Category

})

// save products in the database
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

// retrieve and return all products/ retrive and return a single products
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Products.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found product with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving product with id " + id})
            })

    }else{
        Products.find()
            .then(products => {
                res.send(products)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving product information" })
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
    Products.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update product with ${id}. Maybe user not found!`})
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

    Products.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "order was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete order with id=" + id
            });
        });
}