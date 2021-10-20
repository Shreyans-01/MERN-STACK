const express = require('express');
const app  = express();

app.get("/",(req, res)=>{
    console.log("this is home page");
    res.send("this is home page, get lost")
})

app.get("/home",(req, res)=>{
    console.log("this is the REAL home page");
    res.send("this is the REAL home page")
})

app.get("/secondhome",(req, res)=>{
    console.log("NO this is the REAL home page");
    res.send("NO this is the REAL home page")
})

app.listen(8001,()=>{
    console.log("Listening");
});