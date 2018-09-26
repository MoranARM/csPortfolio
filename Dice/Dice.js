var allDice = [], rowSum = [], colSum = [];
var numOfDice = 0;
var ones = 0, two = 0, threes = 0, fours = 0, fives = 0, sixes = 0, sum = 0;

function setup() {
  createCanvas(1920,1080);
  background(150);
  noStroke();
  frameRate(60);
  rollDice();
  setUpDice(16, 8, 80);//first number is for columns, second number is for rows, third number is the width of the dice
}

function draw() {
  background(150);
  if(frameCount%300 == 0){
    rollDice();
    checkSpecial(16, 8);
  }
  for(var i = 0; i<numOfDice; i++){//goes through each die
    if(overDie(allDice[i])){
      overDieInfo(allDice[i]);
    }
    allDice[i].show();
  }displayInfo();
}

function mouseClicked(){
  rollDice();
  checkSpecial(16, 8);
}

//changes the face value of each die
function rollDice(){
  this.ones = 0;
  this.twos = 0;
  this.threes = 0;
  this.fours = 0;
  this.fives = 0;
  this.sixes = 0;
  this.sum = 0;
  for(var i = 0; i<numOfDice; i++){
    allDice[i].roll();
    this.sum+=allDice[i].num;
    if(allDice[i].num==1){
      this.ones++;
    }else if(allDice[i].num==2){
      this.twos++;
    }else if(allDice[i].num==3){
      this.threes++;
    }else if(allDice[i].num==4){
      this.fours++;
    }else if(allDice[i].num==5){
      this.fives++;
    }else{
      this.sixes++;
    }
  }
}

//sets up or restarts the dice
function setUpDice(cNum, rNum, w){
  allDice = [];
  rowSum = [];
  colSum = [];
  this.numOfDice = 0;
  for(var r = 0; r<rNum; r++){
    for(var c = 0; c<cNum; c++){
      allDice.push(new Die(c*w*1.1+w, r*w*1.1+w, w, r, c, numOfDice++));
    }
  }
}

//shows information about the dice
function displayInfo(){
  textSize(40);
  fill(50,100,255);
  text("Total Dice: "+this.numOfDice, allDice[this.numOfDice-1].w*0.5, (allDice[this.numOfDice-1].row+1.85)*allDice[this.numOfDice-1].w*1.1); //used to position text below all the dice
  textSize(28);
  text("Sum of Dice: "+this.sum, allDice[this.numOfDice-1].w*0.5, (allDice[this.numOfDice-1].row+2.3)*allDice[this.numOfDice-1].w*1.1);
  textSize(24);
  text("Ones: "+this.ones+" Twos: "+this.twos+" Threes: "+this.threes+" Fours: "+this.fours+" Fives: "+this.Fives+" Sixes: "+this.sixes, allDice[this.numOfDice-1].w*0.5, (allDice[this.numOfDice-1].row+2.65)*allDice[this.numOfDice-1].w*1.1);
}

//checks if the mouse is hovering over a die
function overDie(di){
  if(abs(mouseX-di.x)<di.w/2 && abs(mouseY-di.y)<di.w/2){
    return true;
  }else{
    return false;
  }
}

//displays information about the die that the mouse is currently hovering over
function overDieInfo(di){
  //overly complicated way to find the opposite of whatever number is being shown
  fill(255-parseInt(di.col.toString(['rgb']).substring(5, di.col.toString(['rgb']).indexOf(",")), 10), 255-parseInt(di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).substring(0, di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).indexOf(",")), 10) , 255-parseInt(di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).substring(di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).indexOf(",")+1).substring(0, di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).substring(di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).indexOf(",")+1).indexOf(",")), 10));
  /*console.log(di.col.toString(['rgb'])); //This is what I used to get the numbers for opposite rgb values, it took forever to write
  console.log(di.col.toString(['rgb']).substring(5, di.col.toString(['rgb']).indexOf(",")));
  console.log(di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).substring(0, di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).indexOf(",")));
  console.log(di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).substring(di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).indexOf(",")+1).substring(0, di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).substring(di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).indexOf(",")+1).indexOf(",")));
  */
  rect((allDice[this.numOfDice-1].column+1.85)*allDice[this.numOfDice-1].w*1.1, allDice[this.numOfDice-1].w*0.3, width*2, height*2);
  rect((allDice[this.numOfDice-1].column+1.65)*allDice[this.numOfDice-1].w*1.1, allDice[this.numOfDice-1].w*0.5, width*2, height*2);
  ellipseMode(CORNER);
  //fill(255);
  ellipse(((allDice[this.numOfDice-1].column+1.84)*allDice[this.numOfDice-1].w*1.1)-allDice[this.numOfDice-1].w*0.2, allDice[this.numOfDice-1].w*0.5-allDice[this.numOfDice-1].w*0.2, allDice[this.numOfDice-1].w*0.4, allDice[this.numOfDice-1].w*0.4);
  fill(di.col);
  textSize(40);
  text("Selected die: "+(di.index+1), (allDice[this.numOfDice-1].column+2)*allDice[this.numOfDice-1].w*1.1, allDice[this.numOfDice-1].w*1.1); //used to position text on the right side of all the dice
  textSize(30);
  text("Face Value: "+(di.num), (allDice[this.numOfDice-1].column+2)*allDice[this.numOfDice-1].w*1.1, allDice[this.numOfDice-1].w*1.8);
  text("Row: "+(di.row+1), (allDice[this.numOfDice-1].column+2)*allDice[this.numOfDice-1].w*1.1, allDice[this.numOfDice-1].w*2.5);
  text("Column: "+(di.column+1), (allDice[this.numOfDice-1].column+2)*allDice[this.numOfDice-1].w*1.1, allDice[this.numOfDice-1].w*3.2);
  text("Color: "+(di.col.toString(['rgb'])), (allDice[this.numOfDice-1].column+2)*allDice[this.numOfDice-1].w*1.1, allDice[this.numOfDice-1].w*3.9);
  text("Highlighted: "+(di.rHighlight ? di.rHighlight : di.cHighlight), (allDice[this.numOfDice-1].column+2)*allDice[this.numOfDice-1].w*1.1, allDice[this.numOfDice-1].w*4.6);
}

//checks for a common sum in a row or column and then highlights them
function checkSpecial(cNum, rNum){
  for(var r = 0; r<rNum; r++){//goes through each row
    for(var c = 0; c<cNum; c++){
      rowSum[r]+=allDice[(r+1)*(c+1)-1].num;
    }
  }for(var c = 0; c<cNum; c++){//goes through each row
    for(var r = 0; r<rNum; r++){
      rowSum[c]+=allDice[r*c+1].num;
    }
  }
  console.log(rowSum);
  console.log(colSum);
  
}
