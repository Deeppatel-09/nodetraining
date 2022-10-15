const express = require("express");
let app = express();
let port = process.env.PORT || 5050;

// Routes
app.get("/",function(req, res){
   /*  
    res.write("<h1> hello from express you have visited HOME page </h1>");
    res.end(); 
    */
    // res.send("<h1> hello from express you have visited HOME page </h1>");
    // res.sendFile(__dirname+"/index.html");
    res.sendFile(process.cwd()+"/index.html");
});
app.get("/about",function(req, res){
    res.send("<h1>hello from express you have visited ABOUT page</h1>");
});
app.get("**",function(req, res){
    res.send("<h1>hello from express you have visited "+req.url+" page</h1>");
});

app.listen(port, "localhost", function(error){
    if(error){
        console.log("Error ", error);
    }else{
        console.log("server is now live on localhost : ",port);
    }
});