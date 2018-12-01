# Alex's Coding Journey as a csPortfolio
* My first html and css page: [Dog Page](https://moranarm.github.io/csPortfolio/dogPage/index.html)
This page was fun to make and I was able to use sound to add to the friendly vibe that I intended for the site to give off. 
* My [Lightning page](https://moranarm.github.io/csPortfolio/lightning/index.html)
My lightning page will be fixed later on as currently this version is a mess between es5 and es6 js but I will be making it run smoothly and adding music to it later.
* My [Dice page](https://moranarm.github.io/csPortfolio/Dice/index.html)
My dice page was very fun to make, especially the part where the color of the description panel on the right is the exact opposite of what was on the die.
* My [Chemotaxis page](https://moranarm.github.io/csPortfolio/Chemotaxis/index.html)
My chemotaxis page uses a neural network and someone might comment that I could make it go directly to the dot, but that isn't the point, I wanted it to learn and have to figure out the closest path, without bumping into the walls too many times.
* My [Starfield page](https://moranarm.github.io/csPortfolio/Starfield/index.html)
My starfield page has vectorized versions of star wars ships and shows their cockpits as yuou fly though the galaxy, and jump to hyper speed! It took a while to get the images working, but I preloaded them and fixed all the es6 issues associated with it.
* [Here](https://gist.github.com/MoranARM/1e10f3b3714216b38e8e3d9bb37968be) is a gist I made to help others with the basics of es6 syntax
* A line in p5.js that converts a p5color to its opposite rgb values, used in dice
```javascript
fill(255-parseInt(di.col.toString(['rgb']).substring(5, di.col.toString(['rgb']).indexOf(",")), 10), 255-parseInt(di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).substring(0, di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).indexOf(",")), 10) , 255-parseInt(di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).substring(di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).indexOf(",")+1).substring(0, di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).substring(di.col.toString(['rgb']).slice(di.col.toString(['rgb']).indexOf(",")+1).indexOf(",")+1).indexOf(",")), 10));
```
* Pride
I am very proud of all coding that I do as I work hard on every project, the harder I had to work the more I enjoyed doing it and the more proud I am. I am currently most proud of Chemotaxis as I was able to make a working ai in es6 js.
* Hurdles
Getting the formatting issue to wrok between es5 syntax and es6 syntax was extremely hard to do but once I got it working I felt great about it and could teach others the major differences now. 
* Distinct points in the development process
I had to teach myself something that there was barely any online support or understanding of, which is getting p5js to work in es6 syntax and have classes. Another distinct point was understanding the differences in what a js object is verses a java object and how they intereact. 
* Interests
I am very interested in knowing as much about coding as possible. I want to learn all about the different data structures and algorithms, which ones are the most efficient and why an inefficient algorithm would ever be used. I am very intrigued by artificial intelligence and enjoy creating my own, especially ones that implement machine learning. I do not like to limit myself to one language, as of now the languages I can code in, from most to least knowledgable is es6 js, java, python, lua, C++ 
* Some rather difficult code implementing the NEAT algorithm in my Pacman game
```java
void addNodeMutation(ArrayList<Counter> innovation){//connection gene is randomly chosen and replaced with two new connections
    if(connections.size() == 0){
      addConnectionMutation(innovation);
      return;
    }
    int randomConnection = floor(random(connections.size()));
    while(connections.get(randomConnection).inNode == nodes.get(biasNode) && connections.size()!=1){//keep the bias connected
      randomConnection = floor(random(connections.size()));
    }
    connections.get(randomConnection).disable();//disable it
    int newNodeNum = nextNode;
    nodes.add(new NodeGene(newNodeNum));
    nextNode++;
    int connectionInnovationNum = getInnovationNumber(innovation, connections.get(randomConnection).inNode, getNode(newNodeNum));//add a new connection with weight of 1
    connections.add(new ConnectionGene(connections.get(randomConnection).inNode, getNode(newNodeNum), 1, connectionInnovationNum));
    connectionInnovationNum = getInnovationNumber(innovation, getNode(newNodeNum), connections.get(randomConnection).outNode);
    //adds a new connection from the new node that has the same weight as the disabled connection
    connections.add(new ConnectionGene(getNode(newNodeNum), connections.get(randomConnection).outNode, connections.get(randomConnection).weight, connectionInnovationNum));
    getNode(newNodeNum).layer = connections.get(randomConnection).inNode.layer+1;
    connectionInnovationNum = getInnovationNumber(innovation, nodes.get(biasNode), getNode(newNodeNum));
    connections.add(new ConnectionGene(nodes.get(biasNode), getNode(newNodeNum), 0, connectionInnovationNum));//connect the new node to the bias with a weight of 0
    //increment the layer numbers of all layers greater than or equal to this node
    if(getNode(newNodeNum).layer == connections.get(randomConnection).outNode.layer){
      for(int i=0; i<nodes.size()-1; i++){//do not include the newest node
        if(nodes.get(i).layer >= getNode(newNodeNum).layer){
          nodes.get(i).layer++;
        }
      }
      layers++;
    }
    connectNodes();
  }
```
