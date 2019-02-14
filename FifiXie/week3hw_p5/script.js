// window.MgApi.SetApiKey('91e0df2a-5a67-49e3-a9a0-d8096e373e7a');

var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "api_key=2Pkjl7GmqgvrzycZhZfocSI3pAkneiZ2";
var query = "&q=";
var limit = "&limit=18&offset=0"
var formEl = document.querySelector('.search-form');

var input;

var imgArray = [];

formEl.addEventListener('submit', function(event) {
   
    // Prevent page refresh. 
    // When you submit any form, the browser will automaically refresh your page.
    // the following line prevents this behavior.
  event.preventDefault();

});



function setup() {

  console.log("hello");

  // createCanvas(window.innerWidth, window.innerHeight);
  noCanvas();
  // frameRate(5); //default is 60fps
  var button = select('#btn');
  button.mouseClicked(getSearch);
  input = select('#search');
  // createImg("https://media1.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif");
}

function draw() {
  // createImg("https://media1.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif");
}


function getSearch() {

  console.log("hey you searched!");
  var url = api + apiKey + query + input.value() + limit;
  loadJSON(url, gotData);

}

function gotData(giphy) {
	for (var i = 0; i < giphy.data.length; i++) {
     var newimg = createImg(giphy.data[i].images.downsized_large.url);
    //  console.log(newimg);
    //  imgArray[i] = newimg;
    //  console.log(imgArray[i]);
	}
}