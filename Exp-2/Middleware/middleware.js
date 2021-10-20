const express=require("express")
var app = express()
const cookieParser=require("cookie-parser")
//builtin level middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//third party
app.use(cookieParser())
//application level middleware
app.use(appLevelMiddlewr)
function appLevelMiddlewr(req,res,next) {
console.log("Inside Application level middleware!")
next()
}
//router level middleware
const router=express.Router()
router.use((req,res,next)=>{
console.log("inside router level middleware")
next()
})
router.get("/home",(req,res)=>{
res.send("Reached home!")
})
app.use("/",router)
// error handling middleware
app.use(function (err, req, res, next) {
console.error(err.stack)
res.status(500).send('Something broke!')
})
app.listen(3000,()=>{
console.log("Running on port 3000")
})