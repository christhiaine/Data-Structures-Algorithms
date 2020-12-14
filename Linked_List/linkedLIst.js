class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        //check params
        const newNode = { 
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }

    prepend(value) {
        //check params
        const newNode = {
            value: value,
            next: this.head 
        }
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        //check params
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        } 
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    } 


    traverseToIndex(index){
        //check params
        let counter = 0;
        let currentNode = this.head;
        while( counter != index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        //check params..if its a negative number..or greater than length etc..
        const leader = this.traverseToIndex(index-1);
        const deletePointer = leader.next;
        leader.next = deletePointer.next;
        this.length--;
        return this.printList();
    }


    printList(){
        const array = [];
        let currentNode = this.head;
        while( currentNode !== null ) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }



}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.remove(2);
myLinkedList.printList();

// console.log(myLinkedList);


/*

Visit the url:  'https://visualgo.net/en/list'  for visual description of above actions performed on Linked List 

*/