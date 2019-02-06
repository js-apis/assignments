var names = ['Claire', 
			'Allison', 
			'Sriya', 
			'Riley', 
			'Fifi'
			];

var quotes = ['"If my antidepressants kick in before yours, I got you." ',
			'"Look at all the trees I killed!" ',
			'"I\'m laughing like a squirt bottle at that. Ksksksksksksks" ',
			'"What are the holidays if not alcohol?"',
			'"Ughhh when can we have enough disposable income to buy land for fun?" '
			];


// function printQuotes (arr1,arr2) {
// 	for (var i = 0; i < arr1.length; i++) {

// 		console.log(arr1[i], 'said:', arr2[i]);
// 	}

// }

// printQuotes(names,quotes);



function writeQuotes(arrn,arrq){
	for (var i = 0; i < arrn.length && i < arrq.length; i++) {
	 document.getElementById('showQuotes').innerHTML += (arrn[i] + ' said: ' + arrq[i] + '<br />' + '<br />');

	 console.log(arrn[i], 'said:', arrq[i]);
	}
	// document.getElementById('showQuotes').innerHTML = 'test';
}

// writeQuotes(names,quotes);