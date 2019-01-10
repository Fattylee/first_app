const express = require ("express");
const app = express();
// const bodyParser = require('body-parser');

app. use(express. json());
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

const port = process. env. PORT || 3000;

app. listen (port, ()=> console.log(`Server listening on port`, port));