var startX=0;
var startY=150;
var endX=0;
var endY=150;

function preload(){//loads in all of the images before loading in the rest of the page
  this.pic = [];
  this.pic.push(loadImage('assets/dancingSkeletons.png'));
  this.pic.push(loadImage('assets/dancingZombie.png'));
  this.pic.push(loadImage('assets/jackOLanterns.png'));
  this.pic.push(loadImage('assets/twoBat.png'));
}

function setup() {
  createCanvas(800, 800);
  strokeWeight(10);
  background(155);
  rColor = random(255);
  gColor = random(255);
  bColor = random(255);
  rand2 = random(100);
  rand3 = random(100);
}

function draw() {
  if(frameCount%40){
    background(155);
  }for(var i=0; i<pic.size; i++){
    image(pic[i], random(width), random(height));
  }
  stroke(rColor, gColor, bColor);
  while(endX<width){
    endX=startX+(int)(random(10));
    endY=startY+(int)(random(19)-9);
    lineWidth();
    line(startX, startY, endX, endY);
    startX=endX;
    startY=endY;
  }
}

function mousePressed(){
  startX=0;
  startY=height/2;
  endX=0;
  endY=height/2;
}
