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



var baseUrl = "https://icanhazdadjoke.com/search?term="
var searchTermEl = document.querySelector('.search-term')
var searchBtnEl = document.querySelector('.search-btn')
var jokesListEl = document.querySelector('.jokes-list')
var formEl = document.querySelector('.search-form')


formEl.addEventListener('submit', function(event){
    event.preventDefault();
    var searchTerm=searchTermEl.value;
    var endPointUrl = baseUrl+searchTerm;
    
    
    getJSON(endPointUrl, function(joke){
        console.log("Got joke:", joke)
    })
})

function populateJokes(jokeData){
    var results = jokeData.result;
    if(results.length){
        for(var i = 0; i<results.length; i++){
            new Joke(results[i].joke, jokesListEl).render()
        }else{
            notFoundEl.classList.remove('hidden')
        }
        
    }
}



function Joke(jokeText, container){
    this.jokeText = jokeText
    this.container = container;
    this.render = function render(){
        this.element = document.createElement('li');
        this.element.innerText = this.jokeText;
        this.container.append(this.element)
    }
}













