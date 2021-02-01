//10 --> 5 --> 16

/*
//Node = bucket of data - contains value & next
//Value = value of data inside node
//Next = pointer to next node
let myLinkedList = {
    //head (1st node): 15
    head: {
        value: 10,
        next: {
            //2nd node: 5
            value: 5,
            next: {
                //3rd node: 16
                value: 16,
                next: null
            }
        }
    }
}
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//this = linked list being created
class LinkedList {
    constructor(value) { //creates 1st linked list node
        this.head = {
            value: value,
            next: null,
        }

        this.tail = this.head; //we only have 1 node so head is the tail

        this.length = 1;
    }

    append(value) { //O(1)
        // const newNode = {
        //     value: value,
        //     next: null,
        // } --> Equivalent to the bottom
        const newNode = new Node(value);
        this.tail.next = newNode; //grab pointer of tail and point it to this new node
        this.tail = newNode;
        this.length++;
        // return this; //this = linked list
    }

    prepend(value) { //O(1)
        // const newNode = {
        //     value: value,
        //     next: null,
        // } --> Equivalent to the bottom
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) { //not the end of the linked list
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) { //O(n)
        if (index >= this.length) {//check parameters
            return this.append(value);
        }
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        const newNode = new Node(value);
        const preNode = this.traverseToIndex(index - 1);//node before insertion point to get a reference
        const postNode = leaderNode.next;
        preNode.next = newNode;
        newNode.next = postNode;
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

    reverse() {
        //if there's only 1 node, then this.head.next will be equal to null --> !null is truthy
        //can also do if(this.length === 1)
        if (!this.head.next) {
            return this.head;
        }
        //Ex. [1, 10, 16, 88]: firstNode = 1, secondNode = 10, temp = 16
        let firstNode = this.head;
        this.tail = this.head;
        let secondNode = firstNode.next;
        //while the secondNode exists and is not null
        while (secondNode) {
            const temp = secondNode.next;
            secondNode.next = firstNode; //secondNode's next pointer will point to the firstNode now instead of the thirdNode (10 --> 1)
            firstNode = secondNode; //firstNode(head) becomes the secondNode (head becomes 10)
            secondNode = temp; //the secondNode becomes 16
        }
        this.head.next = null;
        this.head = firstNode;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10); // 10 -->
console.log(myLinkedList);
/*
LinkedList {
    head: {value: 10, next: null},
    tail: {value: 10, next: null},
    length: 1
}
*/

myLinkedList.append(5); // 10 --> 5
/*
LinkedList {
    head: {value: 10, next: { value: 5, next: null }},
    tail: {value: 5, next: null},
    length: 2
}
 */

myLinkedList.append(16); // 10 --> 5 --> 16
/*
LinkedList {
    head: {value: 10, next: { value: 5, next: [Object] }},
    tail: {value: 16, next: null},
    length: 3
}
 */

myLinkedList.prepend(1); // 1 --> 10 --> 5 --> 16
/*
LinkedList {
    head: {value: 1, next: { value: 10, next: [Object] }},
    tail: {value: 16, next: null},
    length: 4
}
 */

myLinkedList.printList(); // [1, 10, 5, 16]

myLinkedList.insert(2, 99); // [1, 10, 99, 5, 16]

myLinkedList.remove(2); // [1, 10, 5, 16]