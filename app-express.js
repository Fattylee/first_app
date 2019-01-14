const express = require ("express");
const config = require('config');
const bodyParser = require('body-parser');
const courseRouter = require('./routes/course');
const abuRouter = require('./routes/abu');
const app = express();
// const bodyParser = require('body-parser');

app. set('view engine', 'pug');
app. set('views', './views'); //default location 
console.log("NODE_ENV:", process.env.NODE_ENV);
const nm = 'name';
if(config. has(nm))
console.log(nm, ': ',  config. get(nm));
else console.log(nm, 'not found!');

// process. env. NODE_ENV
if (app. get('env') === 'development'){
app. use(require('./logger'));
console.log('Morgan enabled... ')
}

app. use(express. json()); // middleware
app. use(bodyParser . text());
app. use(express. urlencoded({extended:true}))
app. use(require('morgan')('tiny')); // logger middleware
app. use(express. static('public')); //middleware for serving static files

app. use('/abu', abuRouter);
app. use('/api/courses', courseRouter);

const port = process. env. PORT || 3000;

app. listen (port, ()=> console.log(`Server listening on port`, port));
/*
console.log('first log');
dbHandler((data) => {
setTimeout(()=>{
console.log ('getting repos.... ');
getRepos(data.username, ()=>{
setTimeout(()=>{
console.log ('getting commits... ');
console.log()
}, 2000)
})
}, 2000)
});

function getUser(id, callBack){
setTimeout(()=>{
console.log('db processing... ');
callBack({username: 'Abu Adnaan', id: 1 });

}, 2000);
}
let res;
for(let i=0; i<Math. pow(5,13); i++){
res = i;
}
console.log(res, 'for loop result');
console.log ('last log')
*/