const http = require('http');
const fs = require('fs');


function writeNumbers(res) {
   let counter = 0;

   for(let i = 0; i < 100; i++) { 
      counter++;
      res.write(counter.toString());
   }
}

http.createServer((req, res) => { 

   const query = require('url').parse(req.url).query;
   const app = require('querystring').parse(query).file + '.txt';

   res.writeHead(200, {'Content-type': 'text/plain'});

   writeNumbers(res);

   setTimeout(() => { 
      console.log('opening ' + app);
      fs.readFile(app, 'utf-8', (err, data) => {
         if(err) { 
            res.write('Could ont find or open file for reading');
         } else { 
            res.write(data);
         }
         res.end();
      });
   }, 2 * 1000);

}).listen(8124);

console.log('Server running at 8124');