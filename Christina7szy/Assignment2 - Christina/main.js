function Character(data){
    this.name = data.name;
    this.height = data.height;
    this.eye_color = data.eye_color;
    this.gender = data.gender;
    
    this.render = function(){
        var containerEl = document.querySelector('#container'); 
        var characterEl = document.createElement("div");
        characterEl.classList.add("character");
        
        var pictureEl = document.createElement("div");
        pictureEl.classList.add("picture");
        
        var nameEl = document.createElement("h3");
        nameEl.innerText = "Name: "+this.name;
        nameEl.classList.add("name");
        
        var heightEl = document.createElement("h3");
        heightEl.innerText = "Height: "+this.height;
        heightEl.classList.add("height");
        
        var eye_colorEl = document.createElement("h3");
        eye_colorEl.innerText = "Eye Color: "+this.eye_color;
        eye_colorEl.classList.add("eye_color");
        
        var genderEl = document.createElement("h3");
        genderEl.innerText = "Gender: "+this.gender;
        genderEl.classList.add("gender");
        
        characterEl.append(pictureEl);
        characterEl.append(nameEl);
        characterEl.append(heightEl);
        characterEl.append(eye_colorEl);
        characterEl.append(genderEl);
        
        containerEl.append(characterEl);
    }
    
}

document.addEventListener('DOMContentLoaded', function(event) {

  var req = new XMLHttpRequest();

  req.responseType = 'json';
  req.open('GET', 'data.json', true);
  req.onload  = function() {
    var data = req.response;
    //var characters = [];
    console.log('Here is all the book data we got from ./data.json: ', data);
    for (i=0;i<data.length;i++){
        var characters = new Character(data[i]);
        console.log(data[i]);
       // characters.push(character);
        characters.render();
        console.log("done");
        
    }
  };
  req.send(null);

});