function sayHello(name){
console.log("Hello " + name);
}
/*
sayHello("Abu Adnaan");
sayHello ("Ummu AbdiLLaah");

const range = (min, max) => Math. floor(Math. random() *( 1+max-min) ) + min;
for (let i=0; i<10; i++)
console.log (range (3,7));
console.log (454,"Haleemah", "Akeem", true, {name: 'Sa"ed'});
console.log ("toTimeString('vvv')", 89);
const nm = "abuse";
console.log ("Abu Dhabi", "Haleemah", nm);
*/

// const obj = require('./logger');
// console.log (obj. sum(20, 76));
/*
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter. on("click", (a, b, c)=>{
console.log("You clicked!", a, b, c);
});

emitter. emit("click", "Haleemah", 3, {name: 'Abu Adnaan', age:31});
*/
const Logger = require('./logger');
console.log (Logger )
const logger = new Logger();

logger. on("click", (args)=>{
console.log ("this is a click handler:", args)
});
logger. log();

const http = require ("http");
const server = http. createServer((req, res)=>{
if (req. url == "/"){
res. write("This is from server");
console.log ("ToString and other whatsapp groups ")
res. end();
}

});

server. listen(8081);
console.log('Listening on port 4000');
const path = require("path");
console.log (path. parse(__filename,  __dirname  ))
//const _ = require('underscore');
const Joi = require('joi');

const schema = Joi. string(). min(3). required();

const result =Joi. validate("", schema);
console.log (result. error );