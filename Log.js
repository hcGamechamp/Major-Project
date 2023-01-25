class Log extends BaseClass{ // creates the y and x corodiantes for the picture
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}

// all the physics for the sprite and collison are in the base class