const Joi = require('joi');
const schema = {
name: Joi 
	.string()
	//.email('@.-')
	//. alphanum()
	//. min(7)
	//. regex(/.{5}/)
	//. ip()
	//. length(6)
	//. max(11)
	//. lowercase()
	//. trim()
	//. uppercase()
	//. uri()
	//. normalize()
	.required(),
phone: Joi. number()
		//. integer()
		//. greater(60)
		//. negative ()
		//. positive()
		//. less(6)
		//. precision(2)
		//. max(2)
		//. min(7)
		//. multiple(11)
		. required(), 
birthday: Joi. date()
		.min(Date())
	//  .max(date)
	//  .greater(date)
	 // .less(date)
	 // .iso()
	  // .timestamp([type])
	 . required(),
tags: Joi. array()
	     .sparse()
	// .single([enabled])
	// .items(type)
	// .ordered(type)
	// .min(limit)
	// .max(limit)
	//	.length(31)
	// .unique([comparator], [options])
	// .has(schema)
	. required(), 
};

const {error, value} = Joi. validate({
name: 'https:/' ,
phone: 77,
birthday: '2987-06-23',  //'1987/6/23 04:23:26'
tags: new Array(31), 
}, schema );

if(error)
console.log (error. details[0]. message );

else console.log(value);
//console.log ('This is joi')