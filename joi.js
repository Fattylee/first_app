const Joi = require('joi');
const schema = {
name: Joi.string(). alphanum(). min(4).required(), 
};

const result = Joi. validate({
name: 'dWg', 
}, schema );
console.log (result. error. details[0]. message )