const Products = require("../Model/productsModel");

exports.create = (req,res)=>{
    
    if(!req.body){
        res.status(400).send({ message : "Input content!"});
        return;
    }


const order = new Order({

Prod_ID:body.Prod_ID,
Unit_Price:body.Unit_Price,
Description: body.Description, 
Category:body.Category

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
            .then(products => {
                res.send(products)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

