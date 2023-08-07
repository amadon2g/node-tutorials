const sayHi = (name) => {
    console.log(`Hi there, my name is ${name}`)
}

sayHi('Ahmad')

const sayHello = function(name) {
    console.log(`Hello there, my name is ${name}`)
}

sayHello('Makama')

const http = require('http');
const server = http.createServer((req,res) => {


    res.write('Welcome')
    res.end()
})

server.listen(5000)