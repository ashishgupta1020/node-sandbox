const http = require('http');
const config = require('./server_config');

http.createServer(function(req, res){
    const method = req.method;
    const url = req.url;

    switch(url){
        case '/':
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.end(`Server running at http://${config.host}:${config.port}/`);
            break;
        case '/greeting':
            res.writeHead(200, {'Content-type': 'application/json'});
            let jsonObj = {};
            jsonObj['response'] = 'Hello, World!';
            res.end(JSON.stringify(jsonObj));
            break;
    };
}).listen(config.port, config.host, () => {
    console.log(`Started server on http://${config.host}:${config.port}/`);
});
