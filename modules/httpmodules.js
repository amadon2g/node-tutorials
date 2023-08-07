const http = require('http');

const server = http.createServer((req,res) => {

    if (req.url === '/') {
        res.write('Welcome to our page')
        res.end()
        return;
    }
    if (req.url === '/about') {
        res.end('Welcome to our about page')
        return;
    }
    res.end(`
    <h1>Ooops!!<h1>
    <p>Page cannot be found<p>
    <a href='/'>Back to Home<a>
    `)
})

server.listen(5000)