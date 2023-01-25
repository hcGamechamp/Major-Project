class Pig extends BaseClass { // creates the y and x corodiantes for the picture
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed); // testing purposes
   if(this.body.speed < 2.5){  // allows the pig to appear if under a certain speed / not knocked away
    super.display();
   }
   else{ // makes the pig disapear
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }
score(){ // adds the score after the pigs death
  if (this.Visiblity < 0 && this.Visiblity > -1005){
    score++;
  }
}


};