const MongoClient = require('mongodb').MongoClient;

const mongoClient = new MongoClient('mongodb://localhost:27017/', { useUnifiedTopology: true });

let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}, {name: "Viktor", age: 23},{name: "Tanya", age: 22}]; 

mongoClient.connect((err, client) => {

   if(err) return console.log(err);
   
   const db = client.db('test');
   const col = db.collection('users');
   col.findOneAndUpdate(
      {name: 'Bob'},
      {$set: {name: 'Johnny'}},
      {returnOriginal: false},
      (err, result) => { 

         if(err) console.log(err);
         

         console.log(result);
         client.close();
      }
   );
   
});
