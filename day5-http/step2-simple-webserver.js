const http = require("http");
const fs = require("fs");

let server = http.createServer(function(req, res){
    // res.write("hello from http server");
    res.writeHead(200,{"ContentType":"text/html"});
    // res.write( fs.readFileSync("index.html","utf-8") );
    let readhomepage = fs.readFileSync("index.html","utf-8");;
    if(req.url ===  "/" ){
        res.write( readhomepage );
    }else if(req.url === "/index.html"){
        res.write( readhomepage );
    }else if(req.url === "/about.html"){
        res.write( fs.readFileSync("about.html","utf-8") );
    }else{
        res.writeHead(404,{"ContentType":"text/html"});
        res.write("sorry requested file not found");
    }
    res.end();
});

let config = {
    port : 3000,
    host : "localhost"
};

server.listen(config.port, config.host, function(error){
    if(error){
        console.log("Error Occured", error);
    }else{
        console.log("Server is now live on ",config.host,":",config.port)
    }
})
