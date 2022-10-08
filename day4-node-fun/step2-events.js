const EventEmitter = require("events").EventEmitter;

let eventemit = new EventEmitter();

function custemEventHandler(){
    console.log("custemEvent Happened");
};

// eventemit.addListener("customEvent",custemEventHandler);
// eventemit.on("customEvent",custemEventHandler);
eventemit.once("customEvent",custemEventHandler);


let count = 0;
let si1 = setInterval(function(){
    console.log("interval triggered");
    if(count < 5){
        eventemit.emit("customEvent");
        count = count+1;
    }else{
        // eventemit.removeListener("customEvent",custemEventHandler);
        eventemit.off("customEvent",custemEventHandler);
        clearInterval(si1)
    }
},1000);

