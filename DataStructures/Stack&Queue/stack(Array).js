class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }
}

const myStack = new Stack();
myStack.peek();
myStack.push('google'); //Stack {array: ['google']}
myStack.push('udemy'); //Stack {array: ['google', 'udemy']}
myStack.push('discord'); //Stack {array: ['google', 'udemy', 'discord']}
myStack.peek(); //'discord'
myStack.pop(); //Stack {array: ['google', 'udemy']}
myStack.pop(); //Stack {array: ['google']}
myStack.pop(); //Stack {array: []}
