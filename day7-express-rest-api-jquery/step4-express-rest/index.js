const express = require("express");
const app = express();

// middlewares
/* 
app.use(function(req, res, next){
    console.log(req.url);
    next();
}); 
*/
// app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/public"));

// express routes
/* 
app.get("/", function(req, res){
    // res.send("hello from express");
    res.sendFile(__dirname+"/public/index.html");
});
*/

app.listen(5050,"localhost", function(error){
    if(error){
        console.log("Error ", error);
    }else{
        console.log("server is now running on localhost:5050")
    }
});