console.log('hello from main.js!');

function randomNumber(max) {

	return Math.floor(Math.random() * Math.floor(max));

}

function makeBar(max) {

	var rand = randomNumber(max);

	$('table').append('<tr><td colspan=' + rand / 5 + ' style="height: 20px; background-color: #684791; margin: 10px;"></td></tr>');

	console.log(rand);

}

for (var i = 0; i < 10; i++) {

	makeBar(100);

}