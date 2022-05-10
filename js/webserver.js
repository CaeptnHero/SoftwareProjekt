var http = require ("http");
http.createServer(function(request, response){
    response.write.Head(200, {"content-type" : "text/html; charset=utf-8"});

    response.write("Hello")
    response.end("World");
}).listen(8080, "127.0.0.1");
console.log("Server is running!");