// importing 
var express=require("express");
var mongoose=require("mongoose");
var bodyparser=require("body-parser");
var cors=require("cors");
var path = require("path");

var app = express();
//home testing
app.get('/', function(req, res){
res.send('<marquee>foobar</marquee>');
});
const port =3000;
app.listen(port, function() {
console.log('server started at port :'+port);
});