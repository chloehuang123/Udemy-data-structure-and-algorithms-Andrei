/* Same code as singly linked list - with additions for previous pointer */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous - null; //add for doubly LL
    }
}

class DoublyLinkedList {
    constructor(value) {
        head = {
            value: value,
            next: null,
            previous: null, //add for doubly LL
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value) { //O(1)
        const newNode = new Node(value);
        newNode.previous = this.tail; //add for doubly LL
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) { //O(1)
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode; //add for doubly LL
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) { //O(n)
        if (index >= this.length) {
            return this.append(value);
        }
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        const newNode = new Node(value);
        const preNode = this.traverseToIndex(index - 1);
        const postNode = leaderNode.next;
        preNode.next = newNode;
        newNode.previous = preNode; //add for doubly LL
        newNode.next = postNode;
        postNode.previous = newNode; //add for doubly LL
        this.length++;
        this.printList();
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) { //O(n)
        const preNode = this.traverseToIndex(index - 1);
        const unwantedNode = preNode.next;
        preNode.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
/*
DoublyLinkedList {
    head: {
        value: 10,
        next: {value: 5, next: [Object], previous: [Object]},
        previous: null
    },
    tail: {
        value: 16,
        next: null,
        previous: {
            value: 5,
            next: [Object],
            previous: [Object]
        }
    }
    length: 3
}
*/

myLinkedList.prepend(1);
/*
DoublyLinkedList {
    head: {
        value: 1,
        next: {value: 10, next: [Object], previous: [Object]},
        previous: null
    },
    tail: {
        value: 16,
        next: null,
        previous: {
            value: 5,
            next: [Object],
            previous: [Object]
        }
    }
    length: 3
}
*/

myLinkedList.printList(); // [1, 10, 5, 16]