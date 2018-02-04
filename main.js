console.log('hello from main.js!');

var nums = [];

var i = 9;

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


$('#step').click(function(){

	console.log(nums);

	$('table').find('td').css('background', '#684791');

	if (i == 0) {

		i = 9;

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

	} 

	i --;

});

	
$('#shuffle').click(function() {

	nums = [];

	$('table').html(html)

	for (var j = 0; j < 10; j++) {

		var rand = randomNumber(100);

		nums.push(rand);

	}

	nums.forEach(function(num) {

		$('table').append('<tr id= "' + num + '"><td colspan=' + num + ' style="height: 20px; background: #684791; margin: 10px;">' + num + '</td></tr>');
		
	});

});







