var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	
	var user = {
		username: req.body.username,
		password: req.body.password
	}

	userModel.validate(user, function(status){
		
		if(status){
			res.cookie('username', req.body.uname);
			res.redirect('/admin');	
		}else{
			res.send('invalid username/password');
		}
	});

});

module.exports = router;


