// import Node.js core module
var http = require("http");

// create Server
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    /*
    Echo Test
    response.write("Hello");
    response.end("World");
    */

    var body = 



})

// listen for any incoming requests
server.listen(8080, "127.0.0.1");
console.log("Server is running!");