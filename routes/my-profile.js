var data = require("../data.json");

exports.initialize = function(req, res) {    
	// Your code goes here
	var data = require('../data.json');
	
	var studentID = req.session.userID;
	if(!studentID){
		res.render('./index');
	}
	var output = {};
	output.info = data.Students[studentID];
	output.current_classes = [];
	output.previous_classes = [];
	for (var current in data.Students[studentID].quarters){

		for (var i = 0; i < data.Students[studentID].quarters[current].length;i++){
			if(current != "winter2014")
				output.previous_classes.push(data.Students[studentID].quarters[current][i]);
			else
				output.current_classes.push(data.Students[studentID].quarters[current][i]);
			
		}
	}

	
	res.render('my-profile',output);

 }