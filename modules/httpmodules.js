const http = require('http');

const server = http.createServer((req,res) => {

    if (req.url === '/') {
        res.write('Welcome to our page')
        res.end()
        return;
    }
    if (req.url === '/about') {
        res.end('Welcome to our about   page')
        return;
    }
})

server.listen(5000)