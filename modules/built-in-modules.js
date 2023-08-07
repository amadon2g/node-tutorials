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
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);
console.log(path.basename(filePath))
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
// File System
// HTTP

