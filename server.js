// after requireing socket.io 
// you can create a server by passing a port #

const io = require('socket.io')(3000)

// when the site is loaded 
// the function will be ran

io.on('connection', socket =>{

    socket.emit('chat-message', 'hello word')

})
