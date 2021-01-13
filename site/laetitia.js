let img;
let font;
let music;
let fft;

function preload() {
  img = loadImage('../assets/anita.png');
  font = loadFont('../assets/IMFellEnglish-Regular.ttf');
  music = loadSound('../assets/Miharu Koshi - Laetitia.mp3');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight); 
  cnv.position(0, 0);
  cnv.touchStarted(userStartAudio);
  
  fft = new p5.FFT(0.2, 256);
  music.loop();
  music.setVolume(0.5);
}

function draw() {
  frameRate(10);
  background(230);

  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(spectrum[i], 0, 255, 20, 255);
    noStroke();
    fill(x, x, x);
    if (i <= spectrum.length / 2) {
      rect(width - i * width / 32, 0, width / 32, height);
      rect(i * width / 32, 0, width / 32, height);
    }
  }

  textAlign(CENTER);
  textFont(font);
  textSize(18);
  fill(0);
  text('Laetitia - Miharu Koshi', 0, height / 1.2, width);

  image(img, width / 2 - 250, height / 2 - 250, 500, 500);

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
    window.open('spacer_woman.html', '_self');
  }

  // Previous button
  if (mouseX <= width / 6) {
    window.open('umi.html', '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
