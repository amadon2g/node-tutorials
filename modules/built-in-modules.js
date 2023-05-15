// OS
const os = require('os')
//info about user
const user = os.userInfo()
console.log(user);

//method returns system uptime in secs
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)

// PATH
const path = require('path')
console.log(path.sep);
console.log(path.resolve(__dirname));
// File System
// HTTP

