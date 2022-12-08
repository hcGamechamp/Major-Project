/* eslint-disable */

class Box {
  constructor(x,y,w,h) {

    var options = {
        restitution:1
    }


    this.body = Bodies.rectangle(x, y, w, h, options);
  }
  display() {
    rectMode(CENTER);
    //fill()
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
  }
}