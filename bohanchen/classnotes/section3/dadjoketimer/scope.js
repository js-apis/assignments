/* 
Notes for global and local variable
*/

//var studentCount = 12
//console.log("Number of students in class", studentCount)
//
//function foo(){
//    var snacks = ["grampla bnr", "milkshake", "cheese puffs"];
//    
//    console.log("fucntion foo says studentsCoutn is", studentCount)
//    
//    console.log("fucntion foo says studentsCoutn is", snacks)
//    
//    function nested(){
//        console.log("I am nested in functio foolm and snake are", snacks)
//    }
//}
//console.log("I am out side the foo function", snacks)


function getJSON(path, callback){
    var req = new XMLHttpRequest()
    req.responseType = 'json'
    req.open('GET', path, true)
    req.setRequestHeader('Accept', 'application/json')
    req.onload = function(){
        callback(req.response);
    }
    req.send()
}

getJSON('https://icanhazdadjoke.com/', function(joke){
    console.log("Got joke:", joke)
})


function printJoke(joke){
    var jokeEl = document.querySelector('.joke');
    jokeEl.innerText = joke.joke;
}

function loadRandomJoke(event){
    
    //prevent default behavior of this event
//    event.preventDefault()
    getJSON('https://icanhazdadjoke.com/', printJoke)
}

//var loadJokeBtn = document.querySelector(".random-joke")
//loadJokeBtn.addEventListener('click', loadRandomJoke)

window.setInterval(loadRandomJoke, 3000)














