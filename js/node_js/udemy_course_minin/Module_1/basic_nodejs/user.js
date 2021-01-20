const user = {
   name: 'Elena',
   age: 22
};



module.exports = {
   user,
   sayHello() {
      console.log(`Hello ${this.user.name}`);
   }
};