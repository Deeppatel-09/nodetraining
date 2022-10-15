const express = require("express");
let app = express();

let companyName = "My Company";
let appCountry = "India";

// middleware
// app.set('views', "templates");

app.get("/", (req, res)=>{
    /*    
    res.render("home.pug",{
        comp : companyName
    }); 
    */
    res.render("home.ejs",{
        comp : companyName
    });
})

app.listen(1010, "localhost", err => {
    if(err){
        console.log("Error ", err);
    }else{
        console.log("Server is now live on localhost:1010");
    }
})