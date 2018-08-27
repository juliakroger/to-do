document.querySelector("h1").style.background = "#1f1415";


let database = [];

let loginUsername = document.getElementById("loginUsername");
let loginPassword = document.getElementById("loginPassword");
let buttonLogin = document.getElementById("login");

let regiName = document.getElementById("regiName");
let regiEmail = document.getElementById("regiEmail");
let regiUsername = document.getElementById("regiUsername");
let regiPassword = document.getElementById("regiPassword");
let regiPasswordCheck = document.getElementById("regiPasswordCheck");
let buttonRegister = document.getElementById("register");


//register functions
function checkPasswords(){
	if (regiPassword.value === regiPasswordCheck.value){ 
		return true;
	}
	else {
		return false;
	}
}
function checkUsername(){
	for(let i=0;i<database.length;i++){
		if(regiUsername.value === database[i].username){
			return false;
		}
	}
	return true;
}
function checkEmail(){
	for(let i=0;i<database.length;i++){
		if(regiEmail.value === database[i].email){
			return false;
		}
	}
	return true;	
}
function clearRegister(){
	regiName.value = "";
	regiEmail.value = "";
	regiUsername.value = "";
	regiPassword.value = "";
	regiPasswordCheck.value = "";
}
function dataRegister(){
	let i = database.length;
	database[i] = {
		name: regiName.value,
		email: regiEmail.value,
		username: regiUsername.value,
		password: regiPassword.value
	};
	console.log(database[i]);
	clearRegister();
}
function register(){
	if(checkPasswords()){
		if(checkUsername()){
			if (checkEmail()){
				dataRegister();
			}
			else{
			alert(`This email is already being used`);
			regiEmail.value = "";
			}
		}
		else{
			alert(`This username is already being used`);
			regiUsername.value = "";
		}
	}
	else{
		alert(`Different passwords`);
		regiPassword.value = "";
		regiPasswordCheck.value = "";
	}
}



//login functions
function clearLogin(){
	loginUsername.value = "";
	loginPassword.value = "";
}

function login(){
	let valid = false;
	for(let i=0;i<database.length;i++){
		if(loginUsername.value === database[i].username && loginPassword.value === database[i].password){
			console.log(`welcome ${database[i].name}`);
			valid = true;
			window.location.href = "todo.html";
		}
	}
	if(valid === false){
	 alert(`This login is not registered`);
	}

	clearLogin();
}


buttonLogin.addEventListener("click",() => {
	login();
	});

loginPassword.addEventListener("keypress", () => {
	if (event.keyCode === 13){
	login();
	}
	});

buttonRegister.addEventListener("click", () => register() );


regiPasswordCheck.addEventListener("keypress", () => {
	if (event.keyCode === 13){
	register();
	}
	});

