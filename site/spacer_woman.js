let img;
let font;
let music;
let fft;

function preload() {
  img = loadImage('../assets/rooney.png');
  font = loadFont('../assets/IMFellEnglish-Regular.ttf');
  music = loadSound('../assets/Charlie - Spacer Woman (original 1983).mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(0.2, 256);
  music.loop();
  music.setVolume(0.5);
}

function draw() {
  background(0);

  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    let t = map(spectrum[i], 0, 255, 5, 200);
    //let w = map(spectrum[i], 0, 255, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    stroke(255, 255, 255, t);
    for (let x = 0; x < width / 128; x++) {
      //line(width / 2, 0, random(width), h);
      line(0, height, random(width), h);
      line(width, height, random(width), h);
      line(0, 0, random(width), h);
      line(width, 0, random(width), h);
    }
  }

  textAlign(CENTER);
  textFont(font);
  textSize(18);
  fill(0);
  text('Spacer Woman - Charlie', 0, height / 1.2, width);

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
    window.open('fujitsubo.html', '_self');
  }

  // Previous button
  if (mouseX <= width / 6) {
    window.open('laetitia.html', '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}