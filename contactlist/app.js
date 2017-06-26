// importing 
var express=require("express");
var mongoose=require("mongoose");
var bodyparser=require("body-parser");
var cors=require("cors");
var path = require("path");
const route=require("./routers/routes");
var app = express();
//static fileS
//connection
mongoose.connect('mongodb://localhost:27017/Contactlist');
//onconnection
mongoose.connection.on('connected',function(){
	console.log("Connection Successfull");
});
mongoose.connection.on('error',function(err){
	if(err)
	{console.log("Error in connection"+err);
	}
});
app.use(express.static(path.join(__dirname,'public')));


app.use('/api',route);
//adding controller
app.use(cors());
app.use(bodyparser.json());
//home testing
app.get('/', function(req, res){
res.send('<marquee>foobar</marquee>');
});
const port =3000;
app.listen(port, function() {
console.log('server started at port :'+port);
});