var base_url=  "https://api.musixmatch.com/ws/1.1/";
var api_key = "&apikey=c80e3f65002144046f7179d8d5f270ce";
var matchLyrics= "matcher.lyrics.get"
var format_url = "?format=jasonp&callback=callback";

var parameterArtist="&q_artist=";
var parameterTrack= "&q_track=";

var formEl = document.querySelector('.search');
var trackNameEl = document.querySelector('.search-track');
var artistNameEl = document.querySelector('.search-artist');

var lyricsEl = document.querySelector('.lyrics');
var mostUsedEl0 = document.querySelector('#mostUsed0');
var mostUsedEl1 = document.querySelector('#mostUsed1');
var mostUsedEl2 = document.querySelector('#mostUsed2');
var mostUsedEl3 = document.querySelector('#mostUsed3')
var mostUsedEl4 = document.querySelector('#mostUsed4');
var mostUsedEl5 = document.querySelector('#mostUsed5');
var mostUsedEl6 = document.querySelector('#mostUsed6');
var mostUsedEl7 = document.querySelector('#mostUsed7');
var mostUsedEl8 = document.querySelector('#mostUsed8');

var trackName;
var artistName;
var word;
var words;
var frequencies;
var data;
var test=[];


// var data = "";

// function getJSON(path, callback) {
//     var req = new XMLHttpRequest();
//     // var text = "something whatever hi".split(' ').join('%');
//     req.responseType = 'json';
//     req.open('GET', path, true);
//     req.setRequestHeader('Accept', 'application/json');
//     req.onload = function() {
//         callback(req.response);
//     };
//         req.send();
// }


function getJSON(path, callback) {
   var req = new XMLHttpRequest();
   // req.setRequestHeader(“Origin”, ’www.google.com');
   req.responseType = 'json';
   req.open('GET', `https://cors-anywhere.herokuapp.com/${path}`, true);
   req.setRequestHeader('Accept', 'application/json');
   req.onload = function() {
       callback(req.response);
   };
   req.send();
}


formEl.addEventListener('submit', function(event) {

  event.preventDefault();

  trackName = trackNameEl.value.split(' ').join('%');
  artistName = artistNameEl.value.split(' ').join('%');

  //console.log (trackName,artistName);
    var request = base_url + matchLyrics + format_url +  parameterTrack +trackName + parameterArtist + artistName+ api_key;
 // console.log(request);

 getJSON(request, printLyrics);

  });

function printLyrics (lyricsData) {
  data = lyricsData.message.body.lyrics.lyrics_body;
  // test=data.split(",");
  //console.log(test);
  test=(getFrequency(data , 9 )).split(',');
  mostUsedEl0.innerText=test[0];
  mostUsedEl1.innerText=test[1]; 
  mostUsedEl2.innerText=test[2];
  mostUsedEl3.innerText=test[3];
  mostUsedEl4.innerText=test[4];
  mostUsedEl5.innerText=test[5];
  mostUsedEl6.innerText=test[6];
  mostUsedEl7.innerText=test[7];
  mostUsedEl8.innerText=test[8]; 
  console.log(test);
  lyricsEl.innerText = lyricsData.message.body.lyrics.lyrics_body;
}



function getFrequency(string, cutOff) {
	  //console.log(string);
  var cleanString = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/gi,""),
      words = cleanString.split(' '),
      frequencies = {},
      word, frequency, i;

  for( i=0; i<words.length; i++ ) {
    word = words[i];
    frequencies[word] = frequencies[word] || 0;
    frequencies[word]++;
  }
  
  words = Object.keys( frequencies );

  return words.sort(function (a,b) { return frequencies[b] -frequencies[a];}).slice(0,cutOff).toString();
}

//  	console.log("this is dara");
 // console.log(data); 



// getJSON(request, function(response) {
//    console.log('It works: ', response.message.body.lyrics.lyrics_body);
//  //   var lyricsEl = document.querySelector('.lyrics');
// 	// lyricsEl.innerHTML = response.message.body.lyrics.lyrics_body;
// });


// printLyrics();

// function loadLyrics (event) {
// 	getJSON(request, printLyrics);
// }

// loadLyrics();

// getJSON(request, function(lyrics) {
// 	console.log('work: ', lyrics.message.body.lyrics.lyrics_body);
// });

// printLyrics();