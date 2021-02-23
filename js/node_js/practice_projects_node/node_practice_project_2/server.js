const http = require('http');

const server =  http.createServer((req, res) => { 
  
   const {headers, url, method} = req;
   console.log(headers, url, method);
   res.end('<h1>Hello there</h1>');
});

server.listen(5000, () => console.log('Server is working...'));