let img;
let font;
let music;
let fft;

function preload() {
  img = loadImage('../assets/isabelle.png');
  font = loadFont('../assets/IMFellEnglish-Regular.ttf');
  music = loadSound('../assets/Umi To Syounen.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(0.2, 256);
  if (touchStarted) {
  music.loop();
  music.setVolume(0.5);
  }
}

function draw() {
  background(230);

  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    let r = map(spectrum[i], 0, 255, 80, 620);
    let t = map(spectrum[i], 0, 255, 5, 50);
    let xr = map(spectrum[i], 0, 255, 900, 1200);
    let yr = map(spectrum[i], 0, 255, 500, 800);
    noStroke();
    fill(255, 255, 255, 100);
    ellipse(width / 2, height / 2, r);
    for (let posx = width / 2 - xr; posx < width / 2 + xr; posx += width / 4) {
      for (let posy = height / 2 - yr; posy < height / 2 + yr; posy += height / 4) {
        stroke(255, 255, 255, t);
        line(width / 2, height / 2, posx, posy);
      }
    }
  }

  textAlign(CENTER);
  textFont(font);
  textSize(18);
  fill(0);
  text('Umi To Syounen - Taeko Onuki', 0, height / 1.2, width);
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
    window.open('laetitia.html', '_self');
  }

  // Previous button
  if (mouseX <= width / 6) {
    window.open('magic_ways.html', '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
