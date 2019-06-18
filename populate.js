const express = require('express');
const mongoose = require('mongoose');

async function startServer(uri) {
try {
	const res = await mongoose. connect(uri, {useNewUrlParser: true });
	console.log('Mongodb Server connected!');
}catch (err){console.log('Connection failed', err);}
}

const uri = 'mongodb://localhost:27017/playground';

startServer(uri);

const Author = mongoose. model('Author', new mongoose. Schema({
name: String,
website: String,
released_year: Date
}));

const Course = mongoose. model('Course', new mongoose. Schema({
name: String,
author_id: {
	type: mongoose. Schema. Types. ObjectId,
	ref: 'Author'
}, 
}));

async function createAuthor(name, website, released_year) {
try {
	let author = new Author({
	name,
	website,
	released_year, 
	});
	author = await author. save();
	console.log(author);
} catch(err){console.log("can't create author", err);}
}

async function createCourse(name, author_id) {
	try {
		let course = new Course({
		name,
		author_id,
		});
		course = await course.save();
		console.log (course );
	} catch(err){console.log("can't create author", err);}
}

async function listCourses() {
	try {
		const courses = await Course.find(). populate('author_id');
		console.log(courses. length  ? courses : 'Empty Course Collection');
	} catch(err){console.log("can't fetch courses.", err);}
}
async function listAuthors() {
	try {
		const authors = await Author.find();
		console.log(authors. length  ? authors : 'Empty Author\'s Collection');
	} catch(err){console.log("can't fetch authors.", err);}
}

//createAuthor('Ayuub', 'ayuuba.com', '2029-07-13' );
//createAuthor('Abu Adnaan', 'fattyleehackz.org', '1987-06/23');

listCourses();
//listAuthors();
//createCourse('Titanic tales', '3c49c4319043da546201b530')