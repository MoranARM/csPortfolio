class Leaf implements Snow{
  float x = random(width);
  float y = random(height);
  float z = 4;
  float speed = 6;
  int r = (int)random(5);
  float wiggle = random(2)-1;
  Leaf(){
  }
  void move(){
    y+=speed;
    x+=wiggle;
    if(y>height){
      y = 0;
      x = random(width);
      r = (int)random(5);
    }
  }
  
  void show(){
    fill(r<2?(r==0?color(219, 147, 89):color(184, 119, 34)):(r>2?(r==3?color(152, 119, 77):color(199, 156, 8)):color(203, 81, 30)));
    stroke(r<2?(r==0?color(219, 147, 89):color(184, 119, 34)):(r>2?(r==3?color(152, 119, 77):color(199, 156, 8)):color(203, 81, 30)));
    //random(2)>1 ? curve(x-60, y-30, x+20, y-30, x+60, y-50, x+50, y-10) : curve(x-60, y-30, x+20, y-30, x+60, y-50, x+50, y-10);
    //curve(x+5, y+26, x+5, y+26, x+73, y+24, x+73, y+61);
    //curve(x+5, y+26, x+73, y+24, x+73, y+61, x+15, y+65);
    curve(x-73, y-24, x+73, y+61, x+15, y+65, x+15, y+65);
  }
}
