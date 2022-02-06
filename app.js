const express = require("express");
const bodyParser = require("body-parser");
const util = require('./util.js');
const app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
	let message = "Hello EJS a embedded javascript template";
	let lottoZahlen = util.createLottoNumber();
	res.render('list', {salute: message, lotto: lottoZahlen});

});



app.listen(3000, function() {
	console.log("Server started on port 3000");
});
