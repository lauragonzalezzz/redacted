var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var redact = require('./redact.js')

app.use(bodyParser.urlencoded({ extended : true }));
app.use(function(req, res, next){
  redact(req, res, next);
});

app.post('/message', function(req, res){
  res.status(200).send(req.body.message);
});

if(!module.parent){
  var server = app.listen(8080, function(){
  console.log("App Listening!");
  });
}
module.exports = server