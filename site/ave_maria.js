let img;
let font;
let music;
let fft;

function preload() {
  img = loadImage('../assets/bjorn.png');
  font = loadFont('../assets/IMFellEnglish-Regular.ttf');
  music = loadSound('../assets/Miharu Koshi - Ave Maria.mp3');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight); 
  cnv.position(0, 0);
  cnv.touchStarted(userStartAudio);
  
  fft = new p5.FFT(0.1, 512);
  music.loop();
  music.setVolume(0.5);
}

function draw() {
  frameRate(3);
  background(230);

  textAlign(CENTER);
  textFont(font);
  textSize(18);
  fill(0);
  text('Ave Maria - Miharu Koshi', 0, height / 1.2, width);

  image(img, width / 2 - 250, height / 2 - 250, 500, 500);

  // Snow
  noStroke();
  let spectrum = fft.analyze();
  let i = 0;
  let r = 0;
  let t = 0;
  for (let pos = 0; pos < spectrum.length; pos++) {
    r = map(spectrum[pos], 0, 255, 3, 7);
    t = map(spectrum[pos], 0, 255, 150, 300);
    while (i < width) {
      let j = 0;
      while (j < height) {
        if (i <= width / 2 - 200 || i >= width / 2 + 200 ||
          j <= height / 2 - 200 || j >= height / 2 + 200) {
          if (random(5) < 1) {
            fill(255, 255, 255, t);
            ellipse(i, j, r, r);
          } else {
            fill(255, 255, 255, 120);
            ellipse(i, j, 3, 3);
          }
        }
        j += 30;
      }
      i += 30;
    }
  }

    r = map(spectrum[0], 0, 255, 0, 7);
    fill(255, 255, 255, 250);
    ellipse(width / 2 + 20, height / 2 - 35, r, r);


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
    window.open('olympus.html', '_self');
  }

  // Previous button
  if (mouseX <= width / 6) {
    window.open('../index.html', '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
