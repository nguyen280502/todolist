const express = require("express");
const bodyParser = require("body-parser");
const util = require('./util.js');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
//=================================================
const items = [];
const workItems = [];

app.get("/", function(req, res) {
	let day = util.getDay();
	res.render("todolist", {listTitel: day, newItems: items});
});

app.post("/", function(req, res){
	let reset = req.body.reset;
	if(typeof reset === "undefined") {
			console.log("hier: " + req.body.newItem);
			let item = req.body.newItem;
			let category = req.body.add;
			if(category === "Work list") {
				workItems.push(item);
				res.redirect("/work");
			} else {
				items.push(item);
				res.redirect("/");
			}
	} else {
		items.length = 0;
		workItems.length = 0;
		res.redirect("/");
	}
});

//============== work items ===========================
app.get("/work", (req, res) => {
	res.render("todolist", {listTitel: "Work list", newItems: workItems});
});

app.listen(3000, function() {
	console.log("Server started on port 3000");
});


/*
app.get("/", function(req, res) {
	let message = "Hello EJS a embedded javascript template";
	let lottoZahlen = util.createLottoNumber();
	let zahl = Math.floor(Math.random() * 101);
	res.render('list', {salute: message, lotto: lottoZahlen,zufallZahl: zahl});

});
*/
