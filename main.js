console.log('hello from main.js!');

var nums = [];

var i = 9;

var rand;

var row;

var html = `<colgroup>
		<col width="5%"><col width="5%">
        <col width="5%"><col width="5%">
        <col width="5%"><col width="5%">
        <col width="5%"><col width="5%">
        <col width="5%"><col width="5%">
        <col width="5%"><col width="5%">
        <col width="5%"><col width="5%">
        <col width="5%"><col width="5%">
        <col width="5%"><col width="5%">
        <col width="5%"><col width="5%">
		</colgroup>`


function randomNumber(max) {

	return Math.floor(Math.random() * Math.floor(max));

}


function makeBar(max) {

	rand = randomNumber(max);

	$('table').append('<tr id= "' + rand + '"><td colspan=' + rand + ' style="height: 20px; background: #684791; margin: 10px;">' + rand + '</td></tr>');

	console.log(rand);

	nums.push(rand);

}


$('#step').click(function(){

	$('table').html(html)

	if (i == 0) {

		i = 10;

	} 

	if (nums[i] > nums[i - 1]) {

		var temp = nums[i];

		nums[i] = nums[i - 1];

		nums[i - 1] = temp;

		rowOne = $('#'+nums[i]);

		rowTwo = $('#'+nums[i - 1]);

		rowOne.css("background", "#cfa3ff");

		rowTwo.css("background", "#a984ce");

		rowTwo.insertBefore(rowTwo.prev());

	} 

	i --;

	for (var k = 0; k < nums.length; k++) {

		$('table').append('<tr id= "' + nums[k] + '"><td colspan=' + nums[k] + ' style="height: 20px; background-color: #684791; margin: 10px;">' + nums[k] + '</td></tr>');

	}

});

	
$('#shuffle').click(function() {

	nums = [];

	$('table').html(html)

	for (var j = 0; j < 10; j++) {

		makeBar(100);

	}

});







