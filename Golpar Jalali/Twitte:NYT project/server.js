var express = require ('express');
var axios = require ('axios');

var app = express();
var port = process.env.PORT || 8080

//reach html, front end
app.use(express.static('Public'));

const Twit = require('twit');
const config = require ('./config.js');

//twitter
const T = new Twit(config.twitter); 
var params = {  
    id:'1'
}

//New york times
var nyt = require('newyorktimes')(config.NYT);

app.get('/Twitter/trends', function (req, res) { 
    T.get('trends/place',params, function(err, data, response){
      	var trends = data[0].trends.map(t => ({name:t.name, size: t.tweet_volume}))
        res.send(trends); 

    });
}); 



//call NYT
app.get('/NYT/articles', function (req, res) { 
  var filters = {
    pub_date: "2019-04-30",
  }

  //Date.
  var d = new Date()
  var filter_query = `pub_date:(${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()})`
  
  axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
          "api-key": config.NYT.api_key,
         fq: filter_query,
     }
 }).then(function (response) {
    res.send(response.data.response.docs.map(d => d.headline.main));
  })
  .catch(function (error) {
    res.send(error);
  });

}); 

//runs the server
app.listen(port, function () { 
    console.log("Server is listening on port " + port); 
});