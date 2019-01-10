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

module. exports = Log;