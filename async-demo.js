const signUp = (info, emailConfirmation)=>{
	setTimeout(()=>{
	info. token = 6;
	console.log ('Processing registration...');
	console.log (info.username,'message was sent to ur email for verification');
	emailConfirmation(info.token);
	}, 2000);
}

const emailConfirmation = (token) => {
	setTimeout(function(){
		if (5 === token){
		console.log ('Registration complete, u can now login!');
		}else {
		console.log ('invalid token, registration unsuccessful... ');
		}
	}, 2000);
}

const payload = {name: 'Abu Adnaan', 'username':'Fattylee', password: 'password@212'};

signUp(payload, emailConfirmation);