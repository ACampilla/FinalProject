const http = require ('http');

http.createSever(function(request,response){
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("this text is me");
    response.end
});
http.listen(9000)