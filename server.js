const express = require('express');
const WebSocket = require('ws');
const port = 3000;
const http = require('http');
const app = express();
app.use(express.static('client'));
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
server.listen(port, function () {
    console.log('Listening on http://localhost:' + port);
});

wss.on('connection', function connection(ws, req) {
    const ip = req.socket.remoteAddress;
    console.log("neue verbindung von: " + ip);

    ws.on('error', console.error);
});