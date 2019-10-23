var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

		var sql = "select * from user";
		db.getResults(sql, function(results){
			if(req.cookies['username'] != null){
				res.render('admin/adminhome', {user: results});
			}else{
				res.redirect('/login');
			}
		});
});

module.exports = router;


