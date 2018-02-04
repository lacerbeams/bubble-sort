console.log('hello from main.js!');

var nums = [];

var i = 9;

var k;

var l;

var row;

var sorted = false;

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


function randomNumber(max) { //we have to do it this way because if we just populate the array with Math.random it can give us duplicate numbers and the sorting will get messed up

	var random =  Math.floor(Math.random() * Math.floor(max)); 

	var randomArray = [];

	number = 0;

	while (randomArray.length < max) {

		randomArray.push(number); 

		number++;

	} 

	var currentIndex = randomArray.length; 

	var randomIndex;
	
	var tempNum; 

	  while (currentIndex != 0) {

	    randomIndex = Math.floor(Math.random() * currentIndex);

	    currentIndex -= 1;

	    tempNum = randomArray[currentIndex];

	    randomArray[currentIndex] = randomArray[randomIndex];
	    
	    randomArray[randomIndex] = tempNum;
	  }

  return randomArray[random];

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

		$('table').find('td').css('background', '#684791'); 

		alert('Sorting Complete!');

	}	

	// for (l = 0; l < nums.length; l++) {

	// 	if (nums[l] < nums[l + 1]) { 

	// 		sorted = true; 

		// } else {

		// 	sorted = false;

		// }

	// }

	// if (l == nums.length && sorted == true && Math.max.apply(Math, nums) == nums[0] && Math.min.apply(Math, nums) == nums[nums.length - 1]) { 

	// 	$('#step').prop('disabled', 'true'); 

	// 	alert('Sorting Complete!'); 
	// };
}

	
$('#shuffle').click(function() {

	// $('#step').removeAttr('disabled');

	nums = [];

	k = 0;

	$('table').html(html)

	for (var j = 0; j < 10; j++) {

		var rand = randomNumber(100);

		nums.push(rand);

	}

	nums.forEach(function(num) {

		$('table').append('<tr id= "' + num + '"><td colspan=' + num + ' style="height: 20px; background: #684791; margin: 10px;">' + num + '</td></tr>');
		
	});

});


$('#step').click(sort);





