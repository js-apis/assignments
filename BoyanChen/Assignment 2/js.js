function Character(data) {
    this.name = data.name;
    this.height = data.height;
    this.eye_color = data.eye_color;
    this.gender = data.gender;
    this.birth_year = data.birth_year;
    this.created = data.created;
    this.edited = data.edited;
    this.render = function (){
        var container = document.getElementById("container");

        var characterContainer = document.createElement("div");
        characterContainer.classList.add("characters-card");

        var cName = document.createElement("h1");
        cName.innerHTML = "Name: " + this.name;
        cName.classList.add("nameTitle");
        cName.classList.add("dText");

        var cHeight = document.createElement("h3");
        cHeight.innerHTML = "Height: " + this.height;
        cHeight.classList.add("heightTitle");
        cHeight.classList.add("dText");

        var cEyeColor = document.createElement("h3");
        cEyeColor.innerHTML = "Eye color: " + this.eye_color;
        cEyeColor.classList.add("eyeColorTitle");
        cEyeColor.classList.add("dText");

        var cGender = document.createElement("h3");
        cGender.innerHTML = "Gender: "+ this.gender;
        console.log(this.gender);
        cGender.classList.add("genderTitle");
        cGender.classList.add("dText");

        var cBirth_year = document.createElement("h3");
        cBirth_year.innerHTML = "Birth year: " + this.birth_year;
        cBirth_year.classList.add("BirthYearTitle");
        cBirth_year.classList.add("dText");

        var cCreated = document.createElement("h3");
        cCreated.innerHTML = "Date Created: " + this.created;
        cCreated.classList.add("createdTitle");
        cCreated.classList.add("dText");

        var cEdited = document.createElement("h3");
        cEdited.innerHTML = "Date Edited: " + this.edited;
        cEdited.classList.add("editedTitle");
        cEdited.classList.add("dText");

        characterContainer.appendChild(cName);
        characterContainer.appendChild(cHeight);
        characterContainer.appendChild(cEyeColor);
        characterContainer.appendChild(cGender);
        characterContainer.appendChild(cBirth_year);
        characterContainer.appendChild(cCreated);
        characterContainer.appendChild(cEdited);
        container.appendChild(characterContainer);
    }
}

document.addEventListener("DOMContentLoaded", function (event) {

    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET','./data.json',true);
    req.onload = function () {
        var data = req.response;
        var characters = [];
        for(var i = 0; i < data.length; i++){
            var character = new Character(data[i]);
            characters.push(character);

            character.render();
        }
    };

    req.send(null);
});