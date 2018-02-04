console.log('hello from main.js!');

var nums = [];

var i = 9;

var rand;

var row;

var shifted = true;

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

	nums.push(rand);

}


$('#step').click(function(){

	console.log(nums);

	$('table').find('td').css('background', '#684791');

	if (i == 0) {

		i = 9;

	} 

	rowOne = $('#'+nums[i]);

	rowTwo = $('#'+nums[i - 1]);

	console.log(nums[i], nums[i-1]);

	rowOne.html('<td colspan=' + nums[i] + ' style="height: 20px; background: #b9a0db; margin: 10px;">' + nums[i] + '</td></tr>');

	rowTwo.html('<td colspan=' + nums[i - 1] + ' style="height: 20px; background: #8d6eb5; margin: 10px;">' + nums[i - 1] + '</td></tr>');

	do {

		shifted = false;

		if (nums[i] > nums[i - 1]) {

			var temp = nums[i];

			nums[i] = nums[i - 1];

			nums[i - 1] = temp;

			rowTwo.insertBefore(rowTwo.prev());

			shifted = true;

		} 

	} while (shifted == true)

	i --;

});

	
$('#shuffle').click(function() {

	nums = [];

	$('table').html(html)

	for (var j = 0; j < 10; j++) {

		makeBar(100);

	}

});







