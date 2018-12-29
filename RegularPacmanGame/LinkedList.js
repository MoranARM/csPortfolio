class LinkedList{
  constructor(head = null){
    this.head = head;
    this.size = 0;
  }
  
  getAt(index){//return the node at index
    let count = 0;
    let element = this.head;
    while(element){
      if(count === index){
        return element;
      }count++;
      element = element.next;
    }return null;
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
    }const prev = this.getAt(index-1);
    let newElement = new LinkedListElement(element);
    newElement = prev.next;
    prev.next = newElement;
    this.size++;
    return this.head;
  }
  
  addElement(element){//adds on the element to the end of the LinkedList
    let newElement = new LinkedListElement(element);
    if(!this.head){
      this.head = newElement;
      this.size++;
      return this.head;
    }let tail = this.head;
    while(tail.next !== null){
      tail = tail.next;
    }tail.next = newElement
    this.size++;
    return this.head;
  }
  
  pop(){//pops an element from the stack represented by the list, removes and returns the first element
    let temp = this.head;
    this.removeAt(0);
    return temp;
  }
  
  isEmpty(){//returns true if there are no elements, it returns if the size is equal to 0
    return this.head != null;
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
    return this.head;
  }
  
  removeAt(index){//removes the node at index and returns it
    if(!this.head){//when this.head equals null
      return;
    }if(index === 0){//if the head then make next the head
      let temp = this.head;
      temp.next = null;
      this.head = this.head.next;
      this.size--;
      return temp;
    }const prev = this.getAt(index-1);
    if(!prev || !prev.next){
      return;
    }prev.next = prev.next.next;
    this.size--;
    return this.head;
  }
  
  clearList(){//resets all values of the LinkedList
    this.head = null;
    this.size = 0;
  }
  
  getLast(){//returns the last element in the LinkedList
    return this.getAt(this.size-1);
  }
}
