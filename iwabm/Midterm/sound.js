var song;

function preload() {
  var context = new AudioContext();
  soundFormats('ogg', 'mp3');
  song = loadSound('sound/rain_road.mp3');
}

function setup() {

}

function imgPressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    // background(255,0,0);
  } else {
    song.play();
    // background(0,255,0);
  }
}
