class Obstacle{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    //this.col = color((int)(random(256)),(int)(random(256)),(int)(random(256)));
    this.col = color((int)(random(56)+40),(int)(random(156)+100),(int)(random(56)+200));
  }
  
  show(){
    fill(this.col);
    rect(this.x, this.y, this.w, this.h);
  }
  
  hit(pos){//true if bacteria is inside of the obstacle
    return (pos.x>this.x && pos.x<this.x+this.w && pos.y>this.y && pos.y<this.y+this.h);
  }
  
  fixBacteria(b){
    b.pos.x = b.pos.x>this.x ? this.x-1 : b.pos.x;
    b.pos.x = b.pos.x<this.x+this.w ? this.x+this.y+1 : b.pos.x;
    b.pos.y = b.pos.y>this.y ? this.y-1 : b.pos.y;
    b.pos.y = b.pos.y<this.y+this.h ? this.y+this.h+1 : b.pos.y;
  }
}
