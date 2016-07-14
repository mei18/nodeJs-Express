//require hace una bisqueda recursiva.
var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send('hola mundo!');
})

app.listen(8080, function(){
	console.log('App running in port 8080');
});