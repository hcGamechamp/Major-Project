class Ground { // creates the ground
    constructor(x,y,width,height) {
      const options = {
          isStatic: true // makes the sprite statsic/ not ghost like
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      let pos = this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
