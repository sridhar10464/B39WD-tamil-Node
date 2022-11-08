const os = require("os");


console.log("Free RAM", os.freemem()/1024/1024/1024);
console.log("Total RAM", os.totalmem()/1024/1024/1024);
console.log("Version", os.version());
console.log("Processor", os.cpus());
