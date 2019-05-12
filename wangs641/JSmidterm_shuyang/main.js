
var joyNumber;
var fearNumber;
var angerNumber;
var surpriseNumber;
var sadnessNumber;
var disgustNumber;


let ctx = document.querySelector('canvas').getContext('2d')
let canvas = ctx.canvas
let text = canvas.getAttribute('text'); 



$(document).ready(function () {/* 
  Base URL that we need to hit. See: https://icanhazdadjoke.com/api#search-for-dad-jokes
*/
 // jquery transit is used to handle the animation
   $('input').focusin(function() {
        $('label').transition({x:'80px'},500,'ease').next()
        .transition({x:'5px'},500, 'ease');
//setTimeout needed for Chrome, for some reson there is no animation from left to right, the pen is immediately present. Slight delay to adding the animation class fixes it
         setTimeout(function(){
        $('label').next().addClass('move-pen');
        },100);
    
    });
      
      $('input').focusout(function() {
          $('label').transition({x:'0px'},500,'ease').next()
           .transition({x:'-100px'},500, 'ease').removeClass('move-pen');
      });
/* 
  Grab a reference to HTML elements that we need to work with 
*/
var searchTermEl = document.querySelector('.search-term');
var searchBtnEl = document.querySelector('.search-btn');
var formEl = document.querySelector('.search-form');

var searchTerm = '';
var replaced = '';






    
    var emotionAPI = function () {
        var baseURL  = 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/?text='
        var replaced = searchTerm.replace(/ /g, '+');

        var queryURL =  baseURL + replaced;



        $.ajax({
            url: queryURL,
            headers: {
                "X-RapidAPI-Key": "0d13fd3022mshdc7af5bb08d03acp1e0ab9jsnbb5073cbb404"
            },
            method: "GET",
            error: function() {
                location.reload();
            }
        }).then(function (result) {
            // emotion = "joy";
        


                        
            
        


            joyNumber = result.emotion_scores.joy;
            fearNumber = result.emotion_scores.fear;
            angerNumber = result.emotion_scores.anger;
            surpriseNumber = result.emotion_scores.surprise;
            sadnessNumber = result.emotion_scores.sadness;
            disgustNumber = result.emotion_scores.disgust;


 
            if (Math.max(joyNumber,fearNumber,angerNumber,surpriseNumber,sadnessNumber,disgustNumber) == joyNumber ){
              text = '😍 Joy'
            }else if (Math.max(joyNumber,fearNumber,angerNumber,surpriseNumber,sadnessNumber,disgustNumber) == fearNumber){
              text = '😱 FEAR'
            }else if (Math.max(joyNumber,fearNumber,angerNumber,surpriseNumber,sadnessNumber,disgustNumber) == angerNumber){
              text = '😡 Anger'
            }else if (Math.max(joyNumber,fearNumber,angerNumber,surpriseNumber,sadnessNumber,disgustNumber) == surpriseNumber){
              text = '😘 Surprise'
            }else if (Math.max(joyNumber,fearNumber,angerNumber,surpriseNumber,sadnessNumber,disgustNumber) == sadnessNumber){
              text = '😥 Sadness'
            }else if (Math.max(joyNumber,fearNumber,angerNumber,surpriseNumber,sadnessNumber,disgustNumber) == disgustNumber){
              text = '🤢 Disgust'
            }





   
                       console.log('joyNumber',joyNumber,'fearNumber',fearNumber,'angerNumber',angerNumber,'surpriseNumber',surpriseNumber,'sadnessNumber',sadnessNumber,'disgustNumber',disgustNumber,text);




            database.ref().push({
                emotion: emotion
            });
        });
    };
var emoji = function(){
          let fontSize = canvas.getAttribute('size'); 
canvas.width = canvas.getBoundingClientRect().width
canvas.height = canvas.getBoundingClientRect().height

let pixels = []
let animation = {
  radius:4,
  move: 0.25,
  pull: 0.15,
  dampen: 0.95,
  density: 5
}

let mouse = new Mouse(canvas)
let draw = new Draw(ctx)

init()
frame()

function init(){
  draw.setText({
    font: `${fontSize}px monospace`,
    fillStyle: '#ff9840',
    textAlign: 'center',
    textBaseline: 'middle'
  })
  draw.fillText(text, (canvas.width - fontSize) / 2 , canvas.height / 2);
  pixels = scene(ctx, animation.density)
  for(var particle of pixels) {
    particle.lx = particle.x
    particle.ly = particle.y
    particle.dx = Math.random() * 25 - 10
    particle.dy = Math.random() * 25 - 10
  }
}

/*
* Get pixels positions 
* @Params: {ctx}     -> canvas context
* @Params: {density} -> animation.density
*/
function scene(ctx, density){
  let pixelData = [];
  let data = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  let rows = ctx.canvas.width / density;
  let cols = ctx.canvas.height / density;
  
  for(let row = 0; row < rows; row++){
    for(let col = 0; col < cols; col++){
      let pixelX = col * density + density / 2
      let pixelY = row * density + density / 2

      for(let rp = 0; rp < density; rp++) {
        for(let rc = 0; rc < density; rc++) {
          // pixel -> pixel id
          let pixel = ((row * density + rp) * ctx.canvas.width + (col * density + rc)) * 4
          let colors = {
            r: data.data[pixel],
            g: data.data[pixel + 1],
            b: data.data[pixel + 2],
            a: data.data[pixel + 3],
          }
          if(colors.a){
             pixelData.push({ x: pixelX,
                              y: pixelY,
                              color: colors
                            })
            rp = density;
            rc = density;
          }
        }
      }
      

    }
  }
  return pixelData
}

/*
* Animation Frames
*/
function frame(){
  draw.clear()
  requestAnimationFrame(frame)
  
  for(var particle of pixels) {
    let color =  `rgba(${particle.color.r},${particle.color.g},${particle.color.b},${particle.color.a})`
    let distance = distanceFromMouse(particle.x, particle.y, mouse.x, mouse.y)
    let shift = 1 / distance * 6

    for(var ax of ['x', 'y']) {
      particle[ax] += particle['d'+ax]
      particle['d'+ax] += (Math.random() - 0.5) * animation.move
      particle['d'+ax] -= Math.sign(particle[ax] - particle['l'+ax]) * animation.pull
      particle['d'+ax] *= animation.dampen
      particle['d'+ax] -= Math.sign(mouse[ax]-particle[ax]) * shift
    }
    
    draw.fillCircle(particle.x, particle.y, animation.radius, color)
  }
}


function Draw(ctx){
  this.ctx = ctx
  this.canvas = canvas
  
  this.setText = proporty => {
    for(let option in proporty){
      this.ctx[option] = proporty[option]
    }
  }
  
  this.fillText = (text, x, y) => {
    this.ctx.fillText(text, x, y);
  }
  
  this.strokeText = (text, x, y,) => {
    this.ctx.strokeText(text, x, y)
  }
  
  this.fillCircle = (x, y, radius, color) => {
    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, Math.PI*2)
    if (color) this.ctx.fillStyle = color
    this.ctx.fill()
  }
  
  this.clear = () =>{
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
  }
}

/*
* Distance function from mouse position
*/
function distanceFromMouse(x, y, mX, mY){
  return Math.sqrt(Math.pow( Math.pow(x - mX, 2) + y - mY, 2))
}

/*
* Mouse position event
* @Params: {canvas} -> html canvas element
* result: mouse.x and mouse.y
*/
function Mouse(canvas) {
  this.x = 0
  this.y = 0
  this.canvas = canvas
  this.canvas.addEventListener('mousemove', function(e) {
    this.x = e.offsetX
    this.y = e.offsetY
  }.bind(this))
  this.canvas.addEventListener('mouseleave', function(e) {
    this.x = -100
    this.y = -100
  }.bind(this))
}

        }



// An array to hold our `joke` objects. We don't NEED this necessarily.
var jokes = [];

/* 

*/
formEl.addEventListener('submit', function(event) {
  /* 
    Prevent page refresh. 
    When you submit any form, the browser will automaically refresh your page.
    the following line prevents this behavior.
  */
  event.preventDefault();
  /* 
    Read the contents of what the user has written in the search input.
  */
  searchTerm = searchTermEl.value;


  /* 

    construct our final API URL.
  */
        emotionAPI();
        setTimeout(emoji,5000);

   

        

        
        




  /* 
    Call the API, and call `populateJokes` whenever the call finishes. 
    `populateJokes` is our "callback function" here.
  */


});

});






