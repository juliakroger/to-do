document.querySelector("h1").style.background = "#1f1415";

let button = document.getElementById("addButton");
let input = document.getElementById("inputAdd");
let ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function addItens(){
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li); 
	input.value = "";

	li.addEventListener("click", function() {
let finished = this.classList.toggle("done");})
}


function addIntensClick(){
	if (inputLength() > 0) addItens();
}

function addIntensEnter(event){
	if (inputLength() > 0 && event.keyCode === 13) addItens();
}

button.addEventListener("click", addIntensClick);
input.addEventListener("keypress", addIntensEnter);



