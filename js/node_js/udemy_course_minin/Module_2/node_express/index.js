const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const cardRoutes = require('./routes/card');
const addRoutes = require('./routes/add');
const ordersRoutes = require('./routes/orders');
const coursesRoutes = require('./routes/courses');
const User = require('./models/user');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(async (req, res, next) => { 
  try{
    const user = await User.findById('601039b4c27c674628f47114');
    req.user = user;
    next();
  } catch (e){ 
    console.log(e);
  }
});

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));

app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);
app.use('/card', cardRoutes);
app.use('/orders', ordersRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
  try{
    const url = `mongodb+srv://viktor:EaZVEfAmdWEgK45e@cluster0.z1qfk.mongodb.net/shop`;
    await mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true, useFindAndMododify:false});  
    const candidate = await User.findOne();
    if(!candidate) {
      const user = new User({
        email:'palchinskij19@gmail.com',
        name: 'Viktor',
        cart: {items: []}
      });
      await user.save();
    } else {
      
    }
  } catch(e) {
    console.log(e);
  }
}

start();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});