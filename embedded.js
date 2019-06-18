const mongoose = require('mongoose');

async function startServer(uri) {
try {
	const res = await mongoose. connect(uri, {useNewUrlParser: true });
	console.log('Mongodb Server connected!');
}catch (err){console.log('Connection failed', err);}
}

const uri = 'mongodb://localhost/playgroundEmbedded';

startServer(uri);

const authorSchema =  new mongoose. Schema({
name: String,
website: String,
bio: String
});

const Author = mongoose. model('Author', authorSchema);

const Course = mongoose. model('Course', new mongoose. Schema({
name: String,
author: authorSchema,  
}));

async function createCourse(name, author) {
	try {
		let course = new Course({
		name,
		author,
		});
		course = await course.save();
		console.log (course );
	} catch(err){console.log("can't create author", err);}
}

async function listCourses() {
	try {
		const courses = await Course.find();
		console.log(courses. length  ? courses : 'Empty Course Collection');
	} catch(err){console.log("can't fetch courses.", err);}
}

const author  = new Author({
	name: 'Abu Adnaan',
	website: 'fattyleehackz.org',
	bio: 'I love coding and sleeping', 
	});

//createCourse('NodeJs', author);
//listCourses();
//updateCourse('5c49e11393235b65c8c87b40');
updateCourseMethodTwo('5c49e11393235b65c8c87b40')
async function updateCourse(id) {
try {
	let course = await Course//. findById(id);
	. find({_id: id});
	if(!course. length )
//	if(! course )
	return console.log('Could not find course with the id:', id);
	course[0]. author. name = 'A\'isha bint AbdulFattah';
	course = await course[0]. save();
	console.log ('Updated!', course);
}catch (err) {console.log('Update error', err);}
}

async function updateCourseMethodTwo(id) {
try {
	// update is deprecated 
	let course = await Course.updateOne({_id: id}, {
	$set: {
	"author.name": "Muhammad Aliy Two"
	}
}, {new: true});
	if(!course )
	return console.log('Could not find course with the id:', id);
	console.log ('Updated!', course);
}catch (err) {console.log('Update error', err);}
}
