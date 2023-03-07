const eventEmitter = require('events')
const http = require('http')
const server = http.createServer()
server.on('request',() => {
    console.log(server.eventNames());
})
server.listen(5000);
const customeEmitter = new eventEmitter()
customeEmitter.on('request',() => {
    console.log("Events");
})
customeEmitter.emit('request',() => {
    console.log("Events emitted");
})
