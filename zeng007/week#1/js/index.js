
//I'm trying to make a test with api function
let api = [
  {
  	video: 'nightclub.mp4',
  	weight: 5,
    class:  'five',
  },
  {
  	video: 'woodyforest.mp4',
  	weight: 3,
    class:  'three',
  },
  {
  	video: 'fireplace.mp4',
  	weight: 0,
    class:  'zero' ,
  },
  {
    video: 'farmermarket.mp4',
    weight: -3,
    class:  'minus3',
  },
  {
    video: 'flowergarden.mp4',
    weight: -5,
    class:  'minus5',
  },

  //objects=========================
  {
    video: 'sexy.mp4',
    weight: 5,
    class:  'five2',
  },
  {
    video: 'cool.mp4',
    weight: 3,
    class:  'three2',
  },
  {
    video: 'classic.mp4',
    weight: 0,
    class:  'zero2' ,
  },
  {
    video: 'womanly.mp4',
    weight: -3,
    class:  'minus32',
  },
  {
    video: 'girly.mp4',
    weight: -5,
    class:  'minus52',
  },
];

let question =[
 'PLEASE SELECT THE PLACE YOU WOULD LIKE TO SPEND TIME AT!',
 '<br />',
 '<br />',
 '<br />',
 '<br />',
 'PLEASE CHOOSE YOUR STYLE!',
 '<br />',
 '<br />',
 '<br />',
 '<br />',
];
// todo use forEach to generate HTML for these images
// append the new HTML to #imageContainer
// stretch goal: for each image, also display the name below
api.forEach(function(filename, index){
let videoQuestion = question[index];

  let html = `
    <div class="video"  class="check" class="page__toggle">
  <div class="question"> ${videoQuestion} </div>
     <label class="toggle">
    <input class="toggle__input" type="checkbox" id="${filename.class}"  onclick="function${filename.class}()">
    <span class="toggle__label">
          <span class="toggle__text"></span>
        </span>
    <video width="600" height="500" loop>
    <source src="images/${filename.video}" type="video/mp4">
     </video>
     </input>
</label>
    </div>
  `;
  $('#imageContainer').append(html);
})

var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}
