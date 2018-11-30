class Rain implements Snow{
  float x = random(width);
  float y = random(height);
  float z = 4;
  float speed = 6;
  Rain() {
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
    fill (100,135,255);
    ellipse(x,y,z,z);
  }
}
