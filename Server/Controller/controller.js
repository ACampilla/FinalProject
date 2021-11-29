
const User = require ('../Model/schema');

//create and save user

exports.create = (req,res)=>{
    
    if(!req.body){
        res.status(400).send({ message : "Input content!"});
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

    // save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data)

          res.redirect('/home.html')
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

