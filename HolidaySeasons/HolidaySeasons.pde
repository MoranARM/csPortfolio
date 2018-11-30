int seasons = 0;//0 is fall, 1 is transition to winter, 2 is winter, etc.
Snow[] snow = new Snow[2350];
int snowflakes = 900, raindrops = 900, hailchunks = 450, leaves = 100;

void setup(){
  fullScreen();
  addSnow(snowflakes, raindrops, hailchunks, leaves);
}

void draw(){
  background(50);
  textSize(height/10);
  switch(seasons){
    case 0://fall
      text("Fall", width/16, height/6);
      drawFallTree(width/5, height, height/6, 90);
      showFalling(snowflakes+raindrops+hailchunks, snowflakes+raindrops+hailchunks+leaves);
      break;
    case 1://transition to winter
      text("Are you sure it is still Fall?", width/16, height/6);
      drawFallTree(width/5, height, height/6, 90);
      showFalling(snowflakes+raindrops+hailchunks, snowflakes+raindrops+hailchunks+leaves);
      showFalling(0, snowflakes);
      break;
    case 2://winter
      text("Winter", width/16, height/6);
      drawWinterTree(width/6, height, height/6, 90);
      showFalling(0, snowflakes);
      break;
    case 3://transition to spring
      text("Some snow is melting!", width/16, height/6);
      drawWinterTree(width/6, height, height/6, 90);
      showFalling(0, snowflakes);
      showFalling(snowflakes, snowflakes+raindrops);
      break;
    case 4://spring
      text("Spring", width/16, height/6);
      drawSTree(width/6, height, height/6, 90);
      showFalling(snowflakes, snowflakes+raindrops);
      break;
    case 5://transition to summer
      text("It's almost warm enough to swim!", width/16, height/6);
      drawSTree(width/6, height, height/6, 90);
      showFalling(snowflakes, snowflakes+raindrops);
      showFalling(snowflakes+raindrops, snowflakes+raindrops+hailchunks);
      break;
    case 6://summer
      text("Why is it hailing in Summer?", width/16, height/6);
      drawSTree(width/6, height, height/4, 90);
      showFalling(snowflakes+raindrops, snowflakes+raindrops+hailchunks);
      break;
    case 7://transition to fall
      text("That's a nice cool breeze", width/16, height/6);
      drawSTree(width/6, height, height/4, 90);
      showFalling(snowflakes+raindrops, snowflakes+raindrops+hailchunks);
      showFalling(snowflakes+raindrops+hailchunks, snowflakes+raindrops+hailchunks+leaves);
      break;
  }seasons = frameCount%2 == 0 ? (frameCount%120==0 ? (seasons==7 ? 0 : seasons+1) : seasons) : (frameCount%120==0 ? (seasons==7 ? 0 : seasons+1) : seasons);//seasons last 120 frames, transition 120
}

void showFalling(int start, int stop){
  for(int i=start; i<stop; i++){
    snow[i].move();
    snow[i].show();
  }
}

void addSnow(int snowflakes, int raindrops, int hailchunks, int leaves){
  for(int i=0; i<snowflakes; i++){
    snow[i] = new Snowflake();
  }for(int i=snowflakes; i<snowflakes+raindrops; i++){
    snow[i] = new Rain();
  }for(int i=snowflakes+raindrops; i<snowflakes+raindrops+hailchunks; i++){
    snow[i] = new Hail();
  }for(int i=snowflakes+raindrops+hailchunks; i<snowflakes+raindrops+hailchunks+leaves; i++){
    snow[i] = new Leaf();
  }
}

void drawFallTree(float x0, float y0, float len, float angle) {
  if (len > 10) {
    stroke(142, 83, 49);
    float x1 = x0 + cos(radians(angle))*len;
    float y1 = y0 - sin(radians(angle))*len;
    line(x0, y0, x1, y1);
    drawFallTree(x1, y1, len * 0.75, angle + 30);
    drawFallTree(x1, y1, len * 0.66, angle - 50);
  }
}

void drawWinterTree(float x0, float y0, float len, float angle) {
  if (len > 2) {
    stroke(142, 83, 49);
    float x1 = x0 + cos(radians(angle))*len;
    float y1 = y0 - sin(radians(angle))*len;
    line(x0, y0, x1, y1);
    drawWinterTree(x1, y1, len * 0.75, angle + 10);
    drawWinterTree(x1, y1, len * 0.66, angle - 50);
  }
}

void drawSTree(float x0, float y0, float len, float angle) {
  if (len > 10) {
    stroke(142, 83, 49);
    float x1 = x0 + cos(radians(angle))*len;
    float y1 = y0 - sin(radians(angle))*len;
    line(x0, y0, x1, y1);
    drawSTree(x1, y1, len * 0.75, angle - 20);
    drawSTree(x1, y1, len * 0.66, angle + 20);
  }
}
