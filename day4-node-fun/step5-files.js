const fs = require("fs");
/*
fs.writeFileSync("temp.txt","welcome to your life "+new Date().getMilliseconds(),"utf-8");
console.log("file created ",new Date().getMilliseconds());
*/

fs.writeFile("temp.txt","welcome to your life "+new Date().getMilliseconds(),"utf-8",function(error){
    if(error){
        console.log("Error Happened ", error)
    }else{
        console.log("in the callback ",new Date().getMilliseconds());
    }
});

console.log("file created 1",new Date().getMilliseconds());
console.log("file created 2",new Date().getMilliseconds());
console.log("file created 3",new Date().getMilliseconds());
console.log("file created 4",new Date().getMilliseconds());
console.log("file created 5",new Date().getMilliseconds());