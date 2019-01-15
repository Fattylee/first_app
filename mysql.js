const express = require ("express");
const mysql = require('mysql');

// connect to the database
const connection = mysql. createConnection({
hostname: 'localhost',
user: 'root',
database: 'abu', 
});

// optional
connection. connect();

let query = "create table hack(id int, name varchar(255));";

query = 'insert into hack (name) values("Haleemah"), ("Abu Adnaan"), ("AbdulFattah"), ("Abdullah");';

query = 'select * from hack;';

query = 'alter table hack modify id int not null primary key auto_increment';

query = 'insert into hack (name) values("Sulyman"), ("Ridwan"), ("A\'isha");';

query = 'select * from hack';

connection. query(
	query,
	(err, result, field)=>{
	if(err) throw err;
	console.log ('res:', result);
	}
);

connection. end();

const app = express ();

app. get('/', (req, res)=>{
res. status(200). send('This is my mysql - express app!');
});

const port = process. env. PORT || 4000;
app. listen (port, ()=>{
console.log ('Server running on port', port, '... ');
});