// Home - Mood
let title = ['M', 'M O', 'M O O', 'M O O D'];
let titlePos = 0;


// let instruction = ['C', 'Cl', 'Cli', 'Clic', 'Click', 'Click ', 'Click L',
//   'Click Le', 'Click Lef', 'Click Left', 'Click Left ', 'Click Left o',
//   'Click Left or', 'Click Left or ', 'Click Left or R', 'Click Left or Ri',
//   'Click Left or Rig', 'Click Left or Righ', 'Click Left or Right',
// ];
// let instructionPos = 0;

function preload() {
  font = loadFont('assets/IMFellEnglish-Regular.ttf');
  type = loadSound('assets/typewriter-key-1.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(2.5);
  background(230);
  textAlign(CENTER);
  textFont(font);
  fill(0);
  textSize(50);

  if (titlePos < title.length) {
    text(title[titlePos], 0, height / 2 - 250, width);
    type.play();
    titlePos++;
  } else {
    text('M O O D', 0, height / 2 - 250, width);
    textSize(30);
    text('Click Left or Right', 0, height / 2, width);
    // textSize(30);
    // if (instructionPos < instruction.length) {
    //   textSize(30);
    //   text(instruction[instructionPos], 0, height / 2, width);
    //   type.play();
    //   instructionPos++;
    // } else {
    //   text('Click Left or Right', 0, height / 2, width);
    // }
  }


  noStroke();
  fill(255, 255, 255, 80);
  // Next button
  if (mouseX >= width / 1.5) {
    rect(width / 1.5, 0, width / 1.5, height);
  }

  // Previous button
  if (mouseX <= width / 3) {
    rect(0, 0, width / 3, height);
  }
}

function touchStarted() {
  // Next button
  if (mouseX >= width / 1.5) {
    window.open('site/ave_maria.html', '_self');
  }

  // Previous button
  if (mouseX <= width / 3) {
    window.open('site/fujitsubo.html', '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
