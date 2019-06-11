class ShootingStar{
  constructor(x1, x2, y1, y2){
    this.xMid = x1;
    this.xWidth = x2; 
    this.yMid = y1;
    this.yHeight = y2;
    //this.pos = createVector(random(this.xMin/2, this.xMax/2), random(this.yMin/2, this.yMax/2), random(this.xMax/2));
    //this.pos = createVector(random(this.xMid-this.xWidth/12, this.xMid+this.xWidth/12), random(this.yMid-this.yHeight/12, this.yMid+this.yHeight/12), random(this.xWidth/12));
    this.pos = createVector(random(this.xMid-this.xWidth, this.xMid+this.xWidth), random(this.yMid-this.yHeight, this.yMid+this.yHeight), random(this.xWidth/6));
    this.pre = createVector(0, 0, this.pos.z);//stores the previous z value, and later pre x and y
    this.sx;
    this.sy;
    this.r;
    this.isNew=false;
    //this.angle = createVector(this.xMid-this.pos.x, this.yMid-this.pos.y).heading();
    this.angle = createVector(this.pos.x-this.xMid, this.pos.y-this.yMid).heading();
  }

  update(s){//updates the pos of the star
    this.angle = createVector(this.pos.x-this.xMid, this.pos.y-this.yMid).heading();
    if(this.isNew)
      this.isNew = false;
    this.pre.x = this.pos.x;
    this.pre.y = this.pos.y;
    this.pos.x += cos(this.angle)*s*2/2;
    this.pos.y += sin(this.angle)*s*2/2;
    this.pos.z-=s/2;
    //if(this.pos.z<1){
    if(this.pos.x>this.xMid+this.xWidth/2||this.pos.y>this.yMid+this.yHeight/2||this.pos.x<this.xMid-this.xWidth/2||this.pos.y<this.yMid-this.yHeight/2){
      this.pos.z = random(this.xWidth/6);
      this.isNew = true;
      this.pos.x = random(this.xMid-this.xWidth/12, this.xMid+this.xWidth/12);
      this.pos.y = random(this.yMid-this.yHeight/12, this.yMid+this.yHeight/12);
      this.pre.z = this.pos.z;
    }
  }

  show(){//displays the star
    fill(255);
    noStroke();
    //this.sx = map(this.pos.x/this.pos.z, 0, 1, this.xMin, this.xMax);
    //this.sy = map(this.pos.y/this.pos.z, 0, 1, this.yMin, this.yMax);
    this.sx = this.isNew?this.pre.x:this.pos.x;
    this.sy = this.isNew?this.pre.y:this.pos.y;
    this.r = map(this.pos.dist(createVector(this.xMid, this.yMid)), 0, createVector(this.xMid+this.xWidth/2, this.yMid+this.yHeight/2).dist(createVector(this.xMid, this.yMid)), 0, 6);//radius of the star
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
    //this.pre.z = this.pos.z;
    stroke(255);
    strokeWeight(2);
    line(this.pre.x, this.pre.y, this.sx, this.sy);
  }
}
