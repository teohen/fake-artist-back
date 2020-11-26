const app = require('./app')
const socket = require('socket.io')

const server = app.listen(8080, ()=> {
    console.log("server running")
})

socket(server, {
    cors: {
        origin: '*'
    }
})

/* const express = require('express');
const app = express();




const http = require('http');
const server = http.createServer(app);




const socket = require('socket.io');
const io = socket(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', onConnection);

function onConnection(socket) {
    socket.on('drawing', (data) => {
        socket.broadcast.emit('drawing'+data.code, data)
    });
}

const port = 8080;
server.listen(port, () => console.log(`server is running on port ${port}`)); */