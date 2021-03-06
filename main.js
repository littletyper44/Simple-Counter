//variables
var counter = 0;
var increase = document.getElementById('increment');
var decrease = document.getElementById('decrement');

var counterDisplay = document.getElementById('amount');

function add(){
	counter++;
	counterDisplay.innerHTML = counter;
}
function subtract(){
	if (counter == 0) {
		alert('sorry, cant subtract nothing.');
	} else {
	counter -= 1;
	counterDisplay.innerHTML = counter;
	}
}
