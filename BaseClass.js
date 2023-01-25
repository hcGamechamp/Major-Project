class BaseClass{  // the physics for the objects and the bodies
    constructor(x, y, width, height, angle) {
        const options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        // this was the platform for the slingshot
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){ // makes them real
        let angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}