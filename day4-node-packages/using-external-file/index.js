const fetch = require("fetch");
const fs = require("fs");

// fetch.fetchUrl("https://intellipaat.com/index.php",function(error, meta, data){
fetch.fetchUrl("https://www.npmjs.com/package/veerabhadraiahhv-first-module",function(error, meta, data){
    if(error){
        console.log("error ", error);
    }else{
        // console.log(data+"");
        fs.writeFile("index.html",data,"utf-8",function(error){
            if(error){
                console.log("Error ", error);
            }else{
                console.log("file was downloaded")
            }
        })
    }
})