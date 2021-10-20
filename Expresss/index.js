const express = require("express")
const app = express()
const path = require("path")
const port = 8000

console.log(__dirname)
console.log(path.join(__dirname,"../"))
const staticpath = path.join(__dirname,"/public")

app.use(express.static(staticpath))

app.get("/home", (req, res)=>{
    console.log("This is homepage")
    res.send("<h1>Hello, this is our homepage</h1>")
})


app.listen(port, ()=>{
    console.log(`Server Listening on ${port}`)
})