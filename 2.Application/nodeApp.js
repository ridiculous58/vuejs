
var http = require('http');
var fs = require('fs')

var server = http.createServer(function(req,res){
    if(req.url == "/data.json"){
        fs.readFile('data.json',function(err,data){
            res.write(data);
            res.end();
        })        
    }
    if(req.url == "/app.js"){
        fs.readFile('app.js',function(err,data){
            res.write(data);
            res.end();
        })
    }
    if(req.url == "/app.css"){
        fs.readFile('app.css',function(err,data){
            res.write(data);
            res.end();
        })
    }
    if(req.url == "/"){
        fs.readFile('index.html',function(err,data){
            res.write(data);
            res.end();
        })
    }

});

server.listen(8000);

