$(document).ready(function(){
    $('#clickMe').click(function(){
       callApi();
    });
  });

var crime = ['KIDNAPPING', 'MURDER', 'ROBBERY'];

var punishment = ['deep fried in oil', 'run over by 50 bulls', 'fed to warewolves'];

var number = [1, 2, 3, 4, 5];

function api(item){
	var i = randomNumGenerator(item);
	var crimerecord = item[i];
	return crimerecord;
}

function callApi(){
	console.log("You are charged for " + api(crime) + " of " + api(number) + " people and you will be " + api(punishment));
}


function randomNumGenerator(arrayName) { 

	return Math.floor(Math.random()*arrayName.length);
}
