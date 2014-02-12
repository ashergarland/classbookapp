var data = require("../data.json");

exports.initialize = function(req, res) {    
	// Your code goes here
	console.log(req.session.userID);
	var studentID = req.session.userID;
	console.log(studentID);
	if(!req.session.userID || req.session.userID == -1){
		res.render('./index');
	}
	console.log(req.session.userID);
	res.render('homepage',data.Students[studentID]);

 }
exports.addClass = function(req,res) {



	var parameters = req.query;
	var newClass = {
							"id": parameters.classID,
							"name": parameters.className,
							"section": parameters.sectionID
					};

	var studentID = req.session.userID;

	if(!studentID){
		res.render('./index');
	}


	data.Students[parameters.studentID].quarters[parameters.term].push(newClass);

	var classAdded = false;

	for (var i = 0; i <data.Classes.length; i++)
	{
		if(data.Classes[i].section == parameters.sectionID){
			data.Classes[i].students.push({"id": parameters.studentID});
			classAdded = true;

		}

	}
	if(!classAdded){
		newClass.students = [{"id": parameters.studentID}];
		data.Classes.push(newClass);

	}		
	//console.log(data.Students[0].quarters[parameters.term]);
	res.render('homepage',data.Students[studentID]);

} 
exports.login = function(req,res){
	var user = req.query;
	for (var i = 0; i < data.Students.length;i++){
		if(user.email == data.Students[i].email){
			req.session.userID = data.Students[i].id;
			res.render('homepage',data.Students[req.session.userID]);
		}	
	}
	
	res.render('index');
}
