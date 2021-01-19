const http = require('http');

http.createServer((req,res) => { 
   
   res.writeHead(200, {'content-type' : 'text/plain'});

   res.end('Hello world!');
}).listen(8124);

console.log('Server running on 8124');