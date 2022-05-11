// import Node.js core module
var http = require("http");

// Fileupload
var formidable = require("formidable");
var fs = require("fs");

// create Server
var server = http.createServer(function (request, response) {
    if (request.url == "/fileupload") {
        var form = new formadible.IncomingForm();
        form.parse(request, function (error, fields, files) {
            var oldpath = files.file.parth;
            var newpath = _dirname + "/files" + files.file.name;
            fs.rename(oldpath, newpath, function (error) {
                if (error)
                    throw error;
                response.write("File uploaded and moved");
                response.end();
            })
        })
    }
    else {
        response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
        
        var body = 
            "<form action= ''fileupload method='post' enctype= 'multipart/form-data'>"+
            "<input type= 'file' name= 'file'><br>"+
            "<input type= 'submit'>"+
            "</form";
        var htmlResponse = getHTMLStruct ("NameHTMLDatei", body);
        response.end(htmlResponse);

    }

    


 /*
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    Echo Test
    response.write("Hello");
    response.end("World");
    */
})

// listen for any incoming requests
server.listen(8080, "127.0.0.1");
console.log("Server is running!");