console.log('hello from main.js!');

//define variables

var nums = [];

var i = 9;

var k;

//this allows us to have different widths for table rows

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

	//this resets the bars back to the default color

	$('table').find('td').css('background', '#684791');

	//this counts how many times a number has been pushed to the top and keeps us from iterating over them again

	if (i - k == 0) {

		i = 9;

		k++;

	} 

	//this is the bubble sort logic
	//because the assignment asks for the larger numbers at the top, we are working backwards through the array

	if (nums[i] > nums[i - 1]) { //if the current number is larger than the next number

		var temp = nums[i]; //store that number

		nums[i] = nums[i - 1]; //swap

		nums[i - 1] = temp; //swap

		rowOne = $('#'+nums[i]); 

		rowTwo = $('#'+nums[i - 1]);

		//this changes the colors of the bars

		rowOne.html('<td colspan=' + nums[i] + ' style="height: 20px; background: #b9a0db; margin: 10px;">' + nums[i] + '</td></tr>');

		rowTwo.html('<td colspan=' + nums[i - 1] + ' style="height: 20px; background: #8d6eb5; margin: 10px;">' + nums[i - 1] + '</td></tr>');

		//this pushes the row up

		rowTwo.insertBefore(rowTwo.prev());

	} else { //if it is not larger, we still need to change the colors

		rowOne = $('#'+nums[i]);

		rowTwo = $('#'+nums[i - 1]);

		rowOne.html('<td colspan=' + nums[i] + ' style="height: 20px; background: #b9a0db; margin: 10px;">' + nums[i] + '</td></tr>');

		rowTwo.html('<td colspan=' + nums[i - 1] + ' style="height: 20px; background: #8d6eb5; margin: 10px;">' + nums[i - 1] + '</td></tr>');
	}

	i--; //iterates backwards

	//this manually checks if the top is larger than the one beneath, and so on. Would refactor given more time

	if (nums[0] > nums[1] 
		&& nums[1] > nums[2] 
		&& nums[2] > nums[3] 
		&& nums[3] > nums[4] 
		&& nums[4] > nums[5] 
		&& nums[5] > nums[6] 
		&& nums[6] > nums[7] 
		&& nums[7] > nums[8] 
		&& nums[8] > nums[9]) {

		//if it passes, disable the step button and reset the colors

		$('#step').prop('disabled', 'true');

		$('#step').css('background-color', 'grey');

		$('table').find('td').css('background', '#684791'); 

		console.log('Sorting Complete!');

	}	

}

	
$('#shuffle').click(function() {

	//enable the button

	$('#step').removeAttr('disabled');

	$('#step').css('background-color', '#684791');

	//reset our variables

	nums = [];

	k = 0;

	i = 9;

	$('table').html(html) //clear the bars

	//fill the array with random numbers

	for (var j = 0; j < 10; j++) {

		var rand = randomNumber(100);

		if (!nums.includes(rand)) { //make sure there are no duplicates

			nums.push(rand);
			
		} else {

			j--; //this keeps it from stopping short after skipping a duplicate number

		}

	}

	//make the bars

	nums.forEach(function(num) {

		$('table').append('<tr id= "' + num + '"><td colspan=' + num + ' style="height: 20px; background: #684791; margin: 10px;">' + num + '</td></tr>');
		
	});

});


$('#step').click(sort);





