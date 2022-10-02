var os = require("os");
// console.log( os.arch() );
// console.log( os.cpus().length );
// console.log( os.cpus()[0] );
// console.log( os.userInfo().username );
console.log("total memory ", ( (os.totalmem() / 1024) / 1024 ) / 1024 );
console.log("free memory ", os.freemem() );
console.log("platfomr ", os.platform() );