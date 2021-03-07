let http = require('http');
let dt = require('./datemodule');
let url = require('url');
let up = require('upper-case');

http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    //res.write('Date: ' + dt.myDateTime());
    //res.write(req.url);
    let query = url.parse(req.url, true).query;
    let txt = query.year;
    res.end(txt);
}).listen(8000);