var baseURL;
var fullURL;
var baseURL2;
var fullURL2;

var title = document.getElementById("title");
var image = document.getElementById("image");
var ajaxButton = document.getElementById("ajaxButton");


(function() {
 
  document.getElementById("ajaxButton").addEventListener("click", makeRequest);
 
  var httpRequest;
  function makeRequest() {

    baseURL = "http://api.open-notify.org/astros.json";
    fullURL = baseURL;

    httpRequest = new XMLHttpRequest();
       if (!httpRequest) {
      alert("It did not work :(");
      return false;
    }
    httpRequest.onreadystatechange = fillInfo;
    httpRequest.open(
      "GET", fullURL
    );
    httpRequest.send();
  }

  function fillInfo() {
    var responseContent;
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
          // console.log(httpRequest.responseText);
          responseContent = httpRequest.responseText;
          // console.log(responseContent);

          var parsed = JSON.parse(responseContent);
          console.log(parsed);
          console.log('Number = '+parsed.number);
          console.log('Message = '+parsed.message);
          console.log('How many? = '+Object.keys(parsed.people).length);
            for(let i=0; i<Object.keys(parsed.people).length; i++){
              console.log('Name = '+parsed.people[i].name);
              console.log('Craft = '+parsed.people[i].craft);
              console.log('Name = '+parsed.people[i].name);
            }
          title.innerHTML = parsed.number;
          // document.body.style.backgroundImage = 'space_station.gif';
          // image.innerHTML = '<embed width="420" height="315"src="http://www.ustream.tv/channel/live-iss-stream/pop-out#to1137912">';
          image.innerHTML = "<img src = 'space_station.gif'>";
    
          
      } else {
        alert("There was a problem with the request.");
      }
    }
  }
})();

(function() {
 
  document.getElementById("ajaxButton").addEventListener("click", makeRequest);
 
  var httpRequest;
  function makeRequest() {

    baseURL2 = "http://api.open-notify.org/iss-now.json";
    fullURL2 = baseURL2;

    httpRequest = new XMLHttpRequest();
       if (!httpRequest) {
      alert("It did not work :(");
      return false;
    }
    httpRequest.onreadystatechange = fillISSTime;
    httpRequest.open(
      "GET", fullURL2
    );
    httpRequest.send();
  }

  function fillISSTime() {
    var responseContent;
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
          // console.log(httpRequest.responseText);
          responseContent = httpRequest.responseText;
          // console.log(responseContent);
          var parsed = JSON.parse(responseContent);
          console.log(parsed);
          console.log('Timestamp = '+parsed.timestamp);
          console.log('iss_position latitude = '+parsed.iss_position.latitude);
          console.log('iss_position longitude = '+parsed.iss_position.longitude);      
      } else {
        alert("There was a problem with the request.");
      }
    }
  }
})();

/* STOLEN CODE */
// L is a reference to Leaflet global object `window.L`
// it draws the map in an element with id `map`
var map = L.map('map').setView([0,0], 2);

function moveISS () {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        var lat = data['iss_position']['latitude'];
        var lon = data['iss_position']['longitude'];

        iss.setLatLng([lat, lon]);
        isscirc.setLatLng([lat, lon]);
        map.panTo([lat, lon], animate=true);
    });
    setTimeout(moveISS, 5000); 
}

L.tileLayer('//open-notify.org/Open-Notify-API/map/tiles/{z}/{x}/{y}.png', {
    maxZoom: 4,
}).addTo(map);

var ISSIcon = L.icon({
    iconUrl: '//open-notify.org/Open-Notify-API/map/ISSIcon.png',
    iconSize: [50, 30],
    iconAnchor: [25, 15],
    popupAnchor: [50, 25],
    shadowUrl: '//open-notify.org/Open-Notify-API/map/ISSIcon_shadow.png',
    shadowSize: [60, 40],
    shadowAnchor: [30, 15]
});


var iss = L.marker([0, 0], {icon: ISSIcon}).addTo(map);
var isscirc = L.circle([0,0], 2200e3, {color: "#c22", opacity: 0.3, weight:1, fillColor: "#c22", fillOpacity: 0.1}).addTo(map); 

moveISS();
