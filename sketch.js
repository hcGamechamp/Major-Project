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
    image(startScreen, windowWidth, windowHeight);
  }
}

function systemCall() {
  
}