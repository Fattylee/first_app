const express = require ("express");
const app = express();
// const bodyParser = require('body-parser');

// process. env. NODE_ENV
if (app. get('env') === 'development'){
app. use(require('./logger'));
console.log('Morgan enabled... ')
}

app. use(express. json()); // middleware
app. use(require('morgan')('tiny')); // logger middleware
app. use(express. static('public')); //middleware for serving static files
const courses = [
{id: 1, name: 'course1'},
{id: 2, name: 'course2'}, 
];

app. get('/api/courses', (req, res)=>{
// res. send(["abu", "ummu", 'Abdullah', {age:31 }]);
res. status(200). send(courses);
});

app. get('/api/courses/:id/', (req, res)=>{

const {id} = req. params ;

const course = courses. find((course_el)=>{
return course_el. id === Number(req. params. id);
});

if(!Number(id)) return  res. status(403).send({message: 'Enter a valid id format' });
 
if (!course) return res. status(404). send("The course with the given ID:"+ req. params. id+
" was not found!"  );

return res. status (200). send(course);

});

app. post('/api/courses', (req, res)=>{
const { name } = req. body;

if(!name) return res.status(400). send ({message:'name field can\'t be "undefined" or "empty"'});
const id = courses[courses. length - 1]. id + 1;
const course = {id, name};
courses. push(course);

return res.status(201). send(course);
});

app. put('/api/courses/:id', (req, res)=>{
const { id } = req. params ;
const { name } = req. body ;

let message = 'Pls enter a valid course number';
if(Number. isNaN(Number(id))) return res. status (403). send({message});

message = 'name field can\'t be "undefined" or "empty"';
if(!name) return res.status(400). send ({message});

const course  = courses. find ((course_el)=> course_el. id == id);

message = `the course with id: ${id} was not found`;
if (!course) return res. status(404). send({message});

const newCourse = {...course, name };
const index = courses. indexOf(course);
courses[index] = newCourse;

return res.status(201). send(newCourse);
});

app.delete('/api/courses/:id', (req, res)=>{
const {id } = req. params ;
let message = 'Pls enter a valid course id';
if(Number.isNaN(Number(id))) return res.status(403).send({ message}) ;

const course = courses. find(course_el => course_el. id == id);

message = "course not found!";
if(!course) return res. status(404).send({message});

courses. splice(courses. indexOf(course), 1);
message = 'deleted successfully';
return res. status(200). send({message});
});

const port = process. env. PORT || 3000;

app. listen (port, ()=> console.log(`Server listening on port`, port));