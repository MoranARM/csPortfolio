class Planet{
  constructor(x1, x2, y1, y2){
    this.xMin = x1;
    this.xMax = x2; 
    this.yMin = y1;
    this.yMax = y2;
    this.pos = createVector(random(this.xMin/2, this.xMax/2), random(this.yMin/2, this.yMax/2), random(this.xMax/2));
    //this.pos = createVector(random(-width, width), random(-height, height), random(width));
    this.pre = createVector(0, 0, this.pos.z);//stores the previous z value, and later pre x and y
    this.sx;
    this.sy;
    this.r;
  }

  update(s){//updates the pos of the star
    this.pos.z-=s;
    if(this.pos.z<1){
      this.pos.z = random(this.xMax/2);
      this.pos.x = random(this.xMin/2, this.xMax/2);
      this.pos.y = random(this.yMin/2, this.yMax/2);
      this.pre.z = this.pos.z;
    }
  }

  show(){//displays the star
    fill(255);
    noStroke();
    //this.sx = map(this.pos.x/this.pos.z, 0, 1, this.xMin, this.xMax);
    //this.sy = map(this.pos.y/this.pos.z, 0, 1, this.yMin, this.yMax);
    this.sx = map(this.pos.x/this.pos.z, 0, 1, this.xMin/2, this.xMax/2);
    this.sy = map(this.pos.y/this.pos.z, 0, 1, this.yMin/2, this.yMax/2);
    this.r = map(this.pos.z, 0, this.xMax/2, 16, 0);//radius of the star
    ellipse(this.sx, this.sy, this.r, this.r);
  }
}
