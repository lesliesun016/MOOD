let img;
let font;
let music;
let fft;
let time;

function preload() {
  img = loadImage('../assets/pascal.png');
  font = loadFont('../assets/IMFellEnglish-Regular.ttf');
  music = loadSound('../assets/Haruomi Hosono - Fujitsubo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(0.8, 256);
  music.loop();
  //music.setVolume(0.5);
}

function draw() {
  background(0);

  frameRate(5);
  fill(180, 0, 0);
  noStroke();
  let h = map(time, 0, music.duration() * 5, 0, height);
  if (time <= music.duration() * 5) {
    rect(0, height, width, -h);
    time++;
  } else {
    time = 0;
  }

  let spectrum = fft.analyze();
  let x = 0;
  for (let i = 0; i < spectrum.length; i++) {
    //let x = map(i, 0, spectrum.length, 0, width);
    let y = map(spectrum[i], 0, 255, 0, 2 * (height - h));
    let r = map(spectrum[i], 0, 255, 255, 180);

    stroke(180, 0, 0);
    strokeWeight(1);
    line(x, 0, x, height);

    fill(180, 0, 0);
    noStroke();
    ellipse(width / 2 - x, 0, width / 128, y);
    ellipse(width / 2 + x, 0, width / 128, y);
    x += width / 32;
    // noStroke();
    // fill(r, 0, 0);
    // ellipse(width / 2, height - 3 * y / 2, x * 1.5, y);
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
