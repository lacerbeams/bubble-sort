console.log('hello from main.js!');

var nums = [];

var i = 9;

var k;

var l;

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

function sort(){

	console.log(nums);

	$('table').find('td').css('background', '#684791');

	if (i - k == 0) {

		i = 9;

		k++;

	} 

	if (nums[i] > nums[i - 1]) {

		var temp = nums[i];

		nums[i] = nums[i - 1];

		nums[i - 1] = temp;

		rowOne = $('#'+nums[i]);

		rowTwo = $('#'+nums[i - 1]);

		console.log(nums[i], nums[i-1]);

		rowOne.html('<td colspan=' + nums[i] + ' style="height: 20px; background: #b9a0db; margin: 10px;">' + nums[i] + '</td></tr>');

		rowTwo.html('<td colspan=' + nums[i - 1] + ' style="height: 20px; background: #8d6eb5; margin: 10px;">' + nums[i - 1] + '</td></tr>');

		rowTwo.insertBefore(rowTwo.prev());

	} else {

		rowOne = $('#'+nums[i]);

		rowTwo = $('#'+nums[i - 1]);

		rowOne.html('<td colspan=' + nums[i] + ' style="height: 20px; background: #b9a0db; margin: 10px;">' + nums[i] + '</td></tr>');

		rowTwo.html('<td colspan=' + nums[i - 1] + ' style="height: 20px; background: #8d6eb5; margin: 10px;">' + nums[i - 1] + '</td></tr>');
	}

	i--;

	if (nums[0] > nums[1] 
		&& nums[1] > nums[2] 
		&& nums[2] > nums[3] 
		&& nums[3] > nums[4] 
		&& nums[4] > nums[5] 
		&& nums[5] > nums[6] 
		&& nums[6] > nums[7] 
		&& nums[7] > nums[8] 
		&& nums[8] > nums[9]) {

		$('#step').prop('disabled', 'true');

		$('#step').css('background-color', 'grey');

		$('table').find('td').css('background', '#684791'); 

		console.log('Sorting Complete!');

	}	

}

	
$('#shuffle').click(function() {

	$('#step').removeAttr('disabled');

	$('#step').css('background-color', '#684791');

	nums = [];

	k = 0;

	i = 9;

	$('table').html(html)

	for (var j = 0; j < 10; j++) {

		var rand = randomNumber(100);

		if (!nums.includes(rand)) {

			nums.push(rand);
			
		}


	}

	nums.forEach(function(num) {

		$('table').append('<tr id= "' + num + '"><td colspan=' + num + ' style="height: 20px; background: #684791; margin: 10px;">' + num + '</td></tr>');
		
	});

});


$('#step').click(sort);





