var current = "Clear";
var current_panel = "NY";
// var currentTokyo = "tokyo";
var unsplash_base = 'https://api.unsplash.com/photos/random?client_id=b1bc2ce2da4b362ca8c2878828ea9a88ff69d869d15ea4e4505b91f9a14c1e6c&query=';
var weatherTokyo_base = 'http://api.openweathermap.org/data/2.5/forecast?q=Tokyo,JP&&units=metric&appid=f6748bf5cbca6df7965ee552869cc300';
var weatherNY_base = 'http://api.openweathermap.org/data/2.5/forecast?q=New York,US&&units=metric&appid=f6748bf5cbca6df7965ee552869cc300';

var song, song1, song2;

var cur_day;
var timer1, timer2;

window.addEventListener('DOMContentLoaded', function() {
  getNY_Weather();
  getNY_Image();
  getNY_Time();
  startTimer_NY();
  stopTimer_Tokyo();
})

function getTokyo_Weather() {
  getJSON(weatherTokyo_base, function (data) {
    // console.log('GET succeed: ', data);
      var insertHTML = "";
      var insertHTML2= "";
      var judge;

      var cityEl = document.querySelector('.city');
      cityEl.innerText = data.city.name + " 24h Forecast";

      for (var i = 5; i <= 13; i++) {
        judge = judgeToday(data, i);
        if(judge == 0){
          insertHTML += buildHTML(data, i);
        } else {
          insertHTML2 += buildHTML(data, i);
        }
      }

      current_panel = "Tokyo";
      current = data.list[5].weather[0].main;
      // console.log(current);

      var weatherEl = document.querySelector('.w_today');
      weatherEl.innerHTML = insertHTML;
      var weatherEl2 = document.querySelector('.w_tomorrow');
      weatherEl2.innerHTML = insertHTML2;
  });
}

function getNY_Weather() {
  getJSON(weatherNY_base, function (data) {
    console.log('GET succeed: ', data);
      var insertHTML = "";
      var insertHTML2= "";
      var judge;

      var cityEl = document.querySelector('.city');
      cityEl.innerText = data.city.name + " 24h Forecast";

      for (var i = 0; i <= 8; i++) {
        judge = judgeToday(data, i);
        if(judge == 0){
          insertHTML += buildHTML(data, i);
        } else {
          insertHTML2 += buildHTML(data, i);
        }
      }

      current_panel = "NY";
      current = data.list[0].weather[0].main;
      // console.log(current);

      var weatherEl = document.querySelector('.w_today');
      weatherEl.innerHTML = insertHTML;
      var weatherEl2 = document.querySelector('.w_tomorrow');
      weatherEl2.innerHTML = insertHTML2;
  });
}

function getTokyo_Image() {
  getJSON(unsplash_base + "tokyo", function (data) {
    console.log('GET succeed: ', data);
      var insertHTML = "";
      var imageURL = data.urls.regular;
      document.body.style.backgroundImage = "url(" + imageURL + ")";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "100vw";
  });
}

function getNY_Image() {
  getJSON(unsplash_base + "ny", function (data) {
    console.log('GET succeed: ', data);
    // console.log(currentNY + "2");
      var insertHTML = "";
      var imageURL = data.urls.regular;
      document.body.style.backgroundImage = "url(" + imageURL + ")";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "100vw";
  });
}

/* TIME */
function getNY_Time() {
  var newYork = moment.tz(moment(), "America/New_York");
  var newYork_day = moment.tz(moment(), "America/New_York");
  newYork = newYork.format('MMM Do, ddd HH:mm:ss');
  cur_day = newYork_day.format('D');
  var timeEl = document.querySelector('.time');
  timeEl.innerText = newYork;
}
function getTokyo_Time() {
  stopTimer_NY();
  var Tokyo = moment.tz(moment(), "Asia/Tokyo");
  var Tokyo_day = moment.tz(moment(), "Asia/Tokyo");
  Tokyo = Tokyo.format('MMM Do, ddd HH:mm:ss');
  cur_day = Tokyo_day.format('D');
  var timeEl = document.querySelector('.time');
  timeEl.innerText = Tokyo;

}

function startTimer_NY(){
  timer1 = setInterval('getNY_Time()',1000);
}
function startTimer_Tokyo(){
  timer2 = setInterval('getTokyo_Time()',1000);
}

function stopTimer_NY(){
  clearInterval(timer1);
}
function stopTimer_Tokyo(){
  clearInterval(timer2);
}

function preload() {
  var context = new AudioContext();
  soundFormats('ogg', 'mp3');
  song1 = loadSound('sound/rain_road.mp3');
  song2 = loadSound('sound/clear.mp3');
  song3 = loadSound('sound/clear_tokyo.mp3');
  song = song1;
}

function setup() {
}

function imgPressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    // background(255,0,0);
  } else {
    if(current == "Clear" && current_panel == "NY"){
      song = song2;
    } else if (current == "Clear" && current_panel == "Tokyo"){
      song = song3;
    } else {
      song = song1;
    }
    song.loop();
    // background(0,255,0);
  }
}

var cnt=0;
var src;

function changeimg(){
  src = document.getElementById("play").src;
  if (cnt == 1) {
    cnt=0;
  } else {
    cnt++;
  }
  console.log(src);
  if(cnt == 0) {
    document.getElementById("play").src = "img/play.png";
  } else {
    document.getElementById("play").src = "img/stop.png";
  }
}

function getJSON(path, callback) {
  var req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', path, true);
  req.setRequestHeader('Accept', 'application/json');
  req.onload = function() {
      callback(req.response);
  };
  req.send();
}

function judgeToday(data, i) {
  var date = new Date (data.list[i].dt_txt);
  date.setHours(date.getHours() - 5);
  if(cur_day - date.getDate() == 0){
    var day = 0;
  } else {
    var day = 1;
  }
  console.log(day);
  return day;
}

function buildHTML(data, i) {
  var Week = new Array("(Sun) ","(Mon) ","(Tue) ","(Wed) ","(Thu) ","(Fri) ","(Sat) ");
  var date = new Date (data.list[i].dt_txt);
  date.setHours(date.getHours() - 5);
  var month = date.getMonth()+1;
  if(cur_day - date.getDate() == 0){
    var day = 'Today';
  } else {
    var day = 'Tomorrow';
  }
  var time = date.getHours() + ":00";
  // var day = month + "/" + date.getDate() + "<br>" /* + Week[date.getDay()] */ + date.getHours() + ":00";
  var icon = data.list[i].weather[0].icon;
  var temp = Math.round(data.list[i].main.temp);
  var html =
  '<div class="weather-report ' + day + '">' +
    // '<div class="weather-date"><b>' + day + '</b></div>' +
    '<div class="weather-time">' + time + '</div>' +
    '<img src="http://openweathermap.org/img/w/' + icon + '.png">' +
    '<div class="weather-main">'+ data.list[i].weather[0].main + '</div>' +
    '<div class="weather-temp">' + temp + '℃</div>' +
    // '<div class="weather-temp">Min: ' + Math.round(data.list[i].main.temp_min) + '℃</div>' +
    // '<div class="weather-temp">Max: ' + Math.round(data.list[i].main.temp_max) + '℃</div>' +
  '</div>';
  return html;
}
