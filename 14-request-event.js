const http = require('http')
//Ye waala kuck khaas nhi smjh aaya

//
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    console.log("Samar");
  res.end('Welcome')
})


server.listen(5000)