var http = require('http');
var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;"});
    res.write("Server Open");
    res.end();
});
server.listen(3000);