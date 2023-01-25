const Engine = Matter.Engine; // Matter.js world settings
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// all the bodies available, background and platfrom variables
let engine, world; 
let box1, pig1,pig3;
let backgroundImg,platform; 
let bird, slingshot;


let gameState = "onSling";
let bg = "sprites/bg.png";
let score = 0; // sets the score to zero


function preload() {  // preloads the time of day function/ checks the time of day
    // bgI = loadImage('sprites/bg.png');  // this was supposed to be used for the level selection, we didnt have enough time to debug
    // startScreen = loadImage("angry birds.jpg");
    // levelScreen = loadImage("background.jpg");
    // levelButton = loadImage("play.png");
    // themeSong = loadSound('Angry Birds Theme Song.mp3');
    // HTPScreen = loadImage("HTP Screen.png");
    getBackgroundImg();
}


function setup(){
    let canvas = createCanvas(1200,400);
    engine = Engine.create(); // creates world and generates engine
    world = engine.world;




    ground = new Ground(600,height,1200,20); // creates ground and podium
    platform = new Ground(150, 305, 300, 170);


    box1 = new Box(700,320,70,70); // sets the positions for the objects
    box2 = new Box(920,320,70,70); // ground floor
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);


    box3 = new Box(700,240,70,70); // second floor
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);


    log3 = new Log(810,180,300, PI/2); // roof/third floor
    box5 = new Box(810,160,70,70); 
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);


    bird = new Bird(200,50); // sets the birds positon


    slingshot = new SlingShot(bird.body,{x:200, y:50}); // forms the slingshot around the bird
}


function draw(){
    // if (state === "Start") { // this was the structure of the start and level screen, had the merge been successful
    //     background(startScreen, windowWidth, windowHeight);
    //     themeSong.stop();
    //     if (mouseInsideRect(450, 700, 300, 550) && mouseIsPressed) {
    //       state = "selection";
    //       themeSong.play();
    //     }
    //   }
      
    //   else if (state === "selection") {
    //     background(levelScreen, windowWidth, windowHeight);
    //     if (mouseInsideRect(75, 200, 150, 250) && mouseIsPressed) {
    //       state = "HTP";
    //     }
    //   }  
    
    //   else if (mouseInsideRect(300, 435, 150, 250) && mouseIsPressed) {
    //     state = "Lvl2";
    //     }
      
      
    
    //   else if (state === "HTP") {
    //     background(HTPScreen, windowWidth, windowHeight);
    //     if (mouseInsideRect(900, 1125, 250, 380) && mouseIsPressed) {
    //       state = "Lvl1"
    //     }
    //   }
          
    //   else if (state === "Lvl1") {
    //     themeSong.stop();
  if(backgroundImg) { 
    background(backgroundImg);


    noStroke(); // creates scoreboard
    textSize(35) 
    fill("white");
    text("score  "+ score, width-300,50)
 
    Engine.update(engine);
    strokeWeight(4);
    box1.display(); // displays the objects with the appropiate images
    box2.display(); // first floor
    
    pig1.display();
    pig1.score();
    log1.display();


    box3.display(); // second floor
    box4.display();
    pig3.display();
    pig3.score();


    log3.display(); // roof/third floor
    box5.display();
    log4.display();
    log5.display();


    bird.display(); // displays the birds image

    platform.display(); // displays the grounds
    ground.display();
    
    slingshot.display(); // displays slingshot
  }   
}


function mouseDragged(){ // upon cliking and draging back, updates the visuals of the birds x and y cordinates
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}




function mouseReleased(){ // relases the bird upon release of the mouse
    slingshot.fly();
    gameState = "launched";
}


function keyPressed(){ 
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}


async function getBackgroundImg(){ // Json function allowing background change depedning on the timee of day in real life (works opposite to the time of day/inverted time)
    let response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    let responseJSON = await response.json();


    let datetime = responseJSON.datetime;
    let hour = datetime.slice(11,13);


    if(hour >= 6 && hour>=11){
        bg = "sprites/bg.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}


// function mouseInsideRect(left, right, top, bottom) { // function for the start button
//     return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
// }