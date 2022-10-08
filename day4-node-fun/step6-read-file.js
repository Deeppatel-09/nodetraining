const fs = require("fs");

// console.log( fs.readFileSync("temp.txt") );

// console.log( fs.readFileSync("temp.txt").toString() );
// console.log( fs.readFileSync("temp.txt")+"" );

// console.log( fs.readFileSync("temp.txt","utf-8") );

/* 
fs.readFile("temp.txt","utf-8",function(error,data){
    if(error){
        console.log("Error ", error);
    }else{
        console.log(data);
    }
}); 
*/


setInterval(()=>{
    fs.appendFile("temp.txt","\nnew message in new line","utf8",function(error){
        if(error) console.log("Error ", error);
    });
},2000);


fs.watchFile("temp.txt",{ interval: 1000 },function(){
    console.log("file was updated ", new Date().getSeconds() );
});