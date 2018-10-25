//let bacterium;
let goal;//holds the vector point of the goal
let population;//holds all bacteria
let objects;//holds obstacles in the way

function setup() {
  createCanvas(windowWidth, windowHeight);
  //bacterium = [];
  this.goal = createVector(windowWidth/2, windowHeight/4);
  newPopulation();
  //console.log(this.population);
}

function draw() {
  background(20);
  if(this.population.gen>15 && population.people[0].atGoal){//used to restart the learning process with new obstacles every 15 generations
    newPopulation();
  }if(this.population.gen>25){
    
  }
  for(let i=0; i<this.obstacles.length; i++){
    this.obstacles[i].show();
  }
  /*//makes a new bacteria every 2 seconds
  if(frameCount%200 == 0){
    for(let i=0; i<bacterium.length; i++){
      bacterium.push(new Bacteria(50, 50));
    }
  }*/
  if(this.population.allDead()){
    this.population.calcFitness();
    this.population.naturalSelection();
    this.population.mutateOffspring();
  }else{
    /*for(let bacteria of bacterium){
      bacteria.update();
      bacteria.show();
    }*/
    this.population.update();
    this.population.show();
    for(let i=0; i<this.population.people.length; i++){//checks collision between all bacteria and obstacles
      for(let j=0; j<this.obstacles.length; j++){
        if(this.obstacles[j].hit(this.population.people[i].pos)){//true if hit
          this.population.people[i].wallsHit++;
          this.obstacles[j].fixBacteria(this.population.people[i]);//moves bacteria out from the obstacle
        }
      }
    }
    for(let i=0; i<this.obstacles.length; i++){
      if(this.obstacles[i].hit(createVector(windowWidth/2, windowHeight/4))){
        this.obstacles[i].x = windowWidth;
      }if(this.obstacles[i].hit(createVector(windowWidth/2, windowHeight-10))){
        this.obstacles[i].x = windowWidth;
      }
      this.obstacles[i].show();
    }
  }
  //console.log(this.obstacles);
  //console.log("mouseX: "+mouseX+" mouseY: "+mouseY);
  fill(255);
  textSize(20);
  text('Gen: '+this.population.gen, 10, 20);
  text('Fitness Sum: '+this.population.fitSum, 10, 40);
  fill(255, 0, 0);
  ellipse(this.goal.x, this.goal.y, 10, 10);
}

function newPopulation(){
  this.population = new Population();
  this.obstacles = [];
  for(let i=0; i<6; i++){//adds obstacles
    for(let j=0; j<8; j++){
      this.obstacles.push(new Obstacle((random(2)*windowWidth/6*(j+1)), (random(2)*windowHeight/6*(i+1)), random(windowWidth/10)+windowWidth/10, random(windowHeight/10)+windowHeight/20));
    }
  }//console.log("WindowWidth: "+windowWidth+" WindowHeight: "+windowHeight);
  for(let i=0; i<this.obstacles.length; i++){
    if(this.obstacles[i].hit(createVector(windowWidth/2, windowHeight/4))){
      this.obstacles[i].x = windowWidth;
    }if(this.obstacles[i].hit(createVector(windowWidth/2, windowHeight-10))){
      this.obstacles[i].x = windowWidth;
    }
  }
  this.population.makePeople(1000);//new population with 1000 Bacteria in it
  for(let i=0; i<this.population.people.length; i++){
    this.population.people[i].brain = new Thoughts(1000);
    this.population.people[i].brain.setDirections();
  }
  
}
