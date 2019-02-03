//   <!-- If we import libraries to our code, we usually put it at the top  -->
//   <!-- Download this file, and follow the code example from last night in class, to print out Star Wars characters to your HTML page. Bonus points for good CSS Styling (but you don't have to!)

// At minimum, print out the following data points for each Star Wars character:

// - name
// - height
// - eye_color
// - gender

// Instead of creating a `Book` class, just call it `Person`. 
// -->

function Person(data){
	this.name = data.name;
	this.height = data.height;
	this.eye_color = data.eye_color;
	this.gender = data.gender;

	this.render = function(){
		var containerEl = document.querySelector('#container');
		var personDivEl = document.createElement('div');
		containerEl.append(personDivEl); //  position in html and div

		personDivEl.classList.add('personDivEl');  ///for CSS class for the div

		var nameEl = document.createElement('h3');
		nameEl.innerText = this.name;

		// var brEl = document.createElement('span');       ///////////Fail attempt to add an empty line
		// brEl.innerText = '<br>'

		var heightEl = document.createElement('span');
		heightEl.innerText = this.height;

		var eye_colorEl = document.createElement('span');
		eye_colorEl = this.eye_color;

		var genderEl = document.createElement('span');
		genderEl.innerText = this.gender;

		personDivEl.append(nameEl);
		personDivEl.append(heightEl);
		personDivEl.append(eye_colorEl);
		personDivEl.append(genderEl);
		// personDivEl.append(brEl);
	}

}

document.addEventListener('DOMContentLoaded', function(event){
	var req = new XMLHttpRequest();

	req.responseType = 'json';

	req.open('GET','./data.json', true);

	req.onload = function(){
		var data = req.response;
		var allPersons = [];

		console.log('See what we get:' + data);

		for (var i=0; i<data.length; i++){
			console.log('here is NO.'+ (i+1) + ':' + data[i]);
			var personData = data[i];

			var person = new Person(personData);

			allPersons.push(person);

			person.render();
		}
	};
	req.send(null);
});





