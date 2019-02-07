function StarWar(data){
	this.name = data.name;
	this.height = data.height;
	this.eye_color = data.eye_color;
	this.gender = data.gender;
    this.homeworld = data.homeworld;

	this.render = function(){
		var containerEl = document.querySelector('#container');
		var starwarEl = document.createElement('div');
		starwarEl.classList.add('starwar');

		var nameEl = document.createElement('h3');
		nameEl.innerText = this.name;
		nameEl.classList.add('name');

		var eye_colorEl = document.createElement('span');
		eye_colorEl.innerText = this.eye_color;
		eye_colorEl.classList.add('eye_color');

		var genderEl = document.createElement('span');
		genderEl.innerText = this.gender;
		genderEl.classList.add('gender');

		var homeworldEl = document.createElement('span');
		homeworldEl.innerText = this.homeworld;
		homeworldEl.classList.add('homeworld');

		var heightEl = document.createElement('p');
		heightEl.innerText = this.height;
		heightEl.classList.add('height');

		starwarEl.append(nameEl);
		starwarEl.append(eye_colorEl);
		starwarEl.append(genderEl);
		starwarEl.append(homeworldEl);
		starwarEl.append(heightEl); //put all <>  into one div bookEl


		containerEl.append(starwarEl);
	}


}


document.addEventListener('DOMContentLoaded', function(event) {

 
  var req = new XMLHttpRequest();

  req.responseType = 'json';

  req.open('GET', './assigndata.json', true);
 
  req.onload  = function() {
 
    var data = req.response;
    
    var books = [];
   
    console.log('Here is all the book data we got from ./data.json: ', data);
    for (var i = 0; i < data.length; i ++) {
     
      console.log('We are on book data number ', i, ' and the book data is: ', data[i]);
      var bookData = data[i];
     
      
      var starwar = new StarWar(bookData);

     
      books.push(starwar);
      
      starwar.render();
    }

  };


  req.send(null);

});


