function Card(data){
    //=========Properties========
    this.name=data.name;
    this.height=data.height;
    this.mass=data.mass;
    this.hair_color=data.hair_color;
    this.skin_color=data.skin_color;
    this.eye_color=data.eye_color;
    this.birth_year=data.birth_year;
    this.homeworld=data.homeworld;
    this.gender=data.gender;
    this.img=data.img;
//    this.films=data.films;
//    this.species=data.species;
//    this.vehicles=data.vehicles;
//    this.starships=data.starships;
//    this.created=data.created;
//    this.edited=data.edited;
//    this.url=data.url;
    
    //=========Methods=========
    this.render = function(){
        //find container div
        var containerEl=document.querySelector('#container')
        
        //create "card" container
        var cardEl=document.createElement('div');
        cardEl.classList.add('card')
        //name
        var nameEl=document.createElement('h3')
        nameEl.innerText = "Name: "+this.name;
        nameEl.classList.add('name');
        //height
        var heightEl=document.createElement('h4')
        heightEl.innerText="Height: "+this.height
        heightEl.classList.add('height')
        
        //mass
        var massEl=document.createElement('h4')
        massEl.innerText="Mass: "+this.mass
        massEl.classList.add('mass')
        //hair color
        var hair_colorEl=document.createElement('h5')
        hair_colorEl.innerText="Hair Color: "+this.hair_color
        hair_colorEl.classList.add('hair_color')
        //skin color
        var skin_colorEl=document.createElement('h5')
        skin_colorEl.innerText="Skin Color: "+this.skin_color
        skin_colorEl.classList.add('skin_color')
        //eye_color
        var eye_colorEl=document.createElement('h5')
        eye_colorEl.innerText="Eye Color: "+this.eye_color
        eye_colorEl.classList.add('eye_color')
        
        //birth_year
        var birth_yearEl=document.createElement('h5')
        birth_yearEl.innerText="Birth Year: "+this.birth_year
        birth_yearEl.classList.add('birth_year')
        
        //gender
        var genderEl=document.createElement('h5')
        genderEl.innerHTML="Gender: "+this.gender
        genderEl.classList.add('gender')
        
        //homeworld
        var homeworldEl=document.createElement('h5')
        homeworldEl.innerText="Homeworld: "+this.homeworld
        homeworldEl.classList.add('homeworld')
        
        var imgEl=document.createElement('img')
        imgEl.setAttribute("src",this.img )
        imgEl.classList.add('profile')
        
        //films
//        var filmEl=document.createElement('p')
//        filmEl.innerText=this.film
//        filmEl.classList.add('film')
//        
//        //species
//        var speciesEl=document.createElement('p')
//        speciesEl.innerText=this.species
//        speciesEl.classList.add('species')
//        
//        //vehicles
//        var vehiclesEl=document.createElement('p')
//        vehiclesEl.innerText=this.vehicles
//        vehiclesEl.classList.add('vehicles')
//        
//        //starships
//        var starshipsEl=document.createElement('p')
//        starshipsEl.innerText=this.starships
//        starshipsEl.classList.add('starships')
//        
//        //created
//        var createdEl=document.createElement('p')
//        createdEl.innerText=this.created
//        createdEl.classList.add('created')
//        
//        //edited
//        var editedEl=document.createElement('p')
//        editedEl.innerText=this.edited
//        editedEl.classList.add('edited')
//        
//        //url
//        var urlEl=document.createElement('p')
//        urlEl.innerText=this.url
//        urlEl.classList.add('url')
        
        //append to book div
        cardEl.append(nameEl)
        cardEl.append(heightEl)
        cardEl.append(massEl)
        cardEl.append(hair_colorEl)
        cardEl.append(skin_colorEl)
        cardEl.append(eye_colorEl)
        cardEl.append(birth_yearEl)
        cardEl.append(genderEl)
        cardEl.append(homeworldEl)
        cardEl.append(imgEl)
//        cardEl.append(filmEl)
//        cardEl.append(speciesEl)
//        cardEl.append(vehiclesEl)
//        cardEl.append(starshipsEl)
//        cardEl.append(createdEl)
//        cardEl.append(editedEl)
//        cardEl.append(urlEl)
        
        //append to contained
        containerEl.append(cardEl)
        
    }//end of render
}


document.addEventListener("DOMContentLoaded", function (event) {

    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET','./data.json',true);
    req.onload = function () {
        var data = req.response;
        var chars = [];
        console.log(data)
        for(var i = 0; i < data.length; i++){
            var char = new Card(data[i]);
            chars.push(char);

            char.render();
        }
    };

    req.send(null);
});