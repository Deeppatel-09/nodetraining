const http = require("http");
const fs = require("fs");

let homepage = fs.readFileSync("index.html","utf-8");
let server = http.createServer(function(req, res){
   if(req.url === "/favicon.ico"){
    res.write("");
    res.end();
   }else if(req.url === "/"){
    res.writeHead(200, {"ContentType":"text/html"});
    res.write(homepage);
    res.end();
   }else{
        fs.readFile("."+req.url, "utf-8", function(err, data){
            if(err){
                res.writeHead(404,{"ContentType":"text/plain"});
                res.write("bad request");
                res.end();
            }else{
                res.writeHead(200,{"ContentType":"text/html"});
                res.write(data);
                res.end();
            }
        })
   }
});

let config = {
    port : 4000,
    host : "localhost"
};

server.listen(config.port, config.host, function(error){
    if(error){
        console.log("Error Occured", error);
    }else{
        console.log("Server is now live on ",config.host,":",config.port)
    }
})
