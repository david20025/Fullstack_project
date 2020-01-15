var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var user = require('./user')
// var routes = require('./routes');

var app = express();

app.use(express.static(path.join(__dirname,".")));

app.use(bodyParser.json());
// app.use('/', routes);

app.post('/signin', function (req, res) {
  const user_name = req.body.email;
  var password=req.body.password;
  user.validateSignIn(user_name,password,function(result){
    if(result){
      res.send('Success')
    }
    else{
      res.send('Wrong username pass')
    }
  });



})

app.post('/signup', function (req, res) {
  var name=req.body.name;
  var email=req.body.email;
  var password=req.body.password;

  if(name && email && password){
    user.signup(name, email, password)
    console.log("ok", 8000);
  }
  else{
    res.send('Failure');
    console.log("bad", 8000);
  }
})

app.listen(8000,function(){
  console.log("Started listening on port", 8000);
})