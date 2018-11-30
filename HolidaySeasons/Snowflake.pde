class Snowflake implements Snow{
  float x = random(width);
  float y = random(height);
  float z = random(10);
  float speed = random(5)+1;
  float wiggle = random(5)-1;
  Snowflake(){
  }
  void move(){
    y+=speed;
    x+=wiggle;
    if(y>height){
      y = 0;
      x = random(width);
    }
  }
  
  void show(){
    noStroke();
    fill (255);
    ellipse(x,y,z,z);
  }
}
