function Die(x1, y1, w1, r, c, i){
  this.x = x1;//coords of the center of the die
  this.y = y1;
  this.w = w1;//width
  this.row = r;//row and column of die
  this.column = c;
  this.col = color((int)(random(256)),(int)(random(256)),(int)(random(256)));//color
  this.num = (int)(random(6)+1);//number on die
  this.index = i;//order of die, used for creating columns and rows
  this.rHighlight = false;//used to have a colored stroke around 
  this.cHighlight = false;
  
  //shows the die and its face value
  this.show = function(){
    ellipseMode(CORNER);
    rectMode(CORNER)
    fill(0);//black base for all die
    ellipse(this.x-this.w/2, this.y-this.w/2, this.w/5, this.w/5);//four rounded corners of die
    ellipse(this.x+this.w/3.6, this.y-this.w/2, this.w/5, this.w/5);
    ellipse(this.x-this.w/2, this.y+this.w/3.6, this.w/5, this.w/5);
    ellipse(this.x+this.w/3.6, this.y+this.w/3.6, this.w/5, this.w/5);
    rect(this.x-this.w/2, this.y+this.w/8-this.w/2, this.w*0.975, 0.75*this.w);//main part of die
    rect(this.x+this.w/8-this.w/2, this.y-this.w/2, 0.75*this.w, this.w*0.975);
    
    ellipseMode(RADIUS);
    fill(this.col);//color of the dots
    if(this.num==1||this.num==3||this.num==5){//middle dot
      ellipse(this.x, this.y, this.w/10, this.w/10);
    }if(this.num!=1){//top left and bottom right dot
      ellipse(this.x-this.w/4, this.y-this.w/4, this.w/10, this.w/10);
      ellipse(this.x+this.w/4, this.y+this.w/4, this.w/10, this.w/10);
    }if(this.num>=4){//top right and bottom left
      ellipse(this.x+this.w/4, this.y-this.w/4, this.w/10, this.w/10);
      ellipse(this.x-this.w/4, this.y+this.w/4, this.w/10, this.w/10);
    }if(this.num==6){//mid left and mid right dots
      ellipse(this.x-this.w/4, this.y, this.w/10, this.w/10);
      ellipse(this.x+this.w/4, this.y, this.w/10, this.w/10);
    }
  }
  
  //cahnges the face value of the die
  this.roll = function(){
    this.num = (int)(random(6)+1);
    this.col = color((int)(random(256)),(int)(random(256)),(int)(random(256)));
  }
  
  //used to highlight a die during a special occasion
  this.light = function(){
    rectMode(CENTER);
    if(rHighlight){
      fill(240,0,0);
      rect(this.x, this.y-this.w*.01, 1.21*this.w, 1.21*this.w);
    }if(cHighlight){
      fill(0,240,0);
      rect(this.x, this.y-this.w*.01, 1.21*this.w, 1.21*this.w);
    }
  }
}
