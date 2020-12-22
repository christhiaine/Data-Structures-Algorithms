//Queues follow the FIFO idea..ie  First In First Out
//Queues can be implemented in two ways. i.e using Linked Lists or Arrays
//NOTE: For queues, you wouldn't want to build with arrays because arrays have indexes and implementing a function like enqueue or 
//dequeue will involve shifting of the indexes after...this is a Linear Time Operation O(n), which is unfavorable.


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){
				if(!this.first){
          return null;
        }
      	if(this.first === this.last){
          this.last = null;
        }
      	this.first = this.first.next;
      	this.length--;
      	return this;
    }


}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Chante');
myQueue.enqueue('Paul');
myQueue.peek();
myQueue.dequeue();