var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

var app = express();
app.listen(3000,function(req, resp){
  console.log("server started at 3000");
})
