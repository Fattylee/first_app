const mongoose = require('mongoose');
const faker = require('faker');

mongoose. connect('mongodb://localhost/hackme')
.then(()=>{
console.log ('Connection to mongodb server was successful');
})
. catch((e)=>{
console.error('mongodb error occurred:', e)
})

// create schema
const personSchema = new mongoose. Schema({
name: {
	type:String,
	required: true,
	uppercase: true,
	maxlength: 50,
	minlength: 2,
	match: /^[a-z]+( [a-z]+){,2}$/i,
	trim: true, 
},

age: { type: Number, required: true },

friends: [String],

birthday: {type: Date, default: Date.now, required: true },

isMarried: Boolean,

gender: { type: String , required: true, enum: ['male', 'female'], lowercase: true } ,

});

// create model
const Person = mongoose. model('Person', personSchema);

async function createPerson(){

	const person1 = new Person({
	name : faker. name. firstName(),
//	friends: [faker. internet. userName() , faker. name. lastName() ],
//	isMarried: (Math. floor(15 * Math. random()) % 2) ? true :false,
//	birthday: faker. date. past(),
	age: '5', 
//	age: faker. random. number(),
	gender: 'Male', 
	// gender: (Math. floor(15 * Math. random()) % 2) ? 'male' : 'female', 
	});
	
	try {
		const person = await person1. save();
		console.log ( person);
	} catch(err) {console. error( err. message )}
}

//for (let el in new Array(100).fill(0))

createPerson();

//getPersons();

//updatePerson();

// deletePerson();

//printPerson(createPerson);

// for (let i=0; i<10; i++) createPerson();
//for( p in [45]) console.log(p);

async function  getPersons() {
try {
//	const persons = await Person. findById({_id:'5c3e03989fa2e206972061f2'});
return await Person. find()
		//.and([{name: /.*Abu Adnaan.*/i}])
	//	. or([{__v: {$gt: 0}}, {isMarried: true}, {name: /.*b*/i}])
	//	. count()
	//	. select('name')
	//	. skip(10)
		. sort('name')
	//	. limit(20)
;
} catch (err) {console.log ('can\'t get persons', err)}
}

async function deletePerson() {
return await Person.
//deleteOne({isMarried: false})
//deleteMany({age: {$gt: 1000}})
findByIdAndRemove('5c3f68acdea88f782bc7f252');
}

async function updatePerson() {

try {
const person = await Person
//.find({name: /.*Abu.*/i})
.findById('5c3df79e1aa988790b89751f');
if(!person) return console.log('course not found');
const v = [...person. friends]; v.shift();
//person. friends = v;
person. set({friends: [... person. friends,'Ummu AbdiLLaah', 'Abdullah', 'Abdurraheem']})
//const v = [...person. friends];
//v. pop('Ummu AbdiLLaah', 'Abdurraheem') ;
//person. friends = v;
// person. set ({friends: [...person. friends,'mujaahid', 'Ummu AbdiLLaah', 'Abdurraheem']}) ;
// person. friends = ['mujaahid'];
//console.log (person )
return  await person. save();

/*Update without retrieve
ModelName. update(
{filter parameters},
//min, max, inc, mul, set, unset
{ $set: {fields}}
);

ModelName. findByIdAndUpdate(id, {update field}, {new: true})

*/
}catch(err){
console.log('update error', err);
}
}


async function printPerson(callBack) {
const res = await callBack();
console.log(res);
}