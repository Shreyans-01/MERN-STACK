var fs = require('fs')
var http = require('http')
console.log("Program started")

http.createServer(function(req, res){
    fs.readFile("input.txt", function(err, data){
        if(err)return
        res.write(data)
        res.end()
        // console.error(err);
        // console.log(data.toString())
    
    })
}).listen(8000);




console.log('program ended')