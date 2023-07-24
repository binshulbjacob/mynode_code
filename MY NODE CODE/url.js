var url = require("url");
var http = require("http");
var fs =  require("fs");

http.createServer(function(req,res){

var parsed = url.parse(req.url);
fs.readFile("."+parsed.pathname,function(err,data){

    if(err){
   res.writeHead(404,{'content-type':'text/html'});
   return res.end("error page not found");
}

    res.writeHead(200,{'content-type':'text/html'});
    res.write(data);
   return res.end();
});

}).listen(8095);
