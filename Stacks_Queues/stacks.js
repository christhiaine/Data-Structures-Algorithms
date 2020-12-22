//Stacks follow the LIFO idea..ie  Last In First Out
//Stacks can be implemented in two ways. i.e using Linked Lists or Arrays


//1. Linked List Implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack {
    constructor (){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        if(this.length === 1) {
            return this;
        }
        return this.top;
    }

    push(value){ 
        const newNode =  new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.top){
            return null;
        }
      	if(this.top === this.bottom){
          this.bottom = null;
        }
        // const holdingPOinter = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }

}

// const myStack = new LinkedListStack();
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('discord');
// myStack.peek();
// myStack.pop();





//Array Implementation 
class ArrayStack {
    constructor() {
        this.array = [];
        //LIFO
    }

    peek(){
        return this.array[this.array.length-1];
    }

    push(value){
				this.array.push(value);
      	return this;
    }

    pop(){
				this.array.pop();
      	return this;
    }


}

const myArrayStack = new ArrayStack();
myArrayStack.peek();
myArrayStack.push('google');
myArrayStack.push('udemy');
myArrayStack.push('discord');
myArrayStack.peek();
myArrayStack.pop();

