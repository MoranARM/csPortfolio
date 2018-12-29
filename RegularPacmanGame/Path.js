class Path{
  constructor(){
    this.path = new LinkedList();//a list of all nodes
    this.distance = 0;
    this.distToLast = 0;//the distance between the last node and the goal
    this.velAtLast;//the direction that the ghost is going at the last point on the path
    this.pathCol;
  }
  
  //adds a node at the end of the path
  addToTail(n, endNode){
    if(this.path.isEmpty()){//if the path is empty then this is the first node and the distance is still 0
      this.distance+=dist(this.path.getLast().x, this.path.getLast().y, n.x, n.y);//add the distance from the current last node in path to the new node to the overall distance
    }this.path.addElement(n);//adds the node
    this.distToLast = dist(this.path.getLast().x, this.path.getLast().y, endNode.x, endNode.y);//updats the distance to the finish
  }
  
  //return a clone of the path
  clone(){
    let temp = new Path();
    temp.path = this.path.clone();
    temp.distance = this.distance;
    temp.distToLast = this.distToLast;
    temp.velAtLast = createVector(this.velAtLast.x, this.velAtLast.y);
    return temp;
  }
  
  //removes all nodes in the path
  clear(){
    this.distance = 0;
    this.distToLast = 0;
    this.path.clearList();
  }
  
  //draws lines showing the path the ghosts are taken
  show(){
    stroke(this.pathCol);
    strokeWeight(2);
    for(let i=0; i<this.path.size-1; i++){
      line(this.path.getAt(i).data.x*16+8, this.path.getAt(i).data.y*16+8, this.path.getAt(i+1).data.x*16+8, this.path.getAt(i+1).data.y*16+8);//draws a line between each point on the path
    }console.log(this.path); 
    if(this.path.head!=null)  
      ellipse((this.path.getAt(this.path.size-1).data.x*16)+8, (this.path.getAt(this.path.size-1).data.y*16)+8, 5, 5);
  }
}
