const express = require("express")
const app = express()
const port = 8000

app.get("/", (req, res)=>{
    console.log("This is homepage")
    res.send("<h1>Hello, this is our homepage</h1>")
})

app.get("/aboutus", (req, res)=>{
    console.log("This is aboutus")
    res.send("<h1>Hello, this is our aboutus</h1>")
})

app.get("/contact", (req, res)=>{
    console.log("This is contact")
    res.send("<h1>Hello, this is our contact</h1>")
})

app.listen(8000, ()=>{
    console.log(`Server Listening on ${port}`)
})