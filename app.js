
var express  	= require('express');
var ejs  		= require('ejs');
var bodyParse  	= require('body-parser');
var exSession  	= require('express-session');
var cookieParser= require('cookie-parser');
var app 		= express();


app.set('view engine', 'ejs');

app.use(bodyParse.urlencoded({extended:false}));
app.use(exSession({secret:"value", saveUninitialized:true, resave:false}));
app.use(cookieParser());
app.use('/home', home);
app.use('/user', user);
app.use('/login', login);
app.use('/logout', logout);

app.get('/', function(req, res){
	res.send('<h2>hello</h2>');
});


app.listen(3000, function(){
	console.log('server started at 3000...');
});
