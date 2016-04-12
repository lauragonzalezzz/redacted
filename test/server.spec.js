var request = require('supertest');
var server = require("../server.js");
var bodyParser = require('body-parser');

// server.use(bodyParser.urlencoded({ extended : true }))
// server.use(bodyParser.json())

describe('POST /message', function(){

  it('should allow the message to post', function(done){
    request(server)
    .post('/message')
    .type('form')
    .send({ 'message' : 'Hello!'})
    .expect(200, 'Hello!')
  });

});