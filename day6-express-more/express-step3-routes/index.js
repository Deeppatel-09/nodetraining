const e = require("express");
const express = require("express");

let app = express();
let heroesList = [];

app.use(express.urlencoded({ extended : true }));

app.get("/", (req, res)=>{
    res.render("home.pug",{
        title : "Heroes Application",
        error : "",
        heroes : heroesList
    })
});

app.post("/", (req, res)=>{
   // console.log("express got a post request from template");
   // console.log(req.body);
   console.log(req.body.nhero);
   if(req.body.nhero === ""){
    res.render("home.pug",{
        error : "Hero name is blank",
        heroes : heroesList
    });
   }else{
       heroesList.push(req.body.nhero);
       res.redirect("/");
    }
});

app.listen(2020,"localhost",err=>{
    if(err) console.log("Error ", err)
    else console.log("Server is now live on localhost:2020")
})