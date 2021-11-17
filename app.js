const http = require('http');



const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>Main Server</h1></body><html>");
        res.write("<a href='/pageOne'> go to next page </a>")
        res.end();

    } else if (req.url === "/pageOne") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>Hello world</h1></body><html>");
        res.write("<a href='/'> back to main server </a>")
        res.end();  
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<html><body><h1>404 page not found</h1></body><html>");
        res.write("<a href='/'> Go to Main server </a>")
        res.end();
    }
})
server.listen(8000);


console.log("listening to port 8000")