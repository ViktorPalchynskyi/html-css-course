const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const objectId = require('mongodb').ObjectID;

const app = express();
const jsonParser = express.json();

const mongoClient = new MongoClient('mongodb://localhost:27017/', { useUnifiedTopology: true });

let dbClient;

app.use(express.static(__dirname + '/public'));

mongoClient.connect((err, client) => { 

   if(err) console.log(err);
   dbClient = client;
   app.locals.collection = client.db('test').collection('users');
   app.listen(5000, ()=> console.log('Server is waiting for connection...'));

});

app.get("/api/users", (req, res) =>{
        
   const collection = req.app.locals.collection;
   collection.find({}).toArray((err, users) =>{
        
       if(err) return console.log(err);
       res.send(users);
   });
    
});

app.get('/api/users/:id', (req, res) => { 

   const id = new objectId(req.params.id);
   const collection = req.app.locals.collection;
   
   collection.findOne({_id: id}, (err, user) => { 

      if(err) return console.log(err);
       res.send(user);
   });
});

app.post('/api/users',jsonParser, (req, res) => { 

   if(!req.body) return res.sendStatus(400);

   const userName = req.body.name;
   const userAge = req.body.age;
   const user = {name: userName, age: userAge};

   const collection = req.app.locals.collection;

   collection.insertOne(user, (err, result) => {

      if(err) console.log(err);
      res.send(user);

   });     
});

app.delete('/api/users/:id', (req, res) => { 

   const id = new objectId(req.params.id);
   const collection = req.app.locals.collection;
   collection.findOneAndDelete({_id: id}, (err, result) => { 

      if(err) console.log(err);
      let user = result.value;
      res.send(user);
   }); 
});

app.put('/api/users', jsonParser, (req, res) => { 

   if(!req.body) return res.sendStatus(400);
   const id = new objectId(req.body.id);
   const userName = req.body.name;
   const userAge = req.body.age;

   
   const collection = req.app.locals.collection;
   collection.findOneAndUpdate(
      {_id: id},
      {$set: {age:userAge, name: userName}},
      {returnOriginal: false },
      (err, result) => { 
         if(err) console.log(err);

         const user = result.value;
         res.send(user);
      }
      );
});

process.on('SIGINT', () => {
   dbClient.close();
   process.exit();
});