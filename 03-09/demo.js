var http = require('http')
var dt = require('./firstModule.js')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
})