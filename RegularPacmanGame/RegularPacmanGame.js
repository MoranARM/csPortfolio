//needed for pathfinding
//import java.util.Deque;
//import java.util.Iterator;
//import java.util.LinkedList;

//use https://github.com/montagejs/collections

var pacman;
let img, map, lvlimg;
var pinky;
var blinky;
var clyde;
var inky;
var tiles = [];
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
var gameStart = false, bounce = false, choice1, choice2, choice3, choice4, toTitle = false, lvlup = false, showAllPath = false; //if true the path the ghost will follow is shown
let xpos = 107, ypos = 68, xspd = 0.7, yspd = 1;
let xdir = 1, ydir = 1;
var c1, c2, c3, c4, c5;

//loads in all of the images before the page loads
function preload(){
  //note to self, try making the background out of rectangles and ellipses to afunction loading images
  map = loadImage('assets/map.jpg');
  lvlimg = loadImage('assets/lvlmap.jpg');
}

function setup(){
  frameRate(100);
  createCanvas(448, 496);
  img = map;
  resetTiles();
  pacman = new Pacman();
  pinky = new Pinky();
  blinky = new Blinky();
  clyde = new Clyde();
  inky = new Inky();
}

function draw(){
  if(gameStart){
    startGame();
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
        tiles[j][i].show();
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
    }
    if(pacman.dotsEaten>2){
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

function allEaten(){//returns true is all dots have been eaten and false otherwise
  for(let i=0; i<28; i++){
    for(let j=0; j<31; j++){
      if(!tiles[j][i].wall && !tiles[j][i].tunnel && !tiles[j][i].eaten){
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
    tiles[j] = [];
    for(let i=0; i<28; i++){
      tiles[j][i] = new Tile(16*i+8, 16*j+8);
      switch(tilesRepresentation[j][i]){
      case 1://case 1 is a wall
        tiles[j][i].wall = true;
        break;
      case 0://case 0 is a dot
        tiles[j][i].dot = true;
        break;
      case 9://case 9 is a bigDot
        tiles[j][i].bigDot = true;
        break;
      case 2://case 2 is a tunnel
        tiles[j][i].tunnel = true;
        break;
      case 5://5 is a blank space
        tiles[j][i].eaten = true;
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
  if(choice1){//start the game
    newGame();
  }if(choice2){//watch the ai
    newGame();
    //add code to active the ai here
  }if(choice3){//choose to see the ghost Path's 
    showAllPath = !showAllPath;
  }if(choice4){//Have the title bounce on the sides of the canvas
    bounce = !bounce;
  }if(toTitle){
    gameStart = false;
    toTitle = false;
  }
}

function keyPressed(){//controls for pacman
  switch(key){
  case 'W':
    console.log("W");
    pacman.goTo = createVector(0, -1);
    pacman.turn = true;
    break;
  case 's':
    pacman.goTo = createVector(0, 1);
    pacman.turn = true;
    break;
  case 'a':
    pacman.goTo = createVector(-1, 0);
    pacman.turn= true;
    break;
  case 'd':
    pacman.goTo = createVector(1, 0);
    pacman.turn = true;
    break;
  case UP:
    pacman.goTo = createVector(0, -1);
    pacman.turn = true;
    break;
  case DOWN:
    pacman.goTo = createVector(0, 1);
    pacman.turn = true;
    break;
  case LEFT:
    pacman.goTo = createVector(-1, 0);
    pacman.turn= true;
    break;
  case RIGHT:
    pacman.goTo = createVector(1, 0);
    pacman.turn = true;
    break;
  }
}

//returns the closest tile that isn't a wall to the input vector
//input is in tile coordinates, [j][i] order
function getClosestNonWallTile(target){
  let min = 1000;
  let minIndexj = 0;
  let minIndexi = 0;
  for(let i=0; i<28; i++){//goes through each tile
    for(let j=0; j<31; j++){
      if(!tiles[j][i].wall){//if it is the current closest target
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
  big.addElement(extend);
  let best = false;//true if a path from start to finish has been found
  while(true){//continues until the best path is found or there is no path
    if(big.head==null){
      return;
    }extend = big.pop().data;
    //extend = big.pop().data;
    if(extend.path.getLast().data == finish){//if the path is found
      if(!best){//if it is the first path found, set it to the best path
        best = true;
        bestPath = extend.clone();
      }else{//if the current path found the target in a shorter distance than the previous winner
        if(bestPath.distance>extend.distance){
          bestPath = extend.clone();//set this path as the best path
        }
      }if(big.isEmpty()){//if this etend is the last path then return it as the best path
        return bestPath.clone();
      }else{//if not the current extend is useless
        extend = big.pop();//gets the next path
      }//if the last node has already been checked and the distance was shorter than this path then it is not worth using
    }if(!extend.path.getLast().data.checked || extend.distance<extend.path.getLast().data.smallestDistToLoc){
      if(!best || extend.distance+dist(extend.path.getLast().data.x, extend.path.getLast().data.y, finish.x, finish.y)<bestPath.distance){//don't look at paths that are longer than the one that has already reached the goal
        //if this is the first path to find a working path then set the smallest distance to this path's distance
        extend.path.getLast().data.smallestDistToLoc = extend.distance;
        //move all paths to sort from big then add the new paths (in the for loop) and sort them back into big
        //console.log("Big", big, "big clone", big.clone());
        sorting = big.clone();
        let tempN = new Node(0, 0);//reset Temp Node
        if(extend.path.size>1){
          tempN = extend.path.getAt(extend.path.size-2).data;//sets up the temp node to be the last in the path
        }for(let i=0; i<extend.path.getLast().data.edges.size; i++){
          if(tempN != extend.path.getLast().data.edges.getAt(i).data){//if not moving backwards the new node is not the one behind it
            //if the direction to the new node is in the opposite way then do not include this path
            let directionToNode = createVector(extend.path.getLast().data.edges.getAt(i).data.x - extend.path.getLast().data.x, extend.path.getLast().data.edges.getAt(i).data.y - extend.path.getLast().data.y);
            directionToNode.limit(vel.mag());//mag() gets the magnitude or length of a vector
            if(directionToNode.x == -1*extend.velAtLast.x && directionToNode.y == -1*extend.velAtLast.y){
            }else{//if it is not turing around
              extended = extend.clone();
              extended.addToTail(extend.path.getLast().data.edges.getAt(i).data, finish);
              extended.velAtLast = createVector(directionToNode.x, directionToNode.y);
              sorting.addElement(extended.clone());//add this extended list to the lists to be sorted
            }
          }//sorting holds all paths from big along with the new ones that were extended adding the path with the highest distance to big first so it is put at the end
        }big.clearList();
        while(!sorting.isEmpty()){
          let max = -1;
          let iMax = 0;//index of max
          for(let i=0; i<sorting.size; i++){
            //console.log(i, sorting.getAt(i), iMax, max);
            //console.log(sorting.getAt(i).data.distance, sorting.getAt(i).data.distToLast);
            if(max<sorting.getAt(i).data.distance+sorting.getAt(i).data.distToLast){//A* uses dist to goal + path length to choose the best
              iMax = i;
              max = sorting.getAt(i).data.distance+sorting.getAt(i).data.distToLast;
            }
          }big.addFirst(sorting.removeAt(iMax).data.clone());//add the best to the front so worst are at the back
        }
      }extend.path.getLast().data.checked = true;
    }if(big.isEmpty()){//true if no paths are left
      if(best == false){//true if there is no path from start to finish
        print("ERROR: No Path Found!");//error message
        return null;
      }else{//if a best path is found then it is returned
        return bestPath.clone();
      }
    }
  }
}
