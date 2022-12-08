let sprite;

function setup() {
  new canvas(242, 100);

  sprite = new sprite();
  sprite.diameter = 50;
}

// class bird {
//   constructor(x, y, radius) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;

//   }

//   move() {
//     this.x += this.dx;
//     this.y += this.dy;
//     // gravity // if x > (sling shot x number)
//     //world.gravity.y = 10;
//   }

//   display() {
//     circle(this.x, this.y, this.radius*2);
//   }

//   objectCollision() {
    
//   }


//   mapCollision() {
//     // if y <= (windowheight) bird stops falling and can roll based on the momentem that it had
//     // if x <= (windowwidth) stops the bird from traveling outside the map when hiting the wall
//   }
// }