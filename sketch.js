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
    rect(width/2.4, width/2.5, 250, 100); 
    Button();
  }
  else if (state === "selection") {
    background("black");
  }
}

function Button() { //fill this in after the above
  if (state === "start" && mouseInsideRect(width/2.4, width/2.5, 250, 100) && mouseIsPressed) {
    state = "selection";
  }

}
function mouseInsideRect(left, right, top, bottom) { // inside the button sensor
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

// function levelselect() {
//   if (state = "selection" && mouseInsideRect(// size of button) && mouseIsPressed) {
//     state = "levelOne";
//   }
//   if (state = "selection" && mouseInsideRect(// size of button) && mouseIsPressed) {
//     state = "levelTwo";
//   }
//   if (state = "selection" && mouseInsideRect(// size of button) && mouseIsPressed) {
//     state = "levelThree";
//   }
// }

// function selectionDisplay() {
//   rect();  // level 1
//   textSize(50);
//   text(); // 1

//   rect();  // level 2
//   textSize(50);
//   text(); // 2

//   rect();  // level 3
//   textSize(50);
//   text(); // 3
// }
