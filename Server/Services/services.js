exports.homeRoutes = (req,res) => {
    res.render('index');
}
exports.cart = (req,res)=>{
    res.render('cart');
}


exports.Food = (req,res)=>{
    res.render('Food');
}

exports.login = (req,res)=>{
    res.render('login');
}

exports.merch = (req,res)=>{
    res.render('merch');
}

exports.skincare = (req,res)=>{
    res.render('skincare');
}
exports.tribe = (req,res)=>{
    res.render('tribe');
}
