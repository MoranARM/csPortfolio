var startX=0;
var startY=150;
var endX=0;
var endY=150;
var song;//stores the song
var pic;//stores images
var slider;//used to adjust volume
var alphaFade;//used to make lightning disappear slowly
var turn = 0, jTurn = 0, sTurn = 0, zTurn = 0, bTurn = 0, btTurn, randX, randY;
function preload(){//loads in all of the images before loading in the rest of the page
  pic = [];
  pic.push(loadImage('assets/jackOLanterns.png'));
  pic.push(loadImage('assets/dancingSkeletons.png'));
  pic.push(loadImage('assets/dancingZombie.png'));
  pic.push(loadImage('assets/threeBats.png'));
  pic.push(loadImage('assets/twoBat.png'));
  //song = loadSound("SpookyScarySkeletonsRemix.mp3");//preload (this option) vs callback
}

function setup() {
  //createCanvas(800, 800);
  createCanvas(windowWidth, windowHeight);
  song = loadSound("SpookyScarySkeletonsRemix.mp3", loaded);//callback
  //slider = createSlider(0, 1, 0.5, 0.01);
  strokeWeight(10);
  background(155);
  alphaFade = 255;
  rColor = random(255);
  gColor = random(255);
  bColor = random(255);
  rand2 = random(100);
  rand3 = random(100);
  console.log(pic);
  //song.play();//here when preloaded
}

function loaded(){
  song.loop();//here when callback
}

function draw() {
  background(0);
  //song.setVolume(slider.value());
  if(song.currentTime()>8){//does something after so many seconds into the song
    fill(255);
    ellipse(width*2/3, height*1/6, 80, 80);
  }if(frameCount>400&&frameCount%20==0){
    mousePressed();
  }if(frameCount<400){
    fill(255);
    textSize(50);
    text("Seizure Warning!!", width/4, height/2);
  }else{
    if(frameCount%60==0){
      turn = turn==pic.length? 0 : turn+1;
      randX = random(width/2);
      randY = random(height/3);
    }if(frameCount%22==0)
      jTurn = (jTurn==5)? 0 : jTurn+1;
    if(frameCount%21==0)
      sTurn = (sTurn==5)? 0 : sTurn+1;
    if(frameCount%24==0)
      zTurn = (zTurn==5)? 0 : zTurn+1;
    if(frameCount%13==0)
      bTurn = (bTurn==2)? 0 : bTurn+1;
    if(frameCount%11==0)
      btTurn = (bTurn==1)? 0 : bTurn+1;
    showDancers();
    alphaFade = alphaFade<=0?0:alphaFade-3;
    stroke(rColor, gColor, bColor, alphaFade);
    while(endX<width){
      endX=startX+(random(10));
      endY=startY+(random(19)-9);
      strokeWeight(5);
      line(startX, startY, endX, endY);
      startX=endX;
      startY=endY;
    }
  }console.log(turn);
}

function showDancers(){
  let s;//holds sx, sy, sw, sh
  switch(turn){
    case 0://Jack O Lanterns
    s = cords(jTurn);
    image(pic[turn], random(randX, randX+5), random(randY, randY+5), pic[turn].width/3, pic[turn].height/2, s[0], s[1], s[2], s[3]);
    break;
    case 1://dancing Skeletons
    s = cords(sTurn);
    image(pic[turn], random(randX, randX+5), random(randY, randY+5), pic[turn].width/3, pic[turn].height/2, s[0], s[1], s[2], s[3]);
    break;
    case 2://dancing Zombie
    s = cords(zTurn);
    image(pic[turn], random(randX, randX+5), random(randY, randY+5), pic[turn].width/3, pic[turn].height/2, s[0], s[1], s[2], s[3]);
    break;
    case 3://three Bats
    switch(bTurn){
      case 0: sx=0,sy=0,sw=pic[turn].width,sh=pic[turn].height/3; break;
      case 1: sx=0,sy=pic[turn].height/3,sw=pic[turn].width,sh=pic[turn].height/3; break;
      case 2: sx=0,sy=pic[turn].height*2/3,sw=pic[turn].width,sh=pic[turn].height/3; break;
    }s = [sx, sy, sw, sh];
    image(pic[turn], random(randX, randX+5), random(randY, randY+5), pic[turn].width, pic[turn].height/3, s[0], s[1], s[2], s[3]);
    break;
    case 4://two Bats
    switch(btTurn){
      case 0: sx=0,sy=0,sw=pic[turn].width,sh=pic[turn].height/2; break;
      case 1: sx=0,sy=pic[turn].height/2,sw=pic[turn].width,sh=pic[turn].height/2; break;
    }s = [sx, sy, sw, sh];
    image(pic[turn], random(randX, randX+5), random(randY, randY+5), pic[turn].width, pic[turn].height/2, s[0], s[1], s[2], s[3]);
    break;
    case 5://party with all of them
    for(let i=0; i<pic.length; i++)
      image(pic[i], random(5), random(5));
    text("Spooky Scary Skeleton Party!!", 36, 400);
    break;
  }
}

function cords(t){
  let sx,sy,sw,sh,s;
  switch(t){
    case 0: sx=0,sy=0,sw=pic[turn].width/3,sh=pic[turn].height/2; break;
    case 1: sx=pic[turn].width/3,sy=0,sw=pic[turn].width/3,sh=pic[turn].height/2; break;
    case 2: sx=pic[turn].width*2/3,sy=0,sw=pic[turn].width/3,sh=pic[turn].height/2; break;
    case 3: sx=0,sy=pic[turn].height/2,sw=pic[turn].width/3,sh=pic[turn].height/2; break;
    case 4: sx=pic[turn].width/3,sy=pic[turn].height/2,sw=pic[turn].width/3,sh=pic[turn].height/2; break;
    case 5: sx=pic[turn].width*2/3,sy=pic[turn].height/2,sw=pic[turn].width/3,sh=pic[turn].height/2; break;
  }s = [sx, sy, sw, sh];
  return s;
}

function mousePressed(){
  alphaFade = 255;
  rColor = random(255);
  gColor = random(255);
  bColor = random(255);
  rand2 = random(100);
  rand3 = random(100);
  startX=0;
  startY=random(height/4, 3*height/4);
  endX=0;
  endY=random(height/4, 3*height/4);
}
