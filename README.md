# Alex's Coding Journey as a csPortfolio
* My first html and css page: [Dog Page](https://moranarm.github.io/csPortfolio/dogPage/index.html)
This page was fun to make and I was able to use sound to add to the friendly vibe that I intended for the site to give off. 
* My [Lightning page](https://moranarm.github.io/csPortfolio/lightning/index.html)
My lightning page will be fixed later on as currently this version is a mess between es5 and es6 js but I will be making it run smoothly and adding music to it later.
* [College Presentation](https://docs.google.com/presentation/d/e/2PACX-1vSz63XYFmLCo4lpmcDufMi450PR8rp9EJMX666LPO8D7g4zMFWxa97SaYVDbJSRZMo6lnGwVnzlvl4R/pub?start=true&loop=true&delayms=3000)
Here is a presentation on Carnegie Mellon University to give a short run down of what they have to offer, including a couple videos to give a better understanding.
* My [Dice page](https://moranarm.github.io/csPortfolio/Dice/index.html)
My dice page was very fun to make, especially the part where the color of the description panel on the right is the exact opposite of what was on the die.
* My [Chemotaxis page](https://moranarm.github.io/csPortfolio/Chemotaxis/index.html)
My chemotaxis page uses a neural network and someone might comment that I could make it go directly to the dot, but that isn't the point, I wanted it to learn and have to figure out the closest path, without bumping into the walls too many times.
* My [Starfield page](https://moranarm.github.io/csPortfolio/Starfield/index.html)
My starfield page has vectorized versions of star wars ships and shows their cockpits as yuou fly though the galaxy, and jump to hyper speed! It took a while to get the images working, but I preloaded them and fixed all the es6 issues associated with it.
* My [String Parser](https://docs.google.com/presentation/d/e/2PACX-1vRl-XgKtMmJx78OYeaVCHrHq3IZM6J4UOC9TOFCmr3xXXtZmp-kGzUnLdkSl7BO5UwMdwR4f-LW3TAN/pub?start=true&loop=true&delayms=3000)
My string parser takes in two texts to work with, A Christmas Carol, and Frankenstein. The method that gets how many syllables are in the text was the hardest method to write and I had to figure out what exactly makes a syllable a syllable. Once the code ran without errors I worked on the interface. I went with a layout of the book covers and having the mouse on the right half will open the book to shiw the inside along with the Flesch reading score and grade level.
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
* A LinkedList class I made for my Pacman game, along with the LinkedListElement class needed for the former
Besides writing the class for the usecase of the game I wrote it to demonstrate my knowledge of the data structure and how to make it in a language that doesn't have one, javascipt.
```javascript
class LinkedList{
  constructor(head = null){
    this.head = head;
    this.size = this.head!=null ? 1 : 0;
  }
  
  getEAt(index){//returns the LinkedListElement at index
    let count = 0;
    let element = this.head;
    while(element){
      if(count === index){
        return element;
      }count++;
      element = element.next;
    }return null;
  }
  
  getAt(index){//return the node at index
    return this.getEAt(index)==null ? null : this.getEAt(index).data;
  }
  
  addAt(element, index){
    if(!this.head){//if the list is empty
      this.head = new LinkedListElement(element);
      this.size++;
      return;
    }if(index === 0){
      this.head = new LinkedListElement(element, this.head);
      this.size++;
      return;
    }const prev = this.getEAt(index-1);
    let newElement = new LinkedListElement(element);
    newElement.next = prev.next;
    prev.next = newElement;
    this.size++;
    return;
  }
  
  addElement(element){//adds on the element to the end of the LinkedList
    let newElement = new LinkedListElement(element);
    if(!this.head){
      this.head = newElement;
      this.size++;
      return;
    }let tail = this.head;
    while(tail.next !== null){
      tail = tail.next;
    }tail.next = newElement;
    this.size++;
    return;
  }
  
  pop(){//pops an element from the stack represented by the list, removes and returns the first element
    return this.removeAt(0);
  }
  
  isEmpty(){//returns true if there are no elements, it returns if the size is equal to 0
    return this.head == null;
  }
  
  clone(){//returns a copy of the LinkedList
    let temp = new LinkedList();
    temp.head = this.head;
    temp.size = this.size;
    return temp;
  }
  
  addFirst(element){
    let newElement = new LinkedListElement(element);
    newElement.next = this.head;
    this.head = newElement;
    this.size++;
  }
  
  removeAt(index){//removes the node at index and returns it
    if(!this.head){//when this.head equals null
      return;
    }if(index === 0){//if the head then make next the head
      let temp = this.head;
      temp.next = null;
      this.head = this.head.next;
      this.size--;
      return temp.data;
    }const prev = this.getEAt(index-1);
    if(!prev || !prev.next){
      return;
    }prev.next = prev.next.next;
    this.size--;
    return this.head.data;
  }
  
  clearList(){//resets all values of the LinkedList
    this.head = null;
    this.size = 0;
  }
  
  getLast(){//returns the last element in the LinkedList
    return this.size>0 ? this.getAt(this.size-1) : null;
  }
}

class LinkedListElement{
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}
```
