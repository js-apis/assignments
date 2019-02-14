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

getJSON('https://api.nasa.gov/planetary/apod?api_key=Fuo9LrHRAnO1atO7BC2Bbf1pdF2Tb60RnAHAI5GL', function(nasa){
console.log('Here is the nasa info', nasa);
      var title = nasa.title;
      var p = document.getElementById("title");
      p.innerHTML = title;

      var explanation = nasa.explanation;
      var paragraph = document.getElementById("paragraph");
      paragraph.innerHTML = explanation;

      let img = nasa.url;
      let image = document.getElementById("image");
      image.setAttribute("src", img);
      // image.setAttribute("width", "300");
      // image.setAttribute("height", "300");
    //   document.body.appendChild();
});

// ---------------
// function getInformation() {
//   let url = "https://api.nasa.gov/planetary/apod?api_key=Fuo9LrHRAnO1atO7BC2Bbf1pdF2Tb60RnAHAI5GL";
//   fetch(url)
//     .then(function(data) {
//       return data.json();
//     }).then(function(jsondata) {
//       console.log(jsondata);
//       var title = jsondata.copyright;
//       var p = document.getElementById("title");
//       p.innerHTML = title;

//       var explanation = jsondata.explanation;
//       var paragraph = document.getElementById("paragraph");
//       paragraph.innerHTML = explanation;

//       let img = jsondata.url;
//       let image = document.getElementById("image");
//       image.setAttribute("src", img);
//       // image.setAttribute("width", "300");
//       // image.setAttribute("height", "300");
//       document.body.appendChild(x);
//     })
// }




// $.ajax({
//   url: url,

//   success: function(result){
//     console.log(result);
//   if("copyright" in result) {
//     $("#copyright").text("Image Credits: " + result.copyright);
//   }
//   else {
//     $("#copyright").text("Image Credits: " + "Public Domain");
//   }
  
//   if(result.media_type == "video") {
//     $("#apod_img_id").css("display", "none"); 
//     $("#apod_vid_id").attr("src", result.url);
//   }
//   else {
//     $("#apod_vid_id").css("display", "none"); 
//     $("#apod_img_id").attr("src", result.url);
//   }
//   $("#reqObject").text(url);
//   $("#returnObject").text(JSON.stringify(result, null, 4));  
//   $("#apod_explaination").text(result.explanation);
//   $("#apod_title").text(result.title);
// }
// });