let http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello world!');
    res.end('It\'s my first backend code');
}).listen(8080);