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

    append(value) {

    }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
/*
LinkedList {
    head: {value: 10, next: null},
    tail: {value: 10, next: null},
    length: 1
}
*/