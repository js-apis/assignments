let url = 'https://api.nasa.gov/planetary/apod?api_key='
let key = 'upxesctrXnMFIUgwEzoIswfRSVeJHyhbF5Q0wDWQ'


function getJson(path, callback){
    var req = new XMLHttpRequest()
    req.responseType = 'json'
    req.open('GET', path, true)
    req.setRequestHeader('Accept', 'application/json')
    req.onload = function(){
        callback(req.response)
    }
    
    req.send()
}

getJson(url+key, function(data){
    console.log(data.url)
    console.log(data.title)
    console.log(data.explanation)
    
    document.getElementById('apod_img_id').src=data.url
    document.getElementById('apod_title').innerHTML=data.title
    document.getElementById('apod_explaination').innerHTML=data.explanation

    
    

})