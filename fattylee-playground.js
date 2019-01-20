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

const mongoose = require('mongoose');
//import mongoose from 'mongoose';

mongoose. connect('mongodb://localhost/ummu', { useNewUrlParser: true })
.then(()=> console.log('Mongodb server is connected... '))
. catch((err) =>console.log('Mongodb server error', err ));

const Person = mongoose. model('Person', new mongoose. Schema({
name: {type: String, required: true, lowercase: true,trim: true, match: /^[a-z]{2,}(\s{1,2}[a-z]{2,})?$/i },
age: {type: Number, required: true,  }

}));

async function createPerson() {
try {
	let person = new Person({
	name : 'Khan  ',
	age: 37,
	});
	
	person = await person. save();
	console.log(person)
} catch(err) {
	console.log('Could not create a person', err. message );
}
};

async function getPersons() {
try {
	const persons = await Person. find();
	console.log(persons);
}catch (err ) {
	console.log ('Could not get persons', err)
}
}

//createPerson();
getPersons();