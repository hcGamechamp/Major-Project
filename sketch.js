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
const Engine = Matter.Engine;
const Matter = Matter.World;
const Bodies = Matter.Bodies;

let state = "start"; 
let startScreen;

let engine, world;

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(255);

  Engine.update(engine);
}





