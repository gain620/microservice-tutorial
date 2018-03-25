let http = require('http');

const options = {
    host: "103.24.8.4",
    port: 8080,
    path: "/"
};

let req = http.request(options, (res) => {
    let data = "";
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });

});


req.end();