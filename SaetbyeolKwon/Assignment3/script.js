var baseURL;
var pokemon;
var name;
var tag;
var fullURL;

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