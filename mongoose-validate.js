const mongoose = require('mongoose');

run('mongodb://127.0.0.1/abu');

async function run(uri) {
try {
const res = await mongoose. connect(uri, {useNewUrlParser: true });
console.log ('Server connected...');
} catch (err) {
console.log('An error occurred'. err. message );
}
}

const courseSchema = new mongoose. Schema({
name: { type:Number , required:true   },
author: {},
price: {},
isInStock: {},
quantity: {}, 
});

const Course = mongoose. model('Course', courseSchema);

const course  = new Course({
name: {name: 'Abu Adnaan '},
author: 'this is a string ', 
});

getCourses();
createCourse(course);

async function createCourse(_course) {
try {
let course = _course;
course = await course. save();
console.log (course);
}catch (err) {
console.log('Cant create course', err );
}
}

async function getCourses(filter) {
try {
const courses = await Course. find(filter);
console.log (courses. length? courses : 'Empty Course Collection ');
}catch (err) {
console.log('Can fetch courses', err );
}
}

