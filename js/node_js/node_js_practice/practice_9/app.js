const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const jsonParser = express.json();

const filePath = 'users.json';

app.get('/' , (req, res) => { 

    res.sendFile(path.join(__dirname, '/public', '/index.html'));

});

app.get('/api/users', (req, res) =>  {

   const content = fs.readFileSync(filePath, 'utf-8');
   const users = JSON.parse(content);
   
   res.send(users);
});


app.get('/api/users/:id', (req, res) => { 
   
   const id = req.params.id;
   
   
   const content = fs.readFileSync(filePath, 'utf-8');
   const users = JSON.parse(content);
   let user = null;
   // находим в массиве пользователя по id
   for(var i=0; i<users.length; i++){
       if(users[i].id==id){
           user = users[i];
           break;
       }
   }
   // отправляем пользователя
   if(user){
       res.send(user);
   }
   else{
       res.status(404).send();
   }
});

app.post('/api/users', jsonParser, (req, res) => { 

   if(!req.body) return res.sendStatus(400);

   const userName = req.body.name;
   const userAge  = req.body.age;
   let user = {name: userName, age: userAge };

   let data = fs.readFileSync(filePath, 'utf-8');
   let users = JSON.parse(data);

   const idSome = users.sort((a,b) => a.id - b.id);
   const id = Math.max.apply(Math, users.map(user => user.id)) || 1;

   user.id = id+1;

   users.push(user);
   data = JSON.stringify(users);

   fs.writeFileSync(filePath, data);
   res.send(user);
});

app.delete('/api/users/:id', (req, res) => { 

    const id = req.params.id;
    let data = fs.readFileSync(filePath, 'utf-8');
    let users = JSON.parse(data);

    const index = users.findIndex(user => user.id === +id);

    console.log(index);
    

    if(index > -1) { 
        const user = users.splice(index, 1)[0];
        data = JSON.stringify(users);
        fs.writeFileSync(filePath, data);

        res.send(user);
    } else { 
        res.status(404).send();
        console.log('Not working');
        
    }
});

app.put('/api/users', jsonParser, (req, res) => { 

    if(!req.body) return res.sendStatus(400);

    const userId = req.body.id;
    const userName = req.body.name;
    const userAge = req.body.age;

    let data = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(data);
    let user = users.find(obj => obj.id === +userId);

    if(user){
        user.age = userAge;
        user.name = userName;
        data = JSON.stringify(users);
        fs.writeFileSync(filePath, data);
        res.send(user);
    }
    else{
        res.status(404).send(user);
    }
});

app.listen(5000, () => console.log('Server is runing...'));