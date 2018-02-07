var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

var app = express();

app.use(bodyParser.jason());
app.use(bodyParser.urlendcoded({extend:false}));

app.get('/', function(req, res){
  res.send("hello World")
});

app.listen(3000,function(req, resp){
  console.log("server started at 3000");
})
