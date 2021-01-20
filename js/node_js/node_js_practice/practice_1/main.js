const http = require('http');
const fs = require('fs');

http.createServer((req,res) => { 
   
   fs.readFile('main.js', 'utf-8', (err, data)=> { 
      res.writeHead(200, {'content-type' : 'text/plain'});

      if(err) { 
         res.write('Clould not find or open file for reading');
      } else res.write(data);

      res.end();
         
   });

}).listen(8124, () => console.log('bound to port 8124'));

console.log('Server running on 8124');