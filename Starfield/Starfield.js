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

let stars;
let spd;
let ship;
let count;
let hyp;
let numStars;

function preload(){//loads in all of the images before loading in the rest of the page
  this.ship = [];
  this.ship.push(loadImage('assets/Falcon.png'));//Millennium Falcon
  this.ship.push(loadImage('assets/RepublicCruiser.png'));//Republic Cruiser from Episode I
  this.ship.push(loadImage('assets/TieFighter.png'));//Tie Fighter from Episode VIII
  this.ship.push(loadImage('assets/xWing.png'));//X-Wing
  //console.log(this.ship);//used to double check that the ships were loaded
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  this.count = 1;
  this.spd = 10;
  this.stars = [];
  this.hyp = false;
  this.numStars = 100;
  newStars(this.numStars, 25, 25, 25, 25);
  //console.log(this.stars);//checks if star objects were created
}

function newStars(t, t1, t2, t3, t4){//takes in the total when only one ship is displayed, then the total for each quadrant
  createStars(0, t, 0, windowWidth, 0, windowHeight);//first t (total) hold main view
  createStars(t, t+t1, 0, windowWidth/2, 0, windowHeight/2);//topLeft
  createStars(t+t1, t+t1+t2, windowWidth/2, windowWidth, 0, windowHeight/2);//topRight
  createStars(t+t1+t2, t+t1+t2+t3, 0, windowWidth/2, windowHeight/2, windowHeight);//bottomLeft
  createStars(t+t1+t2+t3, t+t1+t2+t3+t4, windowWidth/2, windowWidth, windowHeight/2, windowHeight);//bottomRight
}
function createStars(fi, li, x1, x2, y1, y2){//takes in first index, last index, x start, x end, y start, y end
  for(let i=fi; i<li; i++){
    this.stars[i] = new Star(x1, x2, y1, y2);
  }
}

function draw(){
  checkHyperSpd();
  background(0, 0, this.hyp ? 200 : 0);
  //this.spd = map(mouseX, 0, displayWidth, 0, 50);
	displayStars();
  displayShips();//displays the ships last so that the stars appear through their cockpits
}

function checkHyperSpd(){//switches between hyperspeed and regular flying
  if(frameCount%300 == 0){
    this.spd = 40;//possibly implement a gradual change in spd if time allows 
    this.hyp = true;
  }if(frameCount%600 == 0){
    this.spd = 10;
    this.hyp = false;
  }
}

function getStars(fi, li){
  for(let i=fi; i<li; i++){
    this.stars[i].update(this.spd);
    this.stars[i].show();
  }
}
function displayStars(){
  if(this.count<4){//if only one ship is shown
    getStars(0, this.numStars);
  }else{//if displaying all four ships at once
    getStars(this.numStars, this.stars.length);
  }
}

function displayShips(){//cyles through display each ship and then a grid of all of the ships
  if(frameCount%150 == 0){
    if(this.count == 4){
      this.count = 0;
    }else{
      this.count++;
    }
  }if(this.count<4){
    image(this.ship[this.count], 0, 0, windowWidth, windowHeight);
  }else{//displays all four
    image(this.ship[0], 0, 0, windowWidth/2, windowHeight/2);
    image(this.ship[1], windowWidth/2, 0, windowWidth/2, windowHeight/2);
    image(this.ship[2], 0, windowHeight/2, windowWidth/2, windowHeight/2);
    image(this.ship[3], windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2);
  }
}
