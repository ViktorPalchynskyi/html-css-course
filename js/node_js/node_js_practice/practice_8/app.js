const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => { 

   res.send('<h1>Main page</h1>');

});

app.use('/about', (req, res) => { 

   console.log(req.query);
   let id = req.query.user.id;
   let userName = req.query.user.name;

   res.send(`<h1>Info</h1><p>id=${id}</p><p>name=${userName}</p>`);

});

app.listen(5000, ()=> console.log('Server running...'));