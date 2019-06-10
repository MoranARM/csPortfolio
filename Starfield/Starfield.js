/***************************************************************************
(*) Javascript uses Duck Typing, which means that instead of using an 
object's type to determine suitability it looks at the object's methods and 
properties to see if it is suitible.
(*) Even the latest ECMA2019 does not support interfaces
(*) I have decided to use abstract classes that throw an error if the method
in that class is not overridden
 - This is the simlplist way to have an "interface"
 - This avoids having to deal with modules that can go out of date
 - Avoids a module that has "interfaces" but uses const instead of classes
 - documentation: https://www.npmjs.com/package/implement-js
***************************************************************************/

/*
Ideas of what to add:

- Planets
- turn regular into shooting star
- switch star so that it has a velocity
- have another star that has an acceleration so that it can curve

*/

let stars;
let spd;
let ship;
let count;
let hyp;
let numStars;
let hypStart, hypEnd;

function preload(){//loads in all of the images before loading in the rest of the page
  ship = [];
  ship.push(loadImage('assets/Falcon.png'));//Millennium Falcon
  ship.push(loadImage('assets/RepublicCruiser.png'));//Republic Cruiser from Episode I
  ship.push(loadImage('assets/TieFighter.png'));//Tie Fighter from Episode VIII
  ship.push(loadImage('assets/xWing.png'));//X-Wing
  //console.log(this.ship);//used to double check that the ships were loaded
}

function setup() {
  frameRate(60);
	createCanvas(windowWidth, windowHeight);
  count = 1;
  spd = 5;
  stars = [];
  hyp = false;
  hypStart = -50;
  hypEnd = -50;
  numStars = 400;
  //numStars = 100;
  newStars(numStars, 25, 25, 25, 25);
  //console.log(this.stars);//checks if star objects were created
}

function newStars(t, t1, t2, t3, t4){//takes in the total when only one ship is displayed, then the total for each quadrant
  createStars(0, t, -width/2, width/2, -height/2, height/2);//first t (total) hold main view
  createStars(t, t+t1, width/4, width/2, height*0.9/4, height*1.1/4);//topLeft
  //createStars(t+t1, t+t1+t2, 0, width/2, 0, height/2);//topRight
  //createStars(t+t1+t2, t+t1+t2+t3, 0, width/2, height/2, height);//bottomLeft
  //createStars(t+t1+t2+t3, t+t1+t2+t3+t4, width/2, width, height/2, height);//bottomRight
}

//Used for full screen Ships
function createStars(fi, li, x1, x2, y1, y2, full){//takes in first index, last index, x start, x end, y start, y end
  for(let i=fi; i<li; i++){
    stars[i] = new Star(x1, x2, y1, y2);
  }
}

function draw(){
  background(0, 0, hyp ? 200 : 0);//basic hyperspeed color change
  strokeWeight(3);
  checkHyperSpd();
  //spd = map(mouseX, 0, displayWidth, 0, 50);//can be used to control the speed of stars based off of the mouseX position
  if(count!=4)
    translate(width*3/4, height*3/4);
	displayStars();
  displayShips();//displays the ships last so that the stars appear through their cockpits
  if(frameCount%10==0)
    console.log("MouseX:"+mouseX+", MouseY:"+mouseY);
}

function checkHyperSpd(){//switches between hyperspeed and regular flying
  if(frameCount%300 == 0&&!frameCount%600 == 0){
    hypStart = frameCount;
    //spd = 40;
    hyp = true;
  }if(frameCount%600 == 0){
    //spd = 5;
    hyp = false;
    hypEnd = frameCount;
  }if(hyp&&frameCount<hypStart+25){
    spd++;
    background(0,0, map(spd, 5, 30, 0, 200));//allows for a more gradual change
  }if(!hyp&&frameCount<hypEnd+25){
    spd--;
    background(0,0, map(spd, 30, 5, 200, 0));
  }
}

function getStars(fi, li){
  for(let i=fi; i<li; i++){
    stars[i].update(spd);
    stars[i].show();
  }
}

function displayStars(){
  //if(count<4){//if only one ship is shown
    getStars(0, numStars);
  //}else{//if displaying all four ships at once
    //getStars(numStars, stars.length);
  //}
}

function displayShips(){//cyles through display each ship and then a grid of all of the ships
  if(frameCount%150 == 0){
    count = count==4?0:count+1;
  }if(count<4){
    image(ship[count], -width*3/4, -height*3/4, width, height);
  }else{//displays all four
    image(ship[0], 0, 0, width/2, height/2);
    image(ship[1], width/2, 0, width/2, height/2);
    image(ship[2], 0, height/2, width/2, height/2);
    image(ship[3], width/2, height/2, width/2, height/2);
  }
}
