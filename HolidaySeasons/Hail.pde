class Hail implements Snow {
  float x = random(width);
  float y = random(height);
  float z = random(4)+8;
  float speed = 12.5;
  Hail() {
  }
  void move(){
    y+=speed;
    if(y>height){
      y = 0;
      x = random(width);
    }
  }
  
  void show(){
    noStroke();
    fill (232,252,255);
    ellipse(x,y,z,z);
  }
}
