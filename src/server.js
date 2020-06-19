const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const http = require('http');
const server = http.createServer(app);

server.listen(port, () => { console.log('listening on port ' + port); });
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));