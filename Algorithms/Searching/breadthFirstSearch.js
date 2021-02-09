//       9
//   4       20
//1    6   15  170

//Breadth First Search: [9, 4, 20, 1, 6, 15, 170]

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                //is the newNode < node we're at in the tree?
                if (value < currentNode.value) {
                    //true? go LEFT
                    if (!currentNode.left) {//does currentNode already have a left node? 
                        //No node to the left
                        currentNode.left = newNode;
                        return this; //can exit out of while loop
                    }
                    //There is a node to the left of currentNode
                    currentNode = currentNode.left; //Go to the next node to find an empty spot in the tree
                } else {
                    //newNode > current node we're at in the tree?
                    //go RIGHT
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this; //can exit out of while loop
                    }
                    //There is a node to the right of currentNode
                    currentNode = currentNode.right; //Go to the next node to find an empty spot in the tree
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {//can also do this.root === null
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {//keep looping until we run out of nodes to traverse through
            //if currentNode becomes null, it means the node doesn't exist in the tree
            if (value < currentNode.value) {
                currentNode = currentNode.left; //go to the next left node to find what we're looking for
            } else if (value > currentNode.value) {
                currentNode = currentNode.right; //go to the next right node to find what we're looking for
            } else if (value === currentNode.value) {
                //We got a match - that node exists!
                return currentNode;
            }
        }
        return false; //didn't find the node in the tree - return false
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null; //reference to parent
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currenNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) { //We found the node we want to delete!
                //Option 1: Current node has no right child
                if (currentNode.right === null) {

                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        //If parent > current value, make current left child a child of the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        //If parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                //Option 2: Right child which doesn't have a left child
                } else if (currentNode.right.left === null) {

                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;
                        //If parent > current node, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        //If parent < current node, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                //Option 3: Right child that has a left child
                } else {
                    //Find the right child's leftmost child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== leftmost) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left - currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = []; //keeps track of the level we're at so that we can access the children once we go through it 
        queue.push(currentNode);

        while (queue.length > 0) { //we have nothing left in the queue
            //remove first item in queue and add it to list
            currentNode = queue.shift(); 

            /* Node we're operating on and checking */
            console.log(currentNode.value); // 9 4 20 1 6 15 170

            list.push(currentNode.value); 

            if (currentNode.left) { //if current node has a left child, add it to the queue
                queue.push(currentNode.left)
            }
            if (currentNode.right) { //if current node has a right child, add it to the queue too (left to right)
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    //Not stating variables (ex. let queue = []) because once function is called again, it resets the variables to their original state (which is an empty array) --> Instead pass queue and list as parameters
    breadthFirstSearchRecursive(queue, list) {
        /* BASE CASE */ if (!queue.length) {
            return list;
        }

        let currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) { //if current node has a left child, add it to the queue
            queue.push(currentNode.left)
        }
        if (currentNode.right) { //if current node has a right child, add it to the queue too (left to right)
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchRecursive(queue, list);
    }
}

//       9
//   4       20
//1    6   15  170
const tree = new BinarySearchTree();
tree.insert(9); 
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.breadthFirstSearch(); //[9, 4, 20, 1, 6, 15, 270]
tree.breadthFirstSearchRecursive([tree.root], []); //[9, 4, 20, 1, 6, 15, 270]
//[tree.root] = queue --> NOTE: Not this.root because this keyword only works inside the binary tree class --> we have the tree class that we instantiated so it becomes tree.root
//[] = list