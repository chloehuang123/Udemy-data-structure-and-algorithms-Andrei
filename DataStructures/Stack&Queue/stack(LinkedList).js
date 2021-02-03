class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            //if the stack is empty, then the top and bottom nodes will be the same node
            this.top = newNode;
            this.bottom = newNode;
        } else {
            //hold reference to the current top node
            const currentTop = this.top; //whatever is on top will get replaced by whatever we're going to add to it
            this.top = newNode;
            this.top.next = currentTop; //currentTop (previous top node) will come after the new node
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        //there's only 1 item in the list - could also do this.length === 0
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        /*
        OPTION 1: Still want a reference to the deleted item

        const currentTop = this.top;
        this.top = this.top.next;
        this.length--;
        return currentTop;
        */

        //OPTION 2: No need for the previous top item
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
/*
Stack {
    top: Node {value: 'google', next: null},
    bottom: Node {value: 'google', next: null}.
    length: 1
}
*/
myStack.push('udemy'); //udemy is the last item so it is on top (LIFO)
/*
Stack {
    top: Node {value: 'udemy', next: Node { value: 'google', next: null}},
    bottom: Node {value: 'google', next: null}.
    length: 2
}
*/
myStack.push('discord');
/*
Stack {
    top: Node {value: 'discord', next: Node { value: 'udemy', next: [Object]}},
    bottom: Node {value: 'google', next: null}.
    length: 3
}
*/
myStack.peek();
/*
Node {
    value: 'discord',
    next: Node { value: 'udemy', next: Node { value: 'google', next: null}
}
*/