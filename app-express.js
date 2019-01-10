const express = require ("express");
const app = express();

const courses = [
{id: 1, name: 'course1'},
{id: 2, name: 'course2'}, 
];

app. get('/api/customers', (req, res)=>{
// res. send(["abu", "ummu", 'Abdullah', {age:31 }]);
res. status(200). send(courses);
});

app. get('/api/customers/:id/', (req, res)=>{

const {id} = req. params ;

const course = courses. find((course_el)=>{
return course_el. id === Number(req. params. id);
});

if(!Number(id)) return  res. status(403).send({message: 'Enter a valid id format' });
 
if (!course) return res. status(404). send("The course with the given ID:"+ req. params. id+
" was not found!"  );

return res. status (200). send(course);
/*
const objRes = {
["query"] : req. query,
params: req. params, 
}
res. send( objRes  )
*/
})

const port = process. env. PORT || 3000;

app. listen (port, ()=> console.log(`Server listening on port`, port));