const mysql = require('mysql');
const faker = require('faker');

console.log(faker)
//name, date, lorem, internet, address, company, system, commerce, phone, database, hacker, image, finance, helpers, random, locales 
const category = 'date';
for (let p in faker[category]){
console.log (`${p}: ${faker[category][p]()}`)
}
// connect to the database
const connection = mysql. createConnection({
hostname: 'localhost',
user: 'root',
database: 'abu', 
});

// optional
//connection. connect();

let query = "create table hack(id int, name varchar(255));";
let values;

query = 'insert into hack (name) values("Haleemah"), ("Abu Adnaan"), ("AbdulFattah"), ("Abdullah");';

query = 'select * from hack;';

query = 'alter table hack modify id int not null primary key auto_increment';

query = 'insert into hack (name) values("Sulyman"), ("Ridwan"), ("A\'isha");';

query = 'select * from hack';

query = 'select ?;';
values = ['current_timestamp'];

query = 'select ? * ? ? ;';
values = [4,8, 'result'];

query = 'select upper(?) ?';
values = ['hello', '566'];

query = `create table fake(
id int primary key not null auto_increment,
name varchar(255),
created_at TIMESTAMP DEFAULT NOW()
);`;

/*
const startTime = Date.now();
for(let i =0 ; i <82; i++){
query = `Insert into fake(name, created_at) values (? , ?)`;

values = [faker.internet.userName(),
 faker. date. past(), 
 faker. name. firstName(), faker.name. findName()];
//query = "SELECT date_format('98/02/03 10:05:03', 'year: %y,  %m');";

connection. query(
	query,
	values, 
	(err, result, field)=>{
	if(err) throw err;
	console.log ('res:', result);
	if( i == 81){
		const endTime = Date. now();
		console.log ('Total time spent', endTime - startTime );
	}
	}
);
}
*/
connection. end();



