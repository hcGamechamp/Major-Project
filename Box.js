class Box extends BaseClass {  // creates the y and x corodiantes for the picture
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }

};


// all the physics for the sprite and collison are in the base class