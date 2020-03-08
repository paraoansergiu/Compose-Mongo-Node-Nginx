console.log("Homepage")
const express = require('express')
const database = require('.database')
const app = express()

database.initializeMongo();

app.get('/', function (req,res) {
	res.send('User')
})

app.listen(3000,function(){
	console.log('Listening on port 3000')
})

app.get('/testFind', function(req,res) {
	database.User.find(function (err, users)) {
		if(err) return res.error(err);
		console.log(users);
		res.json(users)
	})
})