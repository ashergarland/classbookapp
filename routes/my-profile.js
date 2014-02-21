var data = require("../data.json");

exports.initialize = function(req, res) {   
	// Your code goes here
	var data = require('../data.json');
	
	var studentID = req.session.userID;
	if(studentID == undefined){
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

var fs = require('fs');

exports.upload = function(req, res) {
	var userFile = require("../data.json");
	console.log(req.files);

	fs.readFile(req.files.image.path, function (err, data) {

		var imageName = req.files.image.name
		var newPath = "./public/uploads/fullsize/" + req.session.userID +".jpg";
		/// If there's an error
		if(!imageName){

			console.log("There was an error")
			res.redirect("/");
			res.end();

		} else {

		   console.log(newPath);
		  /// write file to uploads/fullsize folder
		  fs.writeFile(newPath, data, function (err) {
		  });
		  userFile.Students[req.session.userID].imageURL = "uploads/fullsize/" + req.session.userID + ".jpg";

		  res.redirect('my-profile');
		}
	});
}

exports.updatePassword = function(req, res) {
	var parameters = req.query;
	var studentID = req.session.userID;
	var password1 = parameters.password1;
	var password2 = parameters.password2;
	console.log("pw1 " + password1 + " pw 2 " + password2);
	if(password1 == password2) {
		//data.Students[studentID].password = password1;
		res.json({"result":"success"});
	}
	else {
		//console.log("not equal");
		res.json({"result":"failure"});
	}
}

exports.updateName = function(req, res) {
	var parameters = req.query;
	var studentID = req.session.userID;
	var finame = parameters.firstNameForm;
	var laname = parameters.lastNameForm;
	
	console.log("fname " + finame );
	//console.log("pw1 " + password1 + " pw 2 " + password2);
	
	data.Students[studentid].firstName = finame;
	data.Students[studentid].lastName = laname;
	
	/*if(password1 == password2) {
		data.Students[studentID].password = password1;
		res.json({"result":"success"});
	}
	else {
		//console.log("not equal");
		res.json({"result":"failure"});
	}*/
}