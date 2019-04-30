var song;
var slider;

function setup() {
  createCanvas(600, 600);
  song = loadSound("assets/samlemp3.mp3", loaded);
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(20, 20);
}

function loaded() {
  song.play();
  console.log("play");
}

function draw() {
  background(255, 0, 100);
  song.setVolume(slider.value());
}