let net = require('net');

const options = {
    port: 9000,
    host: "127.0.0.1"
};

let client = net.connect(options, () => {
    console.log("connected!~");
});

client.on('data', (data) => {
    console.log(data.toString());
});

client.end('end', () => {
    console.log("disconnected!~");
});