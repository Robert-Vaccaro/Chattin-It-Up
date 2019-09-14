var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

const PORT = process.env.PORT || 3231

const SockManager = require('./SocketManager')

io.on('connection', SockManager)

app.listen(PORT, () => {
    console.log("connected to port: " + PORT);
})