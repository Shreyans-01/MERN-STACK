var http = require('http');

http.createServer(function (req, res){
    res.end('hello mern');
}).listen(8000);

console.log("Running")