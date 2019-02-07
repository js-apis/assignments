/* a Book cosntructor `class` - Classes start with capital letter by convetion */
function Person(data) {
  // Properties
  this.name = data.name;
  this.height = data.height;
  this.eye_color = data.eye_color;
  this.gender = data.gender;
  this.films = data.films;

  // Methods - methods are functionalities that every object inherits. AKA it "comes out of the box" with those functionalities
  this.render = function() {
    // explain what the hell querySelector is.
    var containerEl = document.querySelector('#container');
    // explain this one as well
    var personEl = document.createElement('div');

    // <div class="book red hardcover"></div>
    personEl.classList.add('person');

    var nameEl = document.createElement('h3');
    nameEl.innerText = this.name;
    nameEl.classList.add('name');

    var heightEl = document.createElement('span');
    heightEl.innerText = this.height;
    heightEl.classList.add('height');

    var eye_colorEl = document.createElement('span');
    eye_colorEl.innerText = this.eye_color;
    eye_colorEl.classList.add('eye_color');

    var genderEl = document.createElement('span');
    genderEl.innerText = this.gender;
    genderEl.classList.add('gender');

    var filmsEl = document.createElement('p');
    filmsEl.innerText = this.films;
    filmsEl.classList.add('films');

    personEl.append(nameEl);
    personEl.append(heightEl);
    personEl.append(eye_colorEl);
    personEl.append(genderEl);
    personEl.append(filmsEl);

    containerEl.append(personEl);
  }

}

// This is a good example of Asycnhronous JavaScript code. We handle asynchrony using what is known as a `callbak function`
document.addEventListener("DOMContentLoaded", function(event) {

  var req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', './data.json', true);
  req.onload  = function() {
     
var data = req.response;
     // do something with jsonResponse
    var persons = [];
    for (var i = 0; i < data.length; i ++) {
      var personsData = data[i];
      var person = new Person(personsData);
      // `push` is a `method` on Arrays (e.g: books Array) that allows us to add an item at the end of an array
      persons.push(person);
      person.render();
    }
  };


  

  
   req.send(null);
  

});







