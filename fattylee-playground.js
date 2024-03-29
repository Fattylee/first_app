//console.log(Array. prototype );
// const obj = {id: 2, name: 'Abu Adnaan', isRich: true}
//console.log (Object. keys(obj) );
//for (let p in obj) console.log(p)
//for (let p in Array. prototype ) console.log(p)

/*
const arr = new Array(30);
console.log (arr. length, arr. fill(1));
new Array(20). fill(3) . forEach((e, i)=>console.log('Allaah is the greatest', i+1))

range = (size=10, val='0') => {
return new Array(size).fill(val);
}

range(40). forEach((el, i) => console.log('now u know', i+1));

for (let i in new Array(20).fill(0)) console.log("ftf")
*/

// console.log ("hurray it is working");
//const [val,... res] = Object. keys({age: 11, name: 23, val: [55,67]}) ;
// let [val,...res] = Object. keys([45,67,78,77]) ;

// this is still a shallow copy. 
// const arr = [17, [56,4, ['mujaahid']]];
// const newArr = [... arr]; newArr[1][2]. push(10)
// [first, ... val] = arr;
// val[7]. push (45);
// console.log (val, arr)
// deep copy
//const newArr = JSON. parse (JSON. stringify(arr)); newArr[1][2]. push(10);
// console.log(arr,'\n',  newArr);

// let searchStr = 'select upper side right corner from islamqa.info\nThis is a new line';

// let regex = /((select)|(upper))/ig;
// regex = /ect/ig;
// console.log (searchStr, regex, searchStr. search(regex));

// console.log (searchStr, regex , regex . test(searchStr ));

//console.log (searchStr, regex , regex . exec(searchStr ))

//console.log (searchStr, '\n', searchStr. replace(regex, '$2**$3'))

//console.log(searchStr, searchStr. match(regex ))
/*
searchStr = `this is the first line
thus is the second line
`;
searchStr = 'fatai balogun';
regex = /^((\w+) ([\w]+))$/;
//regex = /\bnum/g;
//searchStr = '-num is a num that is numVar £numis sternum _num 5num';
console.log (searchStr. replace(regex, '$3 $2 == $1'))
 */

/*
const mongoose = require('mongoose');
//import mongoose from 'mongoose';
const faker = require ('faker');

mongoose. connect('mongodb://localhost/ummu', { useNewUrlParser: true })
.then(()=> console.log('Mongodb server is connected... '))
. catch((err) =>console.log('Mongodb server error', err ));

const Person = mongoose. model('Person', new mongoose. Schema({
name: {type: String, required: true,trim: true, match: [/^[a-z]{2,}(\s{1,2}[a-z]{2,})?$/i, 'the name field should match this. eg "Abu Adnaan"'] },
age: {type: Number, required: [true, 'Why no age?'], min: 1  }

}));

async function createPerson(name = faker. name. firstName(), age= faker.random.number(120)) {
	try {
		let person = new Person({
		name,
		age,
		});
		
		person = await person. save();
		console.log(person)
	} catch(err) {
		console.log('Could not create a person', err. message );
	}
}


async function getPersons() {
try {
	const persons = await Person. find({name: / ^a.+/ig}). skip(0)
//. select('name -_id')
//. sort('name')
. distinct('name')
//. countDocuments();
	console.log(persons);
}catch (err ) {
	console.log ('Could not get persons', err)
}
}
/*
async function updatePerson(id) {

// update using findByIdAndUpdate

try {

	const person = await Person. findByIdAndUpdate(id, {$set: {name: 'Brad Traversy '}, age: 56}, {new: true});
	console.log (person);
	*/
	
	/*
	let person = await Person. findById(id);
	if(!person) return console.log('Invalid id:', id);
	person. set({name: 'Mongo DB', age: 10});
	person = await person. save();
	console.log (person );
	*/
	
	/*
	let person = await Person. updateOne({_id: id}, {$set: {name: "Marsh Mason ", age: 60}}, {new: true});
console.log (person );
*/
/*
}catch (err ) {console.log('Can not update person', err. message )}
}
*/
/*
async function deletePerson(id) {
try {

	console.log(await Person. deleteMany({age: {$gt: 150}}))

	const person = await Person. findManyAndDelete ();
	console.log(person);
	*/
	 //deprecated
	 /*
	const person = await Person. findByIdAndRemove(id);
	console.log(person )
	*/
	
	/*
	const person = await Person. deleteOne({_id: id});
	console.log (person);
	
}catch (err ){console.log('Can\'t delete person:', err )}
}

function loop(times, func) {
	new Array(times). fill(0). forEach (()=>
	func()
);
}
*/
//createPerson();
//getPersons();
//updatePerson('5c43e98f06a22b48ce8d00ac');
//updatePerson({_id: '5c43ea77b3d5f551f066c265h'});
//updatePerson('5c43ead1aa991955a2385719');
//updatePerson('5c43ea8ed2b81952d375b5ddt');

//createPerson('Mark', 40)
//deletePerson('5c445a1043d29b564e9eced2');
//getPersons();
//loop(1000, createPerson);

//console.log(Person. Query. base )
/*
const arr = new Array(5). fill(0);
const newArr = arr. map(el => faker. internet. userName());
console.log(arr, newArr )
*/

/*
mysql database practice
*/
const mysql = require('mysql');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require ('body-parser');
const app = express();
const Joi = require('joi');

app. use(morgan('dev'));
app. use(bodyParser . urlencoded({extended: true }));
app. use(bodyParser . json());
app. use (bodyParser . text({ type: 'text/html' }))
const port = process. env. PORT || 3000;


/*
const connection = mysql. createConnection({
host: 'localhost',
user: 'root',
database: 'abu', 
});
*/
const connection = mysql. createConnection('mysql://root:@localhost/abu')
connection. connect((err)=>{
if (err) return console.error  (err);

console.log('Connection to mysql established:', connection. threadId)
});



app. get('/api/persons', (req, res) =>{

let query = 'select id, concat (upper (Substr( name, 1,1)) , Substring(name, 2))  name , age from test order by id desc';

connection. query(query, (err, results, field)=>{
	if (err) return res.status(500). send ( err) ;
	res. status(200). send(results);
});
}); // end Get / all persons

app. get('/api/persons/:id', (req, res) =>{

Joi. validate(req. params, {id: Joi. number(). integer(). required(). greater(0)}, (err)=>{
if(err) return res. status (403). send(err. details[0]. message );
	
	let query = 'select id, concat (upper (Substr( name, 1,1)) , Substring(name, 2))  name , age from test where id = ?;';
	const {id} = req. params; 
	connection. query(query,[req. params. id], (err, results, field)=>{
		if (err) return res.status(500). send ( err) ;
 		if(results. length == 0) return res. status(200). json({message: 'No person with the given id: '+ id });
		res. status(200). send(results[0]);
	});
});
}); // end Get / a single person

app. post('/api/persons', (req, res)=>{
	const { name, age } = req. body ;
	const {error, value } = validate({name, age});
	if(error){
	let msg = error. details[0]. message ;
	if (msg. includes('required pattern')) {
	msg = '"name" can only contains letters, spaces and not more than three names';
	}
	return res. send (msg);
	}
	
	const query = `
	Insert into test values(?,?,?);
	`;
	const values = [null, name, age];
	connection. query(query, values, (err, results, field)=>{
	if (err) return res. status(400).send(err);
	
	res. status(201). json({
	message: 'Successfully created',
	body: {id: results. insertId, name, age}
	});
	
	
}); 
}); // End Post

app. put('/api/persons/:id', (req, res) =>{

Joi. validate(req. params, {id: Joi. number(). integer(). required(). greater(0)}, (err)=>{
if(err) return res. status (403). send(err. details[0]. message );

validate(req. body, true, (err)=>{
if(err) return res. status (403). send(err. details[0]. message );
	
	let query = 'select id, concat (upper (Substr( name, 1,1)) , Substring(name, 2))  name , age from test where id = ?;';
	const {id} = req. params; 
	connection. query(query,[req. params. id], (err, results, field)=>{
		if (err) return res.status(500). send ( err) ;
	 		if(results. length == 0) return res. status(200). json({message: 'No person with the given id: '+ id });
		
		let body = {id, name: results[0]. name , age: results[0]. age};
		console.log (body)
		
		const {name, age} = req. body ;
		
		if (!name && !age) {
		return res. status(201). json({
		message: 'Successfully updated',
		body, 
		});
		}
		
		query = `update test set `;
		if (name){
		body = {...body, name,};
		query += `name='${name}' `;
			if (age) {
			body = {...body, age};
			query +=`,age=${age} `;
			}
		}

		if (age) {
		body = {...body, age};
		query +=`age=${age} `;
		}
		query += `where id =${id}`;

		connection. query(query, (err)=>{
		if (err) return res.status(500). send ( err) ;
		res. status(201). json({
		message: 'Successfully updated',
		body, 
		});
		});
		
	});
});
});
}); // end Put / modify a single person


app. delete('/api/persons/:id', (req, res) =>{

Joi. validate(req. params, {id: Joi. number(). integer(). required(). greater(0)}, (err)=>{
if(err) return res. status (403). send(err. details[0]. message );
	
	let query = 'select id, concat (upper (Substr( name, 1,1)) , Substring(name, 2))  name , age from test where id = ?;';
	const {id} = req. params; 
	connection. query(query,[req. params. id], (err, results, field)=>{
		if (err) return res.status(500). send ( err) ;
 		if(results. length == 0) return res. status(200). json({message: 'No person with the given id: '+ id });

		query = 'delete from test where id =?;';
		connection. query(query, [id], ((err)=>{
		if (err) return res.status(500). send ( err) ;
 		res. status(200). json ({
 		message: 'deleted successfully',
 		body: results[0]
 		});
}));

	});
});
}); // end Delete / a single person

app. post('/api/dev', devHandler);

app. all('*', (req, res )=>{
	res. send('<h1>Page not found!</h1><button><a href="/api/persons" target="_blank">Goto Home route</a></button>');
})
app. listen(port, ()=>console.log('Server running on port', port ));

function validate(data, optional, callBack ) {

let schema;
if (optional){
	schema = {
	name: Joi.string(). min(3). max(50). trim().regex(/^[a-z]{3,50}(\s+[a-z]{3,50}){0,2}$/i)
	, 
	age: Joi. number(). positive(). integer(). min(1). max(120)
	};
} else {
	schema = {
	name: Joi.string(). min(3). max(50). trim().regex(/^[a-z]{3,50}(\s+[a-z]{3,50}){0,2}$/i).  required()
	, 
	age: Joi. number(). positive(). integer(). min(1). max(120).  required()
	};
}

return Joi. validate(data, schema, callBack);
}

/*
const {error, value } = validate({name: 'Abu Adnaan ', age: 1230});
if(error) return console.log(error. details[0]. message );
console.log ( value )
*/

const bcrypt = require('bcryptjs');
bcrypt. genSalt(10, salt =>{
	console.log(salt);
});

async function run(){
const salt = await bcrypt. genSalt(10);//. then(salt =>console.log(salt))
console.log (salt, 'SALT' );
const hashed = await bcrypt. hash('1234', salt);
console.log (hashed, 'HASH');
const pw = '1234';
let hash = '$2a$10$n68rUjwKvdlIumRSgfPsgulcUtPBqpfJOTCqzRcxVpzD98UrXdHRG';
hash = '$2a$10$CZaJrFlTCI2i9vHDn6ISvuGxetHGfGCqRmmC0xmjOGkaIFr3X1J1a';
hash = '$2a$10$s4sMl8kM/pXsx5ka9rdl3uZhG5Cp/Z3dBUZePOdlp98AKGHhwlHli';
hash = '$2a$10$TJH/OMlt7YQI38LWLAyyO.VQ8TBwyaD3URceddTlZQtP.jVPPF.9i'
const isValid = await bcrypt. compare(pw, hash);
console.log (isValid);
}
run()

function devHandler(req, res) {
let query = 'alter table test add email varchar(255)  NOT NULL, add password varchar(255 )  not null;';

query = 'desc test';

query = 'alter table test add constraint vh unique (email);'

query = "Insert into d values (null, 'ggb', 'gtrb') ";

query = req. body. query;
//query = 'alter table test drop state' ;

connection. query (query, (err, results, field)=>{
if(err) return res. status (400). json({message: err});

return res. status (200). json({message: 'Successfully executed', results});
});

}