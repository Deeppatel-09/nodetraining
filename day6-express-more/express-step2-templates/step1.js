const express = require("express");
const fs = require("fs");
let app = express();

let companyName = "My Company";
let appCountry = "India";

app.get("/", (req, res)=>{
    let tempFile = fs.readFileSync("./index.html","utf-8");
    res.send(
        tempFile
        .replace("{comp}", companyName)
        .replace("{country}", appCountry));
})

app.listen(1010, "localhost", err => {
    if(err){
        console.log("Error ", err);
    }else{
        console.log("Server is now live on localhost:1010");
    }
})

// npm i nodemon -g
// nodemon .

// after scripts configurations in package.json
// "start" : "nodemon ."

// npm run start 
