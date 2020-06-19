const express = require('express');
const app = express();
const port = Number(process.env.PORT) || 5000;
const http = require('http');
const server = http.createServer(app);
const path = require('path');

// socket
const socket = require('socket.io');
const io = socket(server);

server.listen(port, () => { console.log('listening on port ' + port); });
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json({ limit: '1mb' }));

app.get('/socket/', function(request, response) {
    
    // send the response with the environment port to the client side
    response.json(port);
})

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('new connection ' + socket.id);
}