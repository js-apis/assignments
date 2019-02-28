var baseURLCountries = 'http://api.airvisual.com/v2/countries?key=';
var apiKey = 'BP3iQAPQiYht8cWpR';
var countriesURL = baseURLCountries + apiKey;
var result;

function getJSON(path) {
  var req = new XMLHttpRequest();  
  req.open('GET', path, true);
  req.responseType = 'json';
  req.onload = function() {
    result = req.response;
    console.log(result);
  };
  req.send();
}

function render() {
  var containerEl = document.querySelector('#container');
  
  for(var i = 0; i < result.data.length; i++) {
    var placeEl = document.createElement('div');
    placeEl.classList.add('place');

    var countryEl = document.createElement('h3');
    countryEl.innerText = result.data[i];
    countryEl.classList.add('country');

    placeEl.append(countryEl);
    containerEl.append(placeEl);
  }
}

getJSON(countriesURL);
render();
