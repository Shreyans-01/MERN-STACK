const express = require('express');
const app  = express();

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.get("/",(req, res)=>{
    console.log("this is home page");
    res.send("this is home page")
})

app.get("/home",(req, res)=>{
    console.log("this is the REAL home page");
    res.send("this is the REAL home page");
})

app.get("/secondhome",(req, res)=>{
    console.log("NO this is the REAL home page");
    res.send("NO this is the REAL home page");
})

app.listen(8001,()=>{
    console.log("Listening");
});