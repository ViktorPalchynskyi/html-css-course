const MongoClient = require('mongodb').MongoClient;

const mongoClient = new MongoClient('mongodb://localhost:27017/', { useUnifiedTopology: true });

let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
mongoClient.connect((err, client) => {

   const db = client.db('test');
   const collection = db.collection('users');
   collection.findOne({name: 'Alice'},(err, results) => {

      console.log(results);
      client.close();
   });
});
