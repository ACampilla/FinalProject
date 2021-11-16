const http = require ('http');

const server = http.createServer();

server.on("connection", (socket) => {
    console.log("new request has been received....")
});
server.listen(3000);

console.log("listening to port 3000")