/*  Function of getJSON */
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


/* 
   You can pass an `inline` `anonymous` function as a callback function to `getJSON`
   Like this.
   - anonymous: it doesn't have a name. (see `getJSON`? that is a named function) - more about anonymous functions: http://helephant.com/2008/08/23/javascript-anonymous-functions/
*/

getJSON('http://api.openweathermap.org/data/2.5/forecast?q=New York,US&&units=metric&appid=f6748bf5cbca6df7965ee552869cc300', function (data) {
  console.log('GET succeed: ', data);
    var insertHTML = "";

    var cityEl = document.querySelector('.city');
    cityEl.innerText = data.city.name + " Weather Forecast";

    for (var i = 0; i <= 32; i = i + 8) {
      insertHTML += buildHTML(data, i);
    }

    var weatherEl = document.querySelector('.weather');
    weatherEl.innerHTML = insertHTML;
});

function buildHTML(data, i) {
  var Week = new Array("(Sun) ","(Mon) ","(Tue) ","(Wed) ","(Thu) ","(Fri) ","(Sat) ");
  var date = new Date (data.list[i].dt_txt);
  date.setHours(date.getHours() - 5);
  var month = date.getMonth()+1;
  var day = month + " / " + date.getDate() + " " + Week[date.getDay()]; // + date.getHours() + "：00";
  var icon = data.list[i].weather[0].icon;
  var html =
  '<div class="weather-report">' +
    '<div class="weather-date">' + day + '</div>' +
    '<img src="http://openweathermap.org/img/w/' + icon + '.png">' +    
    '<div class="weather-main">'+ data.list[i].weather[0].main + '</div>' +
    '<div class="weather-temp">' + Math.round(data.list[i].main.temp) + '℃</div>' +
    '<div class="weather-temp">Min: ' + Math.round(data.list[i].main.temp_min) + '℃</div>' +
    '<div class="weather-temp">Max: ' + Math.round(data.list[i].main.temp_max) + '℃</div>' +
  '</div>';
  return html
}
