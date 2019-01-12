const url = "http://www.howtogeek.com";

const sum = (a, b) => a + b;

module. exports. calc = sum;
module. exports. domain = url;
module. exports = {sex:'Male', url, sum};
console.log ("this is from logger");

const EventEmitter = require ("events");

class Log extends EventEmitter {

log(){
console.log ("logging data... ");
this. emit('click', "this is my data")
}

}
const myMiddleWare = (req, res, next) =>{
console.log ('This is my custom middleware');
next();
}

module. exports = myMiddleWare ;