const mongoose = require('mongoose');

mongoose. connect('mongodb://localhost/hackme')
.then(()=>{
console.log ('Connection to mongodb server was successful');
})
. catch((e)=>{
console.error('mongodb error occurred:', e)
})

// create schema
const personSchema = new mongoose. Schema({
name: String,
age: {default: 10, type: Number},
friends: [String],
birthday: {type: Date, default: Date.now},
isMarried: Boolean, 
});

// create model
const Person = mongoose. model('Person', personSchema);

const person1 = new Person({
name : 'Abu Adnaan',
friends: ['Abdullah', 'Ummu AbdiLLaah', 'Abdurraheem'],
isMarried: true
});

person1. save()
.then((res)=>{
	console.log ('Person crated:', res);
})