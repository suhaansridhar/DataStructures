class Node{
  constructor(value, next){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }
  
  isEmpty(){
    return this.size === 0;
  }
  
  getSize(){
    return this.size;
  }
  
  prepend(value){
    let node = new Node(value);
    
