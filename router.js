var express = require("express");

var route = express.Router();



route.get("/", home.ejs);



module.export = route;