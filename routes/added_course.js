// Get all of our friend data

var data = require('../data.json');
exports.view = function(req, res){
	console.log("THE LINK IS: " +req.query.coursePicture+"\n");
	data["courses"].push(
		{
			"courseName": req.query.courseName,
			"author": "default Author name for now",
			"description": req.query.courseDescription,
			"courseImageURL": req.query.coursePicture,
			"courseLink": req.query.lectureURL
		});
	res.render('added_course', {"courseDetails":[
		{
			"courseName": req.query.courseName,
			"courseAuthor": "default Author name for now",
			"courseDescription": req.query.courseDescription,
			"coursePicture": req.query.coursePicture,
			"lectureURL": req.query.lectureURL
		}
	]} );
};