let net = require('net');

let server = net.createServer((socket) => {
    socket.end("hello world!");
});

server.on('error', (err) => {
    console.log(err);
});

server.listen(9000, ()=> {
    console.log('listen', server.address());
});