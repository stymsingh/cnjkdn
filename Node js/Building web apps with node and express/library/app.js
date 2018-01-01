
/***


		MODIFIED APP.JS FILE AFTER MAKING CHANGES MENTIONED BY 'gulp style'
			
***/

var express = require('express');

var app = express();
var port = process.env.PORT ||  5000;

/***********************************/

// Static Loads
app.use(express.static('/public'));

// tells where to store views
app.set('views','./src/views');

// set template engine
app.set('view engine','jade');


/***********************************/

// Simple Routes
app.get('/', function(req, res){
	res.render('index');
});

app.get('/books', function(req, res){
	res.send('Hello Books :)');
});

// Server code
app.listen(port, function(err){
	console.log('Server is running at port: '+port);
}); 



