let img;
let font;
let music;
let fft;

function preload() {
  img = loadImage('../assets/pascal.png');
  font = loadFont('../assets/IMFellEnglish-Regular.ttf');
  music = loadSound('../assets/Haruomi Hosono - Fujitsubo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(0.8, 256);
  music.loop();
  music.setVolume(0.5);

  y2 = height / 2;
}

function draw() {
  frameRate(15);
  background(0);

  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(spectrum[i], 0, 255, 0, width);
    let y = map(spectrum[i], 0, 255, 0, height);
    let r = map(spectrum[i], 0, 255, 255, 180);

    noStroke();
    fill(r, 0, 0);
    // rect((width - x) / 2, height - 3 * y / 2, x, y);
    ellipse(width / 2, height - 3 * y / 2, x * 1.5, y);
    // fill(255,255,255, 100);
    // ellipse(width / 2, height - 3 * y / 2, x, y);
  }

  noStroke();
  textAlign(CENTER);
  textFont(font);
  textSize(18);
  fill(0);
  text('Fujitsubo - Haruomi Hosono', 0, height / 1.2, width);

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
    window.open('../index.html', '_self');
  }

  // Previous button
  if (mouseX <= width / 6) {
    window.open('spacer_woman.html', '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}