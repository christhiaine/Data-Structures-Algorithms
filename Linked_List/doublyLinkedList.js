class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        //check params
        const newNode = { 
            value: value,
            next: null,
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }

    prepend(value) {
        //check params
        const newNode = {
            value: value,
            next: this.head,
            prev: null
        }
        this.head.prev = newNode;
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
            next: null,
            prev: null
        } 
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this);
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
        const follower = leader.next;
        leader.next = follower.next;
        follower.prev = leader;
        this.length--;
        return this.printList();
    }

    reverse () {
        if(!this.head.next){
            return this.head;
         }
         let first = this.head;
         this.tail = this.head;
         let second = first.next;
         while(second) {
             //we store the secons.next value in a new variable temp
             const temp = second.next;
             //first positin comes all the way to second.next or the last created/used position
             //(as we use/switch about three to reverse)
             second.next = first;
             //then the first position becomes second...remember here we saved second.next with temp
             first = second;
             //then the second position(that has just been thrown to the first position from above logic) is given to temp
             second = temp;
         }
         //this.head still points at 1 which is now the last position after the while loop so ..
         this.head.next = null;
         //and then assign the first element after the while loop to be the head..
         this.head = first;
         return this;
    }

    //A tricky logic for reverse. Console logging the steps above will show/reveal what is really happening..
    //i.e how these values are being re-positioned as the loop iterates to finally position everything in the 
    //end as reversed. Go through it again for clear understanding.


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

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.remove(2);
myLinkedList.reverse();
// myLinkedList.printList();

// console.log(myLinkedList);


/*

Visit the url:  'https://visualgo.net/en/list'  for visual description of above actions performed on Linked List 

*/