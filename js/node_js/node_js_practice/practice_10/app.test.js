const request = require('supertest');
const assert = require("assert");

const app = require('./app').app;

it('should return Hello Test', done => { 
   request(app)
      .get('/')
      .expect('Hello Test')
      .end(done);
});

it('should return NotFound with status 404', done => {

   request(app)
      .get('/error')
      .expect(404)
      .expect('NotFound')
      .end(done);
});

it("should return user with name Tom and age 22", done =>{
     
   request(app)
       .get("/user")
       .expect(response => {
           assert.deepEqual(response.body, {name:"Tom", age:22});
       })
       .end(done);
});