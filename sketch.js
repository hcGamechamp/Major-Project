// Angry Birds/ Major Project
// Josh and Muhammad
// Nov 18, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// class  {
//   constructor() {
//     this.x = ;
//     this.y = ;
//   }
// }

let state = "start"; 
let startScreen;

function preload() {
  startScreen = loadImage("angry birds.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (state === "start") {
    image(startScreen, 0, 0, windowWidth, windowHeight);
    fill("black");
    rect(width/2.5, width/2.5, 250, 100); 
  }
  else if (state === "selection") {
    background("black");
  }
  Button();
}

function Button() { //fill this in after the above
  if (mouseInsideRect(width/2.5, width/2.5, 250, 100) && mousePressed()) {
    state = "selection";
  }
}

function mouseInsideRect(left, right, top, bottom) { // inside the button sensor
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function mousePressed() {
  
}