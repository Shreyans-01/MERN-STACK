var fs = require('fs')
var http = require('http')
console.log("Program started")

http.createServer(function(req, res){
    fs.readFile("demo.html", function(err, data){
        if(err)return
        res.write(data)
        res.end()
    
    })
}).listen(8000);