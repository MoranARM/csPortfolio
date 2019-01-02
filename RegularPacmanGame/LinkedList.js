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
    }let temp = prev.next;
    prev.next = prev.next.next;
    this.size--;
    return temp.data;
  }
  
  clearList(){//resets all values of the LinkedList
    this.head = null;
    this.size = 0;
  }
  
  getLast(){//returns the last element in the LinkedList
    return this.size>0 ? this.getAt(this.size-1) : null;
  }
}
