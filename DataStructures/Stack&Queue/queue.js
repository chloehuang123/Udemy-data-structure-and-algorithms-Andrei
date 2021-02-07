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

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;  //whatever is at the very last of the line's next item
            this.last = newNode;
            //whatever is last in line is now pointing to the new node and the new node is now last
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) { //can also do if (this.length === 0)
            //if the queue is empty
            return null;
        }
        if (this.first === this.last) {//can also do if(this.length === 1)
            this.last = null;
        }
        /*If we want to hold a pointer to the dequeued item */
        //Before we update who is first, we reference the current first person with the holdingPointer variable so we can still access it 
        const holdingPointer = this.first;
        /* */
        this.first = this.first.next; 
        //We've removing the first item at the beginning so whoever is second in line is now the first person
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
/*
Queue {
    first: Node {value: 'Joy', next: null},
    last: Node {value: 'Joy', next: null},
    length: 1
}
*/
myQueue.enqueue('Matt');
/*
Queue {
    first: Node {value: 'Joy', next: Node { value: 'Matt', next: null}},
    last: Node {value: 'Matt', next: null},
    length: 2
}
*/
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
/*
Queue {
    first: Node {value: 'Joy', next: Node { value: 'Matt', next: [Object]}},
    last: Node {value: 'Samir', next: null},
    length: 4
}
*/
myQueue.peek();
/*
Node {
    value: 'Joy', 
    next: Node { value: 'Matt', next: Node { value: 'Pavel', next: [Object] } }
}
*/
myQueue.dequeue(); //NOTE: 'Joy' node is lost in memory because we no longer have a reference to it --> nothing is pointing to that memory space
/*
Queue {
    first: Node {value: 'Matt', next: Node { value: 'Pavel', next: [Object]}},
    last: Node {value: 'Samir', next: null},
    length: 3
}
*/

