const http = require('http')
const socketIO = require('socket.io')
const os = require('os')

const fs = require('fs')
const server = http.createServer(function (req, res) {
    fs.readFile(__dirname + '/public/index.html', function(err, data) {
        res.writeHead(200)
        res.end(data)
    })
}) 

const io = socketIO(server)
io.on('connection', function (socket) {
    socket.on('add-message', data => {
        io.emit('new-message', data)
    })
})


server.listen(process.env.PORT || 5000)
