window.addEventListener('DOMContentLoaded', function() {
  getNY_Image();
})

function getTokyo_Image() {
  getJSON('https://api.unsplash.com/photos/random?client_id=b1bc2ce2da4b362ca8c2878828ea9a88ff69d869d15ea4e4505b91f9a14c1e6c&query=tokyo', function (data) {
    console.log('GET succeed: ', data);
      var insertHTML = "";
      var imageURL = data.urls.regular;
      document.body.style.backgroundImage = "url(" + imageURL + ")";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "100vw";
  });
}

function getNY_Image() {
  getJSON('https://api.unsplash.com/photos/random?client_id=b1bc2ce2da4b362ca8c2878828ea9a88ff69d869d15ea4e4505b91f9a14c1e6c&query=snow', function (data) {
    console.log('GET succeed: ', data);
      var insertHTML = "";
      var imageURL = data.urls.regular;
      document.body.style.backgroundImage = "url(" + imageURL + ")";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "100vw";
  });
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
