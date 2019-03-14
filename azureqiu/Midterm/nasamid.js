function saveKeyWords(){
    var value = document.testform.searchBox.value;
    console.log(value);
    var url = 'https://images-api.nasa.gov/search?q=' + value;
    getJSON(url, function(nasa){
        console.log('Here is the nasa info', nasa);
    
        for(i=0;i<=4;i++){
            var title = display(nasa, i);
            var showimg = displayPhoto(nasa, i);
            var title_html = '<div class="one-set">' + 
                '<div id="title">' + title + '</div>';    
        }
        var p = document.getElementById("title");
        p.innerHTML = title_html;
        
        let picHTML = document.getElementById("image");
        picHTML.setAttribute("src", showimg);       
        });
}


// var form = document.querySelector("#searchForm");
// form.addEventListener("click",saveKeyWords);

// function saveKeyWords(e){
//     e.preventDefault();
//     var value = document.querySelector("#submit").value;
//     form.reset();
//     getJSON(value.split('').join("+"));
// }

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

// function getJSON(url) {
//     var req = new XMLHttpRequest();
//     req.responseType = 'json';
//     // var url = 'https://images-api.nasa.gov/search?q={'+keywords+'}';
//     console.log(url);
//     req.open('GET', url, true);
//     req.setRequestHeader('Accept', 'application/json');
//     req.onload = function() {
//         let resp = JSON.parse(req.response)
//         showData(resp.results);
// };
//     req.send(null);
// }

// function getJSON(keywords) {
//     var req = new XMLHttpRequest();
//     req.responseType = 'json';
//     var url = 'https://images-api.nasa.gov/search?q={'+keywords+'}';
//     req.open('GET', url, true);
//     req.setRequestHeader('Accept', 'application/json');
//     req.onload = function() {
//         let resp = JSON.parse(req.response)
//         showData(resp.results);
// };
//     req.send(null);
// }

function showData(nasa){
console.log('Here is the nasa info', nasa);
// console.log('Here is the nasa info', nasa.collection.items[0].data[0].title);


var inserttitle = [];
var nasapic = [];

for(var i=0; i<=5; i++){
    
    inserttitle.push(display(nasa,i));
}
var titleHTML = document.getElementById("title");
titleHTML.innerHTML = inserttitle[0];

for(var i=0; i<=5; i++){

    nasapic.push(displayPhoto(nasa,i));
    

}
// console.log(nasapic)
let picHTML = document.getElementById("image");
picHTML.setAttribute("src", nasapic[0]);



};

function display(orgdata, i){
    var title = orgdata.collection.items[i].data[0].title;
    console.log('Here is the nasa info', title);
    var html = '<p>' + title + '</p>';
    // p.innerHTML = title;

    return html;
}

function displayPhoto(photodata, i){
    let photo = photodata.collection.items[i].links[0].href;
    console.log('Here is the nasa info', photo);
    let html = photo;
    // p.innerHTML = title;

    return html;
}