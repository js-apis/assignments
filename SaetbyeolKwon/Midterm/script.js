var baseURL;
var fullURL;
var baseURL2;
var fullURL2;

var title = document.getElementById("title");
var image = document.getElementById("image");
var ajaxButton = document.getElementById("ajaxButton");
var map = document.getElementById("map");


(function() {
 
  document.getElementById("map").addEventListener("click", makeRequest);
 
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
          }

          profiles.innerHTML = "<ul><li id = 'profile1'><div id = 'photo1'></div><h3 id = 'name1'> </h3><h3 id = 'craft1'> </h3></li><li id = 'profile2'><div id = 'photo2'></div><h3 id = 'name2'> </h3><h3 id = 'craft2'> </h3></li><li id = 'profile3'><div id = 'photo3'></div><h3 id = 'name3'> </h3><h3 id = 'craft3'></h3></li></ul>"

          let i=0; i<Object.keys(parsed.people).length;
          name1.innerHTML = 'Name: '+parsed.people[i].name;
          craft1.innerHTML = 'Craft: '+parsed.people[i].craft;
          i++;
          name2.innerHTML = 'Name: '+parsed.people[i].name;
          craft2.innerHTML = 'Craft: '+parsed.people[i].craft;
          i++;
          name3.innerHTML = 'Name: '+parsed.people[i].name;
          craft3.innerHTML = 'Craft: '+parsed.people[i].craft;
          i++;
          title.innerHTML = parsed.number;
          image.innerHTML = "<img src = 'astronaut.png'>";
          photo1.innerHTML = "<img id = 'gif' src = 'space_station.gif'>";
          photo2.innerHTML = "<img id = 'gif' src = 'astronaut2.gif'>";
          photo3.innerHTML = "<img id = 'gif' src = 'astronaut3.gif'>";
      } else {
        alert("There was a problem with the request.");
      }
    }
  }
})();

//get ISS Time. i don't need it this time.
// (function() {
 
//   document.getElementById("map").addEventListener("click", makeRequest);
 
//   var httpRequest;
//   function makeRequest() {

//     baseURL2 = "http://api.open-notify.org/iss-now.json";
//     fullURL2 = baseURL2;

//     httpRequest = new XMLHttpRequest();
//        if (!httpRequest) {
//       alert("It did not work :(");
//       return false;
//     }
//     httpRequest.onreadystatechange = fillISSTime;
//     httpRequest.open(
//       "GET", fullURL2
//     );
//     httpRequest.send();
//   }

//   function fillISSTime() {
//     var responseContent;
//     if (httpRequest.readyState === XMLHttpRequest.DONE) {
//       if (httpRequest.status === 200) {
//           // console.log(httpRequest.responseText);
//           responseContent = httpRequest.responseText;
//           // console.log(responseContent);
//           var parsed = JSON.parse(responseContent);
//           console.log(parsed);
//           console.log('Timestamp = '+parsed.timestamp);
//           console.log('iss_position latitude = '+parsed.iss_position.latitude);
//           console.log('iss_position longitude = '+parsed.iss_position.longitude);      
//       } else {
//         alert("There was a problem with the request.");
//       }
//     }
//   }
// })();

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

L.tileLayer('https://api.mapbox.com/styles/v1/zzsait/cjsy9gwhdfux71fs8zdyudsp3/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoienpzYWl0IiwiYSI6ImNqc3k5Y2QyZTB4ZTc0NHBqb3gzN2MwZTYifQ.d0Hf8PwWkSYbg8bD8LyzdQ', {
    maxZoom: 5,
    zoom: 3,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoienpzYWl0IiwiYSI6ImNqc3k5Y2QyZTB4ZTc0NHBqb3gzN2MwZTYifQ.d0Hf8PwWkSYbg8bD8LyzdQ',
}).addTo(map);

var ISSIcon = L.icon({
    iconUrl: 'iss2011white.png',
    iconSize: [80, 30],
    iconAnchor: [25, 15],
    popupAnchor: [50, 25],
    shadowUrl: '',
    shadowSize: [60, 40],
    shadowAnchor: [30, 15]
});


var iss = L.marker([0, 0], {icon: ISSIcon}).addTo(map);
var isscirc = L.circle([0,0], 2200e3, {color: "lightblue", opacity: 0.3, weight:1, fillColor: "lightblue", fillOpacity: 0.1}).addTo(map); 

moveISS();