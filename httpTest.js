const http = require("http");

let server = http.createServer((req, res) => {
    res.end("hello world!~");
});

server.listen(8080);