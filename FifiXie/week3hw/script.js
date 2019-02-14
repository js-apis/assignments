// window.MgApi.SetApiKey('91e0df2a-5a67-49e3-a9a0-d8096e373e7a');

var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "api_key=2Pkjl7GmqgvrzycZhZfocSI3pAkneiZ2";
var query = "&q=";
var limit = "&limit=18&offset=0"




var searchTermEl = document.querySelector('.search-term');
var searchBtnEl = document.querySelector('.search-btn');
var formEl = document.querySelector('.search-form');
var imgListEl = document.querySelector('.jokes-list');
var notFoundEl = document.querySelector('.not-found');
var searchTerm = '';




var searchTerm;

var memes = [];

formEl.addEventListener('submit', function(event) {
  /* 
    Prevent page refresh. 
    When you submit any form, the browser will automaically refresh your page.
    the following line prevents this behavior.
  */
  event.preventDefault();
  /* 
    Read the contents of what the user has written in the search input.
  */
  searchTerm = searchTermEl.value;
  /* 
    construct our final API URL.
  */
  var endpointURL = api + apiKey + query + input.value() + limit;
  console.log('endpoint URL is: ', endpointURL);
  /* 
    Call the API, and call `populateJokes` whenever the call finishes. 
    `populateJokes` is our "callback function" here.
  */
  getJSON(endpointURL, gotData);
});




function gotData(giphy) {
  // clear the list. whatever was here from the last search, should be cleared off.
  imgListEl.innerHTML = '';

  console.log('pics ', giphy);
  /* 
    `jokeData` is the response we got from our API.
    It has some stuff in it. But we are only interested in its `results` property, which holds our jokes inside of it.
  */
  var pics = giphy.pics;

  /* 
    If `results` includes anything in it:
  */
  if (pics.length) {
    // hide the `Not found` message, if it's not already hidden.
    notFoundEl.classList.add('hidden');
    // loop through all the jokes - the `results` array.
    for(var i = 0; i < results.length; i++) {
      // create a new `Joke` instance, using the `Joke` constructur (class) below.
      var picture = new Pictures(pics[i].picture, imgListEl); 
      // call `render` on the joke we just created, so it's added to our HTML
      picture.render();
      // put this joke inside the `jokes` URL. From your browser console, now you can type in `jokes` and see all the jokes.
      memes.push(joke);
    }
  }

}



function myFunction() {
   var endpointURL = api + apiKey + query + input.value() + limit;
  this.element = document.createElement("IMG");

  this.setAttribute("src", "endpointURL");
  this.setAttribute("width", "304");
  this.setAttribute("height", "228");
  this.setAttribute("alt", "The Pulpit Rock");
   his.container.append(this.element);
}



// function gotData(giphy) {
//   for (var i = 0; i < giphy.data.length; i++) {

//   }
