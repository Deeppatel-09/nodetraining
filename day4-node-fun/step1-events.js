const EventEmitter = require("events").EventEmitter;

let myevent = new EventEmitter();

myevent.addListener("onlineEvent", function(){
    console.log("online event happened");
});

// timers
/* 
setTimeout(function(){
    myevent.emit("onlineEvent");
},2000); 
*/
/* 
setInterval(function(){
    myevent.emit("onlineEvent");
},1000) 
*/
/* 
setImmediate(function(){
    myevent.emit("onlineEvent");
}); 
*/