/* 
  Base URL that we need to hit. See: https://icanhazdadjoke.com/api#search-for-dad-jokes
*/
var baseURL = 'https://pokeapi.co/api/v2/type/';

$.ajax({
    url:"https://api.nasa.gov/planetary/apod?api_key=XzA8POVoA0VPfIb0BmqMBlBl8we77umvZuaush3q",
    
    success: function(whatyougot){
        document.getElementById("img").innerHTML = "<img src ='"+ whatyougot.url +"'style ='width: 100%;'/>";
        
        document.getElementById("copyright").innerHTML = "By " + whatyougot.copyright;
        
        
         document.getElementById("title").innerHTML = whatyougot.title;
        
        document.getElementById("explanation").innerHTML = whatyougot.explanation;
    }
    
    
})
