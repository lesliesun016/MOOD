let img;
let font;
let music;
let fft;
let t = 0;

function preload() {
  img = loadImage('../assets/andrew.png');
  font = loadFont('../assets/IMFellEnglish-Regular.ttf');
  music = loadSound('../assets/Tatsuro Yamashita - Magic Ways.mp3');
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
  text('Magic Ways - Tatsuro Yamashita', 0, height / 1.2, width);

  image(img, width / 2 - 250, height / 2 - 250, 500, 500);

  noFill();
  stroke(100);
  let waveform = fft.waveform();

  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    for (let y = 0; y <= height / 2 - 250; y = y + 10) {
      const xAngle = map(waveform[i], -1, 1, -4 * PI, 4 * PI, true);
      const yAngle = map(waveform[i], -1, 1, -4 * PI, 4 * PI, true);
      const angle = xAngle * (x / width) + yAngle * (y / height);
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);
      vertex(myX, myY);
    }
  }
  endShape();

  beginShape();
  for (let i = waveform.length - 1; i >= 0; i--) {
    let x = map(i, 0, waveform.length, 0, width);
    for (let y = height / 1.2; y <= height; y = y + 10) {
      const xAngle = map(waveform[i], -1, 1, -4 * PI, 4 * PI, true);
      const yAngle = map(waveform[i], -1, 1, -4 * PI, 4 * PI, true);
      const angle = xAngle * (x / width) + yAngle * (y / height);
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);
      vertex(myX, myY);
    }
  }
  endShape();

  t += 0.01;

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
    window.open('umi.html', '_self');
  }

  // Previous button
  if (mouseX <= width / 6) {
    window.open('olympus.html', '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
