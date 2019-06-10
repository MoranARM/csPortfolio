class ShootingStar{
  constructor(x1, x2, y1, y2){
    this.xMin = x1;
    this.xMax = x2; 
    this.yMin = y1;
    this.yMax = y2;
    //this.pos = createVector(random(this.xMin/2, this.xMax/2), random(this.yMin/2, this.yMax/2), random(this.xMax/2));
    this.pos = createVector(random(this.xMin/4, this.xMax/4), random(this.yMin/4, this.yMax/4), random(this.xMax/4));
    //this.pos = createVector(random(windowWidth*6/13, windowWidth*7/13), random(windowHeight*6/13, windowHeight*7/13), random(windowWidth/6));
    this.pre = createVector(0, 0, this.pos.z);//stores the previous z value, and later pre x and y
    this.sx;
    this.sy;
    this.r;
  }

  update(s){//updates the pos of the star
    this.pos.z-=s;
    if(this.pos.z<1){
      this.pos.z = random(this.xMax/2);
      this.pos.x = random(this.xMin, this.xMax);
      this.pos.y = random(this.yMin, this.yMax);
      this.pre.z = this.pos.z;
    }
  }

  show(){//displays the star
    fill(255);
    noStroke();
    //this.sx = map(this.pos.x/this.pos.z, 0, 1, this.xMin, this.xMax);
    //this.sy = map(this.pos.y/this.pos.z, 0, 1, this.yMin, this.yMax);
    this.sx = map(this.pos.x/this.pos.z, 0, 1, this.xMin, this.xMax);
    this.sy = map(this.pos.y/this.pos.z, 0, 1, this.yMin, this.yMax);
    this.r = map(this.pos.z, 0, this.xMax/2, 16, 0);//radius of the star
    ellipse(this.sx, this.sy, this.r, this.r);
    this.pre.x = map(this.pos.x/this.pre.z, 0, 1, this.xMin, this.xMax);
    this.pre.y = map(this.pos.y/this.pre.z, 0, 1, this.yMin, this.yMax);
    this.pre.z = this.pos.z;
    stroke(255);
    line(this.pre.x, this.pre.y, this.sx, this.sy);
  }
}
