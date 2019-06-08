//needed for pathfinding
//import java.util.Deque;
//import java.util.Iterator;
//import java.util.LinkedList;

//use https://github.com/montagejs/collections
//The NEAT algorithm was implemented going off of this explanation: http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf


var pacman;//used when player starts of NOT running the AI
let img, map, lvlimg;
var pinky;
var blinky;
var clyde;
var inky;
var originalTiles = [];
//Tile[][] tiles = new Tile[31][28]; //it goes y then x because of how the rows and columns are setup in order to be more visually comprehendible
let tilesRepresentation = [];
tilesRepresentation[0]= [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
tilesRepresentation[1]= [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
tilesRepresentation[2]= [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1];
tilesRepresentation[3]= [1, 9, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 9, 1];
tilesRepresentation[4]= [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1];
tilesRepresentation[5]= [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
tilesRepresentation[6]= [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1];
tilesRepresentation[7]= [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1];
tilesRepresentation[8]= [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1];
tilesRepresentation[9]= [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1];
tilesRepresentation[10]=[1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1];
tilesRepresentation[11]=[1, 1, 1, 1, 1, 1, 0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0, 1, 1, 1, 1, 1, 1];
tilesRepresentation[12]=[1, 1, 1, 1, 1, 1, 0, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 0, 1, 1, 1, 1, 1, 1]; 
tilesRepresentation[13]=[1, 1, 1, 1, 1, 1, 0, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 0, 1, 1, 1, 1, 1, 1];
tilesRepresentation[14]=[2, 2, 2, 2, 2, 2, 0, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2];
tilesRepresentation[15]=[1, 1, 1, 1, 1, 1, 0, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 0, 1, 1, 1, 1, 1, 1];
tilesRepresentation[16]=[1, 1, 1, 1, 1, 1, 0, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 0, 1, 1, 1, 1, 1, 1];
tilesRepresentation[17]=[1, 1, 1, 1, 1, 1, 0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0, 1, 1, 1, 1, 1, 1]; 
tilesRepresentation[18]=[1, 1, 1, 1, 1, 1, 0, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 0, 1, 1, 1, 1, 1, 1];
tilesRepresentation[19]=[1, 1, 1, 1, 1, 1, 0, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 0, 1, 1, 1, 1, 1, 1];
tilesRepresentation[20]=[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
tilesRepresentation[21]=[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1];
tilesRepresentation[22]=[1, 9, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 9, 1];
tilesRepresentation[23]=[1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1];
tilesRepresentation[24]=[1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1];
tilesRepresentation[25]=[1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1];
tilesRepresentation[26]=[1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1];
tilesRepresentation[27]=[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1];
tilesRepresentation[28]=[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1];
tilesRepresentation[29]=[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
tilesRepresentation[30]=[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  //used for title screen
var gameStart = false, auto=false, bounce = false, choice1, choice2, choice3, choice4, toTitle = false, lvlup = false, showAllPath = false; //if true the path the ghost will follow is shown
let xpos = 107, ypos = 68, xspd = 0.7, yspd = 1;
let xdir = 1, ydir = 1;
var c1, c2, c3, c4, c5;
var nextConnectionNo = 1000;
var population;//Population
var speed = 60;
var showBest = true;//true if only show the best of the previous generation
var runBest = false; //true if replaying the best ever game
var humanPlaying = false; //true if the user is playing
var humanPlayer, speciesChamp, genPlayerTemp;//Player
var runThroughSpecies = false;
var upToSpecies = 0;
var showBrain = false;
var showBestEachGen = false;
var upToGen = 0;
//used for staged Training
var blinkyActive = false, pinkyActive = false, inkyActive = false, clydeActive = false;
//^ after ghosts are added
var bigDotsActive = false;

var usingInputsStart = 4;
var usingInputsEnd = 11;

var upToStage = 1;
var showNothing = false;//speed up training by not displaying anything
var previousBest = 0;

//loads in all of the images before the page loads
function preload(){
  //note to self, try making the background out of rectangles and ellipses to afunction loading images
  map = loadImage('assets/map.jpg');
  lvlimg = loadImage('assets/lvlmap.jpg');
}

function setup(){
  frameRate(100);
  //createCanvas(948, 496);//448, 496
  createCanvas(windowWidth, windowHeight);
  img = map;
  resetTiles();
  pacman = new Pacman();
  pinky = new Pinky(pacman);
  blinky = new Blinky(pacman);
  clyde = new Clyde(pacman);
  inky = new Inky(pacman);
  //console.log(tiles);
  population = new Population(500);
  humanPlayer = new Player();
}

function draw(){
  if(gameStart){
    if(auto){
      runAI();
    }else{
      startGame();
    }//if(frameCount%200==0)
      //exit();//for testing purposes
  }else{//Title screen
    titleScreen();
  }
}

//Starts the portion of the game where the player can control pacman
function startGame(){
  image(img,0,0);
  text("Score:", 8, 180);
  text(pacman.score, 8, 196);
  text("Level:"+pacman.level, 8, 276);
  if(!pacman.gameOver){
    stroke(255);
    for(let j=0; j<31; j++){
      for(let i=0; i<28; i++){
        originalTiles[j][i].show();
      }
    }
    pacman.move();
    //move and show the ghosts
    blinky.setPath();
    blinky.show();
    blinky.move();
    if(pinky.release){//required so ghosts don't follow the same path
      pinky.setPath();
      pinky.show();
      pinky.move();
    }if(inky.release){
      inky.setPath();
      inky.show();
      inky.move();
    }if(clyde.release){
      clyde.setPath();
      clyde.show();
      clyde.move();
    }
    //show pacman last so the ghost path lines are under him
    pacman.show();
    if(!pacman.extraLife && pacman.score >= 10000){
      pacman.lives++;
      pacman.extraLife = true;
    }if(pacman.dotsEaten>2){
      pinky.release = true;
      if(pacman.dotsEaten>10){
        inky.release = true;
        if(pacman.dotsEaten>16){
          clyde.release = true;
        }
      }
    }
  }
  if(lvlup && frameCount%15 == 0){
    if(img.equals(map)){
      img = lvlimg;
    }else{
      img = map;
    }
  }
  if(frameCount%225 == 0 && lvlup){
    lvlup = false;
  }
  if(frameCount%50 == 0){//checks every 50 frames if the game has any dots left to advance to the next level
    if(allEaten()){
      resetTiles();
      pacman.level++;
      lvlup = true;
      pacman.resetBoard();
      pacman.dotsEaten = 0;
    }
  }
  if(pacman.lives>-1){//displays pacman icons to show how many lives are left
    if(pacman.lives>0){
      arc(388, 186, 20, 20, radians(30), radians(330), PIE);
      if(pacman.lives>1){
        arc(412, 186, 20, 20, radians(30), radians(330), PIE);
        if(pacman.lives>2){
          arc(436, 186, 20, 20, radians(30), radians(330), PIE);
        }
      }
    }
  }else{
    text("GAME OVER!", 186, 226);
    fill(c5);
    stroke(255, 255, 0);
    rect(176, 232, 95, 22);
    fill(255, 255, 0);
    text("Return to Title?", 180, 246);
    if(overChoice(mouseX, mouseY, 176, 271, 22, 232)){
      c5 = color(50);
      toTitle = true;
    }else{
      c5 = color(0);
      toTitle = false;
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function runAI(){
  drawToScreen();
  if(showBestEachGen){//show the best of each gen
    if(!genPlayerTemp.dead){//if current gen player is not dead then update it
      genPlayerTemp.look();
      genPlayerTemp.think();
      genPlayerTemp.update();
      genPlayerTemp.show();
    }else {//if dead move on to the next generation
      upToGen++;
      if(upToGen>=population.genPlayers.length){//if at the end then return to the start and stop doing it
        upToGen=0;
        showBestEachGen = false;
        enterStage(upToStage);
      }else{//if not at the end then get the next generation
        //console.log("Stage:", population.genPlayers[upToGen].stage);
        enterStage(population.genPlayers[upToGen].stage);
        genPlayerTemp = population.genPlayers[upToGen].cloneForReplay();
      }
    }
  }else if(runThroughSpecies){//show all the species 
    if(!speciesChamp.dead){//if best player is not dead
      speciesChamp.look();
      speciesChamp.think();
      speciesChamp.update();
      speciesChamp.show();
    }else{//once dead
      upToSpecies++;
      if(upToSpecies>=population.species.length){ 
        runThroughSpecies = false;
      }else{
        speciesChamp = population.species[upToSpecies].champ.cloneForReplay();
      }
    }
  }else if(humanPlaying){//if the user is controling the ship[
    if(!humanPlayer.dead) {//if the player isnt dead then move and show the player based on input
      humanPlayer.look();
      humanPlayer.update();
      humanPlayer.show();
    }else{//once done return to ai
      humanPlaying = false;
    }
  }else if(runBest){// if replaying the best ever game
    if(!population.bestPlayer.dead) {//if best player is not dead
      population.bestPlayer.look();
      population.bestPlayer.think();
      population.bestPlayer.update();
      population.bestPlayer.show();
    }else{//once dead
      runBest = false;//stop replaying it
      population.bestPlayer = population.bestPlayer.cloneForReplay();//reset the best player so it can play again
    }
  }else{//if just evolving normally
    if(!population.done()){//if any players are alive then update them
      population.updateAlive();
    }else{//all dead
      //genetic algorithm 
      switch(population.gen){
      case 20:
      if(population.bestScore<200){
        population = new Population(500); 
        return;
      }upToStage = 3;
      enterStage(3);
      population.newStage = true;
      break;
      case 60:
        upToStage = 4;
        enterStage(4);
        population.newStage = true;
        break;
      case 120:
        if(population.bestScore<220){
          population = new Population(500);
          return;
        }
      }population.naturalSelection();
    }
  }
}

//draws the display screen
function drawToScreen(){
  if(!showNothing){
    noStroke();
    strokeWeight(10);
    background(0);
    fill(0);
    rectMode(CORNERS);
    rect(0, 496, width, height);
    rect(0, 0, 948, 496);
    strokeWeight(10);
    stroke(29, 48, 137);
    line(0, 496, width, 496);
    stroke(32, 56, 178);
    strokeWeight(5);
    line(0, 496, width, 496);
    strokeWeight(10);
    stroke(29, 48, 137);
    line(448, 0, 448, height);
    line(948, 0, 948, height);
    stroke(32, 56, 178);
    strokeWeight(5);
    line(448, 0, 448, height);
    line(948, 0, 948, height);
    image(img, 0, 0);
    drawBrain();
    writeInfo();
  }
}

function drawBrain(){//shows the brain of whatever genome is currently displayed
  if(runThroughSpecies){
    speciesChamp.brain.drawGenome(748, 100, 1000, 496-100);
  }else if(runBest){
    population.bestPlayer.brain.drawGenome(748, 100, 1000, 496-100);
  }else if(humanPlaying){
    showBrain = false;
  }else if(showBestEachGen){
    genPlayerTemp.brain.drawGenome(748, 100, 1000, 496-100);
  }else{
    //population.population[0].brain.drawGenome(748, 100, 1000, 496-100);
    population.population[0].brain.drawGenome(248, 100, 800, 496-100);
  }
}

//writes info about the current player
function writeInfo(){
  fill(200);
  textAlign(LEFT);
  textSize(30);
  if(showBestEachGen){
    text("Score: " + genPlayerTemp.score, 650, 50);
    text("Gen: " + (genPlayerTemp.gen+1), 1150, 50);
    text("Stage: " + genPlayerTemp.stage, 50, height/2+200);
  }else if(runThroughSpecies){
    text("Score: " + speciesChamp.score, 650, 50);
    text("Species: " + (upToSpecies+1), 1150, 50);
    text("Players in this Species: "+population.species[upToSpecies].players.length, 50, height/2+200);
  }else if(humanPlaying){
    text("Score: "+humanPlayer.score, 650, 50);
  }else if(runBest){
    text("Score: "+population.bestPlayer.score, 650, 50);
    text("Gen: "+population.gen, 1150, 50);
  }else{
    if(showBest){          
      text("Score: "+population.population[0].score, 650, 50);
      text("Gen: "+population.gen, 1150, 50);
      text("Species: "+population.species.length, 50, height/2+300);
      text("Global Best Score: "+population.bestScore, 50, height/2+200);
    }
  }
}

function enterStage(stageNo){//takes in int
  switch(stageNo){
  case 1:
    usingInputsStart =  4;
    usingInputsEnd =  11;
    blinkyActive = false;
    inkyActive = false;
    pinkyActive = false;
    clydeActive  = false;
    bigDotsActive = false;
    break;
  case 2:
    usingInputsStart =  0;
    usingInputsEnd =  11;
    blinkyActive = true;
    inkyActive = false;
    pinkyActive = true;
    clydeActive  = false;
    bigDotsActive = false;
    break;
  case 3:
    usingInputsStart =  0;
    usingInputsEnd =  11;
    blinkyActive = true;
    inkyActive = true;
    pinkyActive = true;
    clydeActive  = true;
    bigDotsActive = false;
    break;
  case 4:
    usingInputsStart =  0;
    usingInputsEnd =  12;
    blinkyActive = true;
    inkyActive = true;
    pinkyActive = true;
    clydeActive  = true;
    bigDotsActive = true;
    break;
  }
}

function enterNewStage(){//resets the population data when entering a new stage
  population.bestScore = 0;
  for(let i=0; i<population.species.length; i++){
    population.species[i].bestFitness = 0;
  }for(let i=0; i<population.population.length; i++){
    population.population[i].bestScore = 0;
    population.population[i].fitness = 0;
    population.population[i].score = 0;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function allEaten(){//returns true is all dots have been eaten and false otherwise
  for(let i=0; i<28; i++){
    for(let j=0; j<31; j++){
      if(!originalTiles[j][i].wall && !originalTiles[j][i].tunnel && !originalTiles[j][i].eaten){
        return false;
      }
    }
  }return true;
}

function titleScreen(){
  background(0);
  if(bounce){
    xpos+=xspd*xdir;
    ypos+=yspd*ydir;
    if(xpos>213 || xpos<1){
      xdir*=-1;
    }if(ypos>429 || ypos<1){
      ydir*=-1;
    }
  }title();
  buttons();
}

function buttons(){
  refresh();
  //choice 1
  noStroke();
  fill(255, 255, 0);
  ellipse(117, 168, 20, 20);
  ellipse(331, 168, 20, 20);
  rect(117, 158, 214, 20);
  fill(c1);
  ellipse(117, 168, 18, 18);
  ellipse(331, 168, 18, 18);
  rect(117, 159, 212, 18);
  fill(255, 255, 0);
  textSize(12);
  text("Start Game", 192.5, 172);
  //choice 2
  fill(255, 255, 0);
  ellipse(117, 204, 20, 20);
  ellipse(331, 204, 20, 20);
  rect(117, 194, 214, 20);
  fill(c2);
  ellipse(117, 204, 18, 18);
  ellipse(331, 204, 18, 18);
  rect(117, 195, 212, 18);
  fill(255, 255, 0);
  text("Watch Pacman Ai", 174.5, 208);
  //choice 3
  fill(255, 255, 0);
  ellipse(117, 240, 20, 20);
  ellipse(331, 240, 20, 20);
  rect(117, 230, 214, 20);
  fill(c3);
  ellipse(117, 240, 18, 18);
  ellipse(331, 240, 18, 18);
  rect(117, 231, 212, 18);
  fill(255, 255, 0);
  text("Show Ghost Path: "+showAllPath, 158.5, 244);
  //choice 4
  fill(255, 255, 0);
  ellipse(117, 276, 20, 20);
  ellipse(331, 276, 20, 20);
  rect(117, 266, 214, 20);
  fill(c4);
  ellipse(117, 276, 18, 18);
  ellipse(331, 276, 18, 18);
  rect(117, 267, 212, 18);
  fill(255, 255, 0);
  text("Bounce Title: "+bounce, 174.5, 280);
}

function refresh(){
  c1 = overChoice(mouseX, mouseY, 117, 331, 18, 159) ? color(50) : color(0);
  choice1 = overChoice(mouseX, mouseY, 117, 331, 18, 159);
  c2 = overChoice(mouseX, mouseY, 117, 331, 18, 195) ? color(50) : color(0);
  choice2 = overChoice(mouseX, mouseY, 117, 331, 18, 195);
  c3 = overChoice(mouseX, mouseY, 117, 331, 18, 231) ? color(50) : color(0);
  choice3 = overChoice(mouseX, mouseY, 117, 331, 18, 231);
  c4 = overChoice(mouseX, mouseY, 117, 331, 18, 267) ? color(50) : color(0);
  choice4 = overChoice(mouseX, mouseY, 117, 331, 18, 267);
}

//checks if the mouse is over a choice
function overChoice(x, y, cx1, cx2, h, ry){
  return (sqrt(sq(cx1-x)+sq(ry+(h/2)-y))<h/2 || sqrt(sq(cx2-x)+sq(ry+(h/2)-y))<h/2 || (x>=cx1 && x<=cx2 && y>=ry && y<=ry+h))
}

function title(){
  fill(0);
  stroke(255, 255, 0);
  rect(xpos, ypos, 234, 66);
  textSize(50);
  noStroke();
  fill(0, 212, 212);
  text("PACMAN", xpos+10, ypos+50);
  fill(255, 75, 50);
  text("PACMAN", xpos+14, ypos+54);
  stroke(0);
  fill(255, 255, 0);
  text("PACMAN", xpos+12, ypos+52);
}

function resetTiles(){
  //give the tiles their values
  for(let j=0; j<31; j++){
    originalTiles[j] = [];
    for(let i=0; i<28; i++){
      let tileCoords = tileToPixel(createVector(i, j));//Vector
      originalTiles[j][i] = new Tile(tileCoords.x, tileCoords.y);//Tile(16*i+8, 16*j+8);
      switch(tilesRepresentation[j][i]){
      case 1://case 1 is a wall
        originalTiles[j][i].wall = true;
        break;
      case 0://case 0 is a dot
        originalTiles[j][i].dot = true;
        break;
      case 9://case 9 is a bigDot
        originalTiles[j][i].bigDot = true;
        break;
      case 2://case 2 is a tunnel
        originalTiles[j][i].tunnel = true;
        break;
      case 5://5 is a blank space
        originalTiles[j][i].eaten = true;
        break;
      } 
    }
  }
}

function newGame(){
    resetTiles();
    pacman.gameOver = false;
    pacman.score = 0;
    pacman.lives = 2;
    pacman.level = 1;
    pacman.resetBoard();
    pacman.dotsEaten = 0;
    gameStart = true;
}

function mousePressed(){
  if(!gameStart){
    if(choice1){//start the game
      newGame();
    }if(choice2){//watch the ai
      auto = true;
      gameStart = true;
      //add code to active the ai here
    }if(choice3){//choose to see the ghost Path's 
      showAllPath = !showAllPath;
    }if(choice4){//Have the title bounce on the sides of the canvas
      bounce = !bounce;
    }
  }if(toTitle){
    gameStart = false;
    auto = false;
    toTitle = false;
  }
}

function keyPressed(){//controls for pacman
  switch(keyCode){
  case 87://w
    pacman.goTo = createVector(0, -1);
    pacman.turn = true;
    humanPlayer.pacman.turnTo = createVector(0, -1);
    humanPlayer.pacman.turn = true;
    break;
  case 83://s
    pacman.goTo = createVector(0, 1);
    pacman.turn = true;
    humanPlayer.pacman.turnTo = createVector(0, 1);
    humanPlayer.pacman.turn = true;
    break;
  case 65://a
    pacman.goTo = createVector(-1, 0);
    pacman.turn= true;
    humanPlayer.pacman.turnTo = createVector(-1, 0);
    humanPlayer.pacman.turn = true;
    break;
  case 68://d
    pacman.goTo = createVector(1, 0);
    pacman.turn = true;
    humanPlayer.pacman.turnTo = createVector(1, 0);
    humanPlayer.pacman.turn = true;
    break;
  case 38://Up
    pacman.goTo = createVector(0, -1);
    pacman.turn = true;
    humanPlayer.pacman.turnTo = createVector(0, -1);
    humanPlayer.pacman.turn = true;
    break;
  case 40://Down
    pacman.goTo = createVector(0, 1);
    pacman.turn = true;
    humanPlayer.pacman.turnTo = createVector(0, 1);
    humanPlayer.pacman.turn = true;
    break;
  case 37://Left
    pacman.goTo = createVector(-1, 0);
    pacman.turn= true;
    humanPlayer.pacman.turnTo = createVector(-1, 0);
    humanPlayer.pacman.turn = true;
    break;
  case 39://Right
    pacman.goTo = createVector(1, 0);
    pacman.turn = true;
    humanPlayer.pacman.turnTo = createVector(1, 0);
    humanPlayer.pacman.turn = true;
    break;
  case 32://' ', toggle showBest
    showBest = !showBest;
    break;
  case 61://'+', speed up frame rate
    speed += 10;
    frameRate(speed);
    break;
  case 173://'-', slow down frame rate
    if(speed>10){
      speed-=10;
      frameRate(speed);
    }
  case 66://'b', run the best
    runBest = !runBest;
    break;
  case 83://'s', show species
    runThroughSpecies = !runThroughSpecies;
    upToSpecies = 0;
    speciesChamp = population.species[upToSpecies].champ.cloneForReplay();
    break;
  case 71://'g', show generations
    showBestEachGen = !showBestEachGen;
    upToGen = 0;
    enterStage(population.genPlayers[upToGen].stage);
    genPlayerTemp = population.genPlayers[upToGen].clone();
    break;
  case 78://'n', show absolutely nothing in order to speed up computation
    showNothing = !showNothing;
    break;
  case 80://'p', play the game while in AI mode
    humanPlaying = !humanPlaying;
    humanPlayer = new Player();
    break;
  case 76://'l', shows the next species in the current Generation
    if(runThroughSpecies){//if showing the species in the current generation then move on to the next species
      upToSpecies++;
      if (upToSpecies>=population.species.length){
          runThroughSpecies = false;
      }else{
        speciesChamp = population.species[upToSpecies].champ.cloneForReplay();
      }
    }else{
      if(showBestEachGen){//if showing the best player for each generation then move to the next generation
        upToGen++;
        if(upToGen>=population.genPlayers.length) {//if at the current generation then stop showing generations
          showBestEachGen = false;
          enterStage(upToStage);
        }else{
          enterStage(population.genPlayers[upToGen].stage);
          genPlayerTemp = population.genPlayers[upToGen].cloneForReplay();
        }
      }
    }break;
  }
}

function isCriticalPosition(pos){//checks if the parameter position is in the center of a tile
  let tileCoord = createVector(pos.x, pos.y);//-32
  //tileCoord.x /= 1.0;
  //tileCoord.y /= 1.0;
  return ((tileCoord.x-8)%16==0 && (tileCoord.y-8)%16==0);
}

function tileToPixel(tileCoord){//takes in Vector, converts tile coordinates to pixel coords
  let pix = createVector(tileCoord.x*16+8, tileCoord.y*16+8);
  //pix.mult(1);//scaleUp, x2
  //pix.x += 0;//500, 32
  //pix.y += 0;//windowHeight-496*2, 32
  return pix;
}

function pixelToTile(pix) {//converts pixel coordinates to tile coordinates
  let tileCoord = createVector(pix.x, pix.y);//-500, -windowHeight-496*2, -32
  //tileCoord.x /= 1.0;//2
  //tileCoord.y /= 1.0;//2
  let finalTileCoord = createVector((tileCoord.x-8)/16, (tileCoord.y - 8)/16);
  return finalTileCoord;
}

//Fixes the position of Pacman or ghosts if they go past through the tunnel
function specialCase(p){//takes in p5.vector
    p.x = (p.x == 24) ? 424 : (p.x == 424 ? 24 : p.x);//true if the pacman is leaving the tunnel
  }

//returns the closest tile that isn't a wall to the input vector
//input is in tile coordinates, [j][i] order
function getClosestNonWallTile(target){
  let min = 1000;
  let minIndexj = 0;
  let minIndexi = 0;
  for(let i=0; i<28; i++){//goes through each tile
    for(let j=0; j<31; j++){
      if(!originalTiles[j][i].wall){//if it is the current closest target
        if(dist(i, j, target.x, target.y)<min){
          min = dist(i, j, target.x, target.y);
          minIndexj = j;
          minIndexi = i;
        }
      }
    }
  }return createVector(minIndexi, minIndexj);//returns a PVector to the tile
}

//returns the shortest path from the start node to the finish node using the A* algorithm for pathfinding
function AStar(start, finish, vel){
  let big = new LinkedList();//stores all the paths
  let extend = new Path();// a temp path to be extended by another node
  let bestPath = new Path();//the final path
  let extended = new Path();//the extended path
  let sorting = new LinkedList();//used for sorting paths by their distance to the target
  //starting with big storing a path with only the starting node
  extend.addToTail(start, finish);
  extend.velAtLast = createVector(vel.x, vel.y);//used to prevent ghosts from going backwards
  
  //console.log("big size: f addElement: ", big.size);
  big.addElement(extend);
  //console.log("big size: a addElement: ", big.size);
  
  let best = false;//true if a path from start to finish has been found
  while(true){//continues until the best path is found or there is no path
    //if(big.head==null){
    //  console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    //  return;
    //}
    //console.log("big size: f pop: ", big.size);
    extend = big.pop();
    console.log(extend.path.toString());
    //console.log("big size: a pop: ", big.size);
    console.log("extend.path.getLast()", extend.path.getLast().x, extend.path.getLast().y);
    console.log("extend.path.getAt(0)", extend.path.getAt(0).x, extend.path.getAt(0).y);
    console.log("finish", finish.x, finish.y);
    if(extend.path.getLast().x == finish.x && extend.path.getLast().y == finish.y){//if the path is found
      console.log("/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o/o");
      console.log("extend.path.getLast()", extend.path.getLast().x, extend.path.getLast().y);
      console.log("finish", finish.x, finish.y);
      console.log("Well this happened");
      if(!best){//if it is the first path found, set it to the best path
        best = true;
        console.log("bestPath", bestPath);
        bestPath = extend.clone();
        console.log("bestPath", bestPath);
        console.log("A path exists!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      }else{//if the current path found the target in a shorter distance than the previous winner
        if(bestPath.distance>extend.distance){
          bestPath = extend.clone();//set this path as the best path
        }
      }if(big.isEmpty()){//if this extend is the last path then return it as the best path
        return bestPath.clone();
      }else{//if not the current extend is useless
      
        console.log("big size: f pop: ", big.size, big.getSize());
        extend = big.pop();//gets the next path
        console.log("big size: a pop: ", big.size, big.getSize());
        
      }//if the last node has already been checked and the distance was shorter than this path then it is not worth using
    }if(!extend.path.getLast().checked || extend.distance<extend.path.getLast().smallestDistToLoc){
      if(!best || extend.distance+dist(extend.path.getLast().x, extend.path.getLast().y, finish.x, finish.y)<bestPath.distance){//don't look at paths that are longer than the one that has already reached the goal
        //if this is the first path to find a working path then set the smallest distance to this path's distance
        extend.path.getLast().smallestDistToLoc = extend.distance;
        //move all paths to sort from big then add the new paths (in the for loop) and sort them back into big
        console.log("Big", big, " the toString ", big.toString(), "big clone", big.clone());
        sorting = big.clone();
        let tempN = new PathNode(0, 0);//reset Temp Node
        if(extend.path.getSize()>1){
          tempN = extend.path.getAt(extend.path.getSize()-2);//sets up the temp node to be the 2nd to last in the path
        }for(let i=0; i<extend.path.getLast().edges.getSize(); i++){
          if(tempN != extend.path.getLast().edges.getAt(i)){//if not moving backwards the new node is not the one behind it
            //if the direction to the new node is in the opposite way then do not include this path
            let directionToNode = createVector(extend.path.getLast().edges.getAt(i).x - extend.path.getLast().x, extend.path.getLast().edges.getAt(i).y - extend.path.getLast().y);
            directionToNode.limit(vel.mag());//mag() gets the magnitude or length of a vector
            if(directionToNode.x == -1*extend.velAtLast.x && directionToNode.y == -1*extend.velAtLast.y){
            }else{//if it is not turing around
              extended = extend.clone();
              extended.addToTail(extend.path.getLast().edges.getAt(i), finish);
              extended.velAtLast = createVector(directionToNode.x, directionToNode.y);
              //console.log("sorting size: addElement: ", sorting.size);
              sorting.addElement(extended.clone());//add this extended list to the lists to be sorted
              //console.log("sorting size: addElement: ", sorting.size);
            }
          }//sorting holds all paths from big along with the new ones that were extended adding the path with the highest distance to big first so it is put at the end
        }
        //console.log("big size: f clearList: ", big.size);
        big.clearList();
        //console.log("big size: a clearList: ", big.size);
        
        while(!sorting.isEmpty()){
          let max = -1;
          let iMax = 0;//index of max
          //console.log("Sorting size: ", sorting.size, " Sorting: ", sorting.toString());
          for(let i=0; i<sorting.getSize(); i++){
            //console.log("Sorting: ", sorting.toString(), " sorting size: ", sorting.size, " getAt(i): ", sorting.getAt(i), " i: ", i);
            if(max<sorting.getAt(i).distance+sorting.getAt(i).distToLast){//A* uses dist to goal + path length to choose the best
              iMax = i;
              max = sorting.getAt(i).distance+sorting.getAt(i).distToLast;
            }
          }//if(sorting.head!=null){
            //console.log("iMax: ", iMax, "sorting", sorting.toString(), "sorting size: ", sorting.size);
            //console.log("big size: addFirst: ", big.size);
            big.addFirst(sorting.removeAt(iMax).clone());//add the best to the front so worst are at the back
            //console.log("big size: addFirst: ", big.size);
          //}else{
          //  break;
          //}
        }
      }extend.path.getLast().checked = true;
    }if(big.isEmpty()){//true if no paths are left
      if(best == false){//true if there is no path from start to finish
        console.log("ERROR: No Path Found!");//error message
        return null;
      }else{//if a best path is found then it is returned
        return bestPath.clone();
      }
    }
  }
}
