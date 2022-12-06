class bird {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    // gravity // if x > (sling shot x number)
    //world.gravity.y = 10;
  }

  objectCollision() {
    
  }


  mapCollision() {
    // if y <= (idk) bird stops falling and can roll based on the momentem that it had
    // if x <= (idk) stops the bird from traveling outside the map when hiting the wall
  }
}