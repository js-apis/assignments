/*   Character Class  */

function Character(data) {

  // propaties
  this.name = data.name;
  this.height = data.height;
  this.mass = data.mass;
  this.hair_color = data.hair_color;
  this.skin_color = data.skin_color;
  this.eye_color = data.eye_color;
  this.birth_year = data.birth_year;
  this.gender = data.gender;
  // this.homeworld = data.homeworld;
  // this.films = data.films;
  // this.species = data.species;
  // this.vehicles = data.vehicles;
  // this.starships = data.starships;
  // this.created = data.created;
  // this.edited = data.edited;
  this.url = data.url;

  // methods
  this.render = function() {

    var containerEl = document.querySelector('#container'); // target = container

    // <div class="character"></div>
    var characterEl = document.createElement('div'); 
    characterEl.classList.add('character'); 

    // <h3 class="title">character Title</h3>
    var nameEl = document.createElement('h3');
    nameEl.classList.add('name');
    nameEl.innerText = this.name;

    /* HEIGHT */
    // <div class="height"></div>
    var heightdiv = document.createElement('div');
    heightdiv.classList.add('height');

    // <span class="label">Height: </div>
    var height_labelEl = document.createElement('span');
    height_labelEl.classList.add('label');
    height_labelEl.innerText = "Height: ";

    // <span class="value">XXX</div>
    var heightEl = document.createElement('span');
    heightEl.classList.add('value');
    heightEl.innerText = this.height;

    /* MASS */
    // <div class="mass"></div>
    var massdiv = document.createElement('div');
    massdiv.classList.add('mass');

    // <span class="label">Mass: </div>
    var mass_labelEl = document.createElement('span');
    mass_labelEl.classList.add('label');
    mass_labelEl.innerText = "Mass: ";

    // <span class="value">XXX</div>
    var massEl = document.createElement('span');
    massEl.classList.add('value');
    massEl.innerText = this.mass;

    /* HAIR COLOR */
    // <div class="hair"></div>
    var hairdiv = document.createElement('div');
    hairdiv.classList.add('hair');

    // <span class="label">Mass: </div>
    var hair_labelEl = document.createElement('span');
    hair_labelEl.classList.add('label');
    hair_labelEl.innerText = "Hair Color: ";

    // <span class="value">XXX</div>
    var hairEl = document.createElement('span');
    hairEl.classList.add('value');
    hairEl.innerText = this.hair_color;

    /* SKIN COLOR */
    // <div class="skin"></div>
    var skindiv = document.createElement('div');
    skindiv.classList.add('skin');

    // <span class="label">Skin: </div>
    var skin_labelEl = document.createElement('span');
    skin_labelEl.classList.add('label');
    skin_labelEl.innerText = "Skin Color: ";

    // <span class="value">XXX</div>
    var skinEl = document.createElement('span');
    skinEl.classList.add('value');
    skinEl.innerText = this.skin_color;

    /* EYE COLOR */
    // <div class="eye"></div>
    var eyediv = document.createElement('div');
    eyediv.classList.add('eye');

    // <span class="label">Eye: </div>
    var eye_labelEl = document.createElement('span');
    eye_labelEl.classList.add('label');
    eye_labelEl.innerText = "Eye Color: ";

    // <span class="value">XXX</div>
    var eyeEl = document.createElement('span');
    eyeEl.classList.add('value');
    eyeEl.innerText = this.eye_color;

    /* BIRTH YEAR */
    // <div class="birth"></div>
    var birthdiv = document.createElement('div');
    birthdiv.classList.add('birth');

    // <span class="label">Birth Year: </div>
    var birth_labelEl = document.createElement('span');
    birth_labelEl.classList.add('label');
    birth_labelEl.innerText = "Birth Year: ";

    // <span class="value">XXX</div>
    var birthEl = document.createElement('span');
    birthEl.classList.add('value');
    birthEl.innerText = this.birth_year;

    /* GENDER */
    // <div class="gender"></div>
    var genderdiv = document.createElement('div');
    genderdiv.classList.add('gender');

    // <span class="label">Gender: </div>
    var gender_labelEl = document.createElement('span');
    gender_labelEl.classList.add('label');
    gender_labelEl.innerText = "Gender: ";

    // <span class="value">XXX</div>
    var genderEl = document.createElement('span');
    genderEl.classList.add('value');
    genderEl.innerText = this.gender;

    // // <div class="homeworld">Ms. Author</div>
    // var homeworldEl = document.createElement('div');
    // homeworldEl.classList.add('homeworld');
    // homeworldEl.innerText = "Home World: " +this.homeworld;

    // // <div class="films">Ms. Author</div>
    // var filmsEl = document.createElement('div');
    // filmsEl.classList.add('films');
    // filmsEl.innerText = "Films: " +this.films;

    // // <div class="species">Ms. Author</div>
    // var speciesEl = document.createElement('div');
    // speciesEl.classList.add('species');
    // speciesEl.innerText = "Species: " +this.species;

    // // <div class="vehicles">Ms. Author</div>
    // var vehiclesEl = document.createElement('div');
    // vehiclesEl.classList.add('vehicles');
    // vehiclesEl.innerText = "Vehicles: " +this.vehicles;

    // // <div class="starships">Ms. Author</div>
    // var starshipsEl = document.createElement('div');
    // starshipsEl.classList.add('starships');
    // starshipsEl.innerText = "Starships: " +this.starships;

    // // <div class="created">Ms. Author</div>
    // var createdEl = document.createElement('div');
    // createdEl.classList.add('created');
    // createdEl.innerText = this.created;

    // // <div class="edited">Ms. Author</div>
    // var editedEl = document.createElement('div');
    // editedEl.classList.add('edited');
    // editedEl.innerText = this.edited;

    /* URL */
    // <div class="url"></div>
    var urldiv = document.createElement('div');
    urldiv.classList.add('url');

    // <span class="label">url: </div>
    var url_labelEl = document.createElement('span');
    url_labelEl.classList.add('label');
    url_labelEl.innerText = "URL: ";

    // <span class="value">XXX</div>
    var urlEl = document.createElement('span');
    urlEl.classList.add('value');
    urlEl.innerHTML = this.url;

    characterEl.append(nameEl);
    characterEl.append(heightdiv);
    heightdiv.appendChild(height_labelEl);
    heightdiv.appendChild(heightEl);
    characterEl.append(massdiv);
    massdiv.appendChild(mass_labelEl);
    massdiv.appendChild(massEl);
    characterEl.append(hairdiv);
    hairdiv.appendChild(hair_labelEl);
    hairdiv.appendChild(hairEl);
    characterEl.append(skindiv);
    skindiv.appendChild(skin_labelEl);
    skindiv.appendChild(skinEl); 
    characterEl.append(eyediv);
    eyediv.appendChild(eye_labelEl);
    eyediv.appendChild(eyeEl);       
    characterEl.append(birthdiv);
    birthdiv.appendChild(birth_labelEl);
    birthdiv.appendChild(birthEl); 
    characterEl.append(genderdiv);
    genderdiv.appendChild(gender_labelEl);
    genderdiv.appendChild(genderEl); 

    // characterEl.append(homeworldEl);
    // characterEl.append(filmsEl);    
    // characterEl.append(speciesEl);
    // characterEl.append(vehiclesEl);
    // characterEl.append(starshipsEl);
    // characterEl.append(createdEl);  
    // characterEl.append(editedEl);
    // characterEl.append(urlEl); 

    characterEl.append(urldiv);
    urldiv.appendChild(url_labelEl);
    urldiv.appendChild(urlEl);

    containerEl.append(characterEl);
  }

}

/*  operate function(event) in loading timing  */
document.addEventListener('DOMContentLoaded', function(event) { 

  var req = new XMLHttpRequest(); // create new server request
  req.responseType = 'json';      // attribute of req = json

  req.open('GET', './data.json', true); // open json file from server
  req.onload  = function() { // if json file is loaded from server?

    var data = req.response; // json contents put in "data"

    var characters = [];
    
    // console.log('Here is all the character data we got from ./data.json: ', data);
    
    for (var i = 0; i < data.length; i ++) {

    // console.log('We are on character data number ', i, ' and the character data is: ', data[i]);

      var characterData = data[i]; // each character data
      
      var character = new Character(characterData); // each character instance

      characters.push(character); // put character instance into characters array
      character.render(); // render in the html
    }

  };

  req.send(null);

});
