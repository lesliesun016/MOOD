let img;
let font;
let music;
let fft;

function preload() {
  img = loadImage('../assets/wfr.png');
  font = loadFont('../assets/IMFellEnglish-Regular.ttf');
  music = loadSound('../assets/S.E.N.S. _Olympus.mp3');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight); 
  cnv.position(0, 0);
  cnv.touchStarted(userStartAudio);
  
  fft = new p5.FFT(0.2, 512);
  music.loop();
  music.setVolume(0.5);
}

function draw() {
  background(230);

  textAlign(CENTER);
  textFont(font);
  textSize(18);
  fill(0);
  text('Olympus  -  S . E . N . S', 0, height / 1.2, width);

  image(img, width / 2 - 250, height / 2 - 250, 500, 500);

  // lines
  strokeWeight(1);
  let spectrum = fft.analyze();
  for (let pos = 0; pos < spectrum.length; pos++) {
    let s = map(spectrum[pos], 0, 255, 50, 0);
    let r = map(spectrum[pos], 0, 255, 0, 600);
    let h = map(pos, 0, spectrum.length, 0, height * 2);
    stroke(s);
    line(0, h, r, h + 0.5);
    line(width, h, width - r, h + 0.5);

  }

  noStroke();
  fill(255, 255, 255, 80);
  // Next button
  if (mouseX >= width / 1.2) {
    rect(width / 1.2, 0, width / 6, height);
  }

  // Previous button
  if (mouseX <= width / 6) {
    rect(0, 0, width / 6, height);
  }
}

function touchStarted() {
  // Next button
  if (mouseX >= width / 1.2) {
    window.open('magic_ways.html', '_self');
  }

  // Previous button
  if (mouseX <= width / 6) {
    window.open('ave_maria.html', '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
