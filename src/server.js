const express = require('express');
const app = express();
const port = Number(process.env.PORT) || 5000;
const http = require('http');
const server = http.createServer(app);
const path = require('path');

// socket
const socket = require('socket.io');
const io = socket(server);

let counter = 0;
let history = [],
    client = [];

server.listen(port, () => { console.log('listening on port ' + port); });
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json({ limit: '1mb' }));

// port
app.get('/socket/', function(request, response) {
    
    // send the response with the environment port to the client side
    response.json(request.headers.host);
});

io.sockets.on('connection', (socket) => {
    console.log('new connection ' + socket.id);

    client.push({id : socket.client.id})

    let getClientID = client.find(e => (e.id === socket.client.id))
    if (getClientID)
        socket.emit('mouse', history);
        
    // receives a message
    socket.on('mouse', (data) => {
        
        // append data to the history variable
        history.push(data);

        // send the message back out to all clients except one that's connecting
        socket.broadcast.emit('mouse', data);
    })

    // limit number of concurrent connection
    if (socket.conn.server.clientsCount > 8) {
        console.log(socket.conn.server.clientsCount)
        io.close();
    } else {
        counter++;
        console.log(counter);
    }
});