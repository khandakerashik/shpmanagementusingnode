
var express  	= require('express');
var ejs  		= require('ejs');
var bodyParse  	= require('body-parser');
var exSession  	= require('express-session');
var cookieParser= require('cookie-parser');
// var home  		= require('./controllers/home');
// var user  		= require('./controllers/user');
// var login  		= require('./controllers/login');
// var logout  	= require('./controllers/logout');
var app 		= express();


app.set('view engine', 'ejs');

app.use(bodyParse.urlencoded({extended:false}));
app.use(exSession({secret:"value", saveUninitialized:true, resave:false}));
app.use(cookieParser());
app.use('/admin', admin);
app.use('employee', employee);
app.use('/login', login);
app.use('/logout', logout);

app.get('/', function(req, res){
	res.send('<h2>hello</h2>');
});


app.listen(3000, function(){
	console.log('server started at 3000...');
});
