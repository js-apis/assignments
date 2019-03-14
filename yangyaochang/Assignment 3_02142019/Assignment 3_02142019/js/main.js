var baseURLCountries = 'http://api.airvisual.com/v2/countries?key=';
var apiKey = 'BP3iQAPQiYht8cWpR';
var countriesURL = baseURLCountries + apiKey;
var outsideResult;
var btnCountries;
var btnStates;
var btnCities;

function getJSON(path, callback) {
  var req = new XMLHttpRequest();  
  req.open('GET', path, true);
  req.responseType = 'json';
  req.onload = function() {
    callback(req.response);
  };
  req.send();
}

// This is my callback function
function renderCountries(countriesName) {
  console.log('I got Countries data.');

  var result = countriesName;
  outsideResult = countriesName;

  var countryContainerEl = document.querySelector('#countryContainer');
  
  for(var i = 0; i < result.data.length; i++) {
    var placeEl = document.createElement('div');
    placeEl.classList.add('place');

    var countryEl = document.createElement('button');
    countryEl.innerText = result.data[i].country;
    // .innerText .innerHTML
    countryEl.classList.add('country');
    
    var casName = result.data[i].country.replace(/ /g, '');
    casName = casName.replace(/,/g, '');
    console.log(casName);

    countryEl.setAttribute("id", casName);
    placeEl.append(countryEl);
    countryContainerEl.append(placeEl);
  }

  btnCountries = document.querySelectorAll("button");
  btnCountries.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(btn.innerText);
      var countryName = btn.innerText;
      var stateApiURL = `http://api.airvisual.com/v2/states?country=${countryName}&key=${apiKey}`;
      // Functionally, it looks like it allows you to nest a variable inside a string without doing concatenation using the + operator.

      var subTitle = document.querySelector('.subTitle');
      subTitle.innerText = 'Select a state';

      getJSON(stateApiURL, function(stateNames) {
        console.log('I got States data.');
        console.log(stateNames);

        var result = stateNames;
        
        var stateContainerEl = document.querySelector('#stateContainer');

        countryContainerEl.innerHTML = '';
  
        for(var i = 0; i < result.data.length; i++) {
          var placeEl = document.createElement('div');
          placeEl.classList.add('place');

          var stateEl = document.createElement('button');
          stateEl.innerText = result.data[i].state;
          stateEl.classList.add('state');
          
          var casName = result.data[i].state.replace(/ /g, '');
          casName = casName.replace(/,/g, '');
          console.log(casName);

          stateEl.setAttribute("id", casName);
          placeEl.append(stateEl);
          stateContainerEl.append(placeEl);
        }

        btnStates = document.querySelectorAll("button");
        btnStates.forEach(function(btn) {
          btn.addEventListener('click', function(e) {
          e.preventDefault();
          console.log(btn.innerText);
          var stateName = btn.innerText;
          var cityApiURL = `http://api.airvisual.com/v2/cities?state=${stateName}&country=${countryName}&key=${apiKey}`;

          var subTitle = document.querySelector('.subTitle');
          subTitle.innerText = 'Select a city';

          getJSON(cityApiURL, function(cityNames) {
            console.log('I got Cities data.');
            console.log(cityNames);
    
            var result = cityNames;
            
            var cityContainerEl = document.querySelector('#cityContainer');
    
            countryContainerEl.innerHTML = '';
            stateContainerEl.innerHTML = '';
      
            for(var i = 0; i < result.data.length; i++) {
              var placeEl = document.createElement('div');
              placeEl.classList.add('place');
    
              var cityEl = document.createElement('button');
              cityEl.innerText = result.data[i].city;
              cityEl.classList.add('city');
              
              var casName = result.data[i].city.replace(/ /g, '');
              casName = casName.replace(/,/g, '');
              console.log(casName);
    
              cityEl.setAttribute("id", casName);
              placeEl.append(cityEl);
              cityContainerEl.append(placeEl);
            }

            btnCities = document.querySelectorAll("button");
            btnCities.forEach(function(btn) {
              btn.addEventListener('click', function(e) {
              e.preventDefault();
              console.log(btn.innerText);
              var cityName = btn.innerText;
              var dataApiURL = `http://api.airvisual.com/v2/city?city=${cityName}&state=${stateName}&country=${countryName}&key=${apiKey}`;

              var subTitle = document.querySelector('.subTitle');
              subTitle.innerText = '';

              var mainTitle = document.querySelector('.mainTitle');
              mainTitle.innerText = '';
    
              getJSON(dataApiURL, function(airQuality) {
                console.log('I got Air Quality data.');
                console.log(airQuality);
        
                var result = airQuality;
                
                var resultContainerEl = document.querySelector('#resultContainer');
        
                countryContainerEl.innerHTML = '';
                stateContainerEl.innerHTML = '';
                cityContainerEl.innerHTML = '';

                var countryEl = document.createElement('h3');
                countryEl.innerText = result.data.country;
                countryEl.classList.add('countrySelected');

                var stateEl = document.createElement('h3');
                stateEl.innerText = result.data.state;
                stateEl.classList.add('stateSelected');

                var cityEl = document.createElement('h3');
                cityEl.innerText = result.data.city;
                cityEl.classList.add('citySelected');

                var locationEl = document.createElement('h6');
                locationEl.innerText = 'Location\n' + [result.data.location.coordinates[0], result.data.location.coordinates[1]];
                locationEl.classList.add('location');

                var tempEl = document.createElement('h3');
                tempEl.innerText = result.data.current.weather.tp + '\n' + 'Temperature (Celsius)';
                tempEl.classList.add('temperature');

                var aqiEl = document.createElement('h3');
                aqiEl.innerText = result.data.current.pollution.aqius + '\n' + 'Air Quality Index';
                aqiEl.classList.add('aqi');

                var timeEl = document.createElement('h6');
                timeEl.innerText = 'Current Time\n' + result.data.current.weather.ts;
                timeEl.classList.add('timeStamp');

                var humidityEl = document.createElement('h3');
                humidityEl.innerText = result.data.current.weather.hu + '\n' + 'Humidity (%)';
                humidityEl.classList.add('humidity');

                // var pollutantEl = document.createElement('h3');
                // pollutantEl = 'Main Pollutant\n' + result.data.current.pollution.mainus;
                // pollutantEl.classList.add('pollutant');

                //http://api.airvisual.com/v2/city?city=Taipei&state=Taipei&country=Taiwan&key=BP3iQAPQiYht8cWpR

                // resultContainerEl.append(countryEl);
                // resultContainerEl.append(stateEl);
                resultContainerEl.append(cityEl);
                resultContainerEl.append(locationEl);
                resultContainerEl.append(timeEl);
                resultContainerEl.append(tempEl);
                resultContainerEl.append(humidityEl);
                resultContainerEl.append(aqiEl);
                // resultContainerEl.append(pollutantEl);

              });
              });
            }); 



          });
          });
        });  


      });
    });

  
  });
}
  



getJSON(countriesURL, renderCountries);


