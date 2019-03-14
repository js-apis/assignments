var keyz = 'Evkrvx8Bjf3MaPdI4mM3fMYjTf8fzhG1'
var headlinesListEl = document.querySelector('.headlines-list');

var nameAbbrMapping = {
  CO: 'Colorado',
  NJ: 'New Jersey',
  WA: 'Washington',
  OR: 'Oregon',
  CA: 'California',
  ID: 'Idaho',
  MT: 'Montana',
  UT: 'Utah',
  NM: 'New Mexico',
  AZ: 'Arizona',
  NV: 'Nevada',
  WY: 'Wyoming',
  ND: 'North Dakota',
  SD: 'South Dakota',
  NE: 'Nebraska',
  OK: 'Oklahoma',
  TX: 'Texas',
  KS: 'Kansas',
  MN: 'Minnesota',
  IA: 'Iowa',
  MO: 'Missouri',
  AR: 'Arkansas',
  LA: 'Louisiana',
  WI: 'Wisconsin',
  IL: 'Illinois',
  MS: 'Mississippi',
  MI: 'Michigan',
  IN: 'Indiana',
  KY: 'Kentucky',
  TN: 'Tennessee',
  AL: 'Alabama',
  OH: 'Ohio',
  WV: 'West Virginia',
  ME: 'Maine',
  VT: 'Vermont',
  NH: 'New Hampshire',
  MA: 'Massachusetts',
  GA: 'Georgia',
  NY: 'New York',
  CT: 'Connecticut',
  DE: 'Deleware',
  RI: 'Rhode Island',
  DC: 'Washington D.C.',
  MD: 'Maryland',
  VA: 'Virginia',
  FL: 'Florida',
  SC: 'South Carolina',
  NC: 'North Carolina',
  PA: 'Pennsylvania',
  AK: 'Alaska',
  HI: 'Hawai\'i'
}

$(document).ready(function() {
  $('#map').usmap({
    'stateSpecificStyles': {
      'AK' : {fill: '#333333'}
    },
    'stateSpecificHoverStyles': {
      'HI' : {fill: '#ff0'}
    },

    'mouseoverState': {
      'HI' : function(event, data) {
        //return false;
      }
    },


    'click' : function(event, data) {
      var stateName = nameAbbrMapping[data.name];
      $('#alert')
        .text('Below are the NYT Headlines for '+stateName+'.')
        .stop()
        .css('backgroundColor', '#ff0')
        .animate({backgroundColor: '#ddd'}, 1000);

        // make your ny times call here.
        var apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${stateName}&api-key=${keyz}`;
        console.log('Endpoint URL is '+apiUrl);
        getJSON(apiUrl, populateHeadlines);
    }
  });


  $('#over-md').click(function(event){
    $('#map').usmap('trigger', 'MD', 'mouseover', event);
  });

  $('#out-md').click(function(event){
    $('#map').usmap('trigger', 'MD', 'mouseout', event);
  });
});

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

var headlines = [];

function populateHeadlines(headlineData) {
// clear the list. whatever was here from the last search, should be cleared off.
 headlinesListEl.innerHTML = '';

var zedlines = headlineData.response.docs;

/*
  `headlineData` is the response we got from our API.
  It has some stuff in it. But we are only interested in its `results` property, which holds our headlines inside of it.
*/

for (var b = 0; b < zedlines.length; b ++) {
//
var response = zedlines[b].headline.main;

/*
  If `results` includes anything in it:
*/
if (response.length) {
  // loop through all the headlines - the `results` array.
    // create a new `headline` instance, using the `Headline` constructur (class) below.
    console.log(response);
    var headline = new Headline(response, headlinesListEl);
    //  // call `render` on the headline we just created, so it's added to our HTML
    headline.render();
    //  // put this headline inside the `headlines` URL. From your browser console, now you can type in `headlines` and see all the jokes.
    headlines.push(headline);
//   // }
// } else {
//   // if no results found, just show the `no headlines found` message.
//   notFoundEl.classList.remove('hidden');
  }
}
}


function Headline(headlineText, headlinesList) {
this.headlineText = headlineText;
this.headlinesList = headlinesList;
this.render = function render() {
  // make an `li` element
  this.element = document.createElement('li');
  // put the headline in it
  this.element.innerText = this.headlineText;
  // put the item in the list
  this.headlinesList.append(this.element);
}
}
