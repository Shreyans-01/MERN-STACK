const express = require('express');
const app  = express();
var router = express.Router()

router.get("/",function(req,res,next){
    console.log("this is home page");
    res.send("this is home page");
})

router.get("/home",function(req, res){
    console.log("this is the REAL home page");
    res.send("this is the REAL home page")
})

router.get("/secondhome",function(req, res){
    console.log("NO this is the REAL home page");
    res.send("NO this is the REAL home page")
})

app.use('/',router)