const http = require("node:http");

let server = http.createServer(function(request, response){
    console.log("request recieved on localhost:2525", request.url);
    response.writeHead(200, {"ContentType" : "text/html", "author" : "vijay"});
    response.write("<h1>hello from http server</h1>");
    response.end();
});

server.listen(2525, "127.0.0.1", function(error){
    if(error){
        console.log("Error ", error)
    }else{
        console.log("http server is now live on localhost : 2525");
    }
})