//       9
//   4       20
//1    6   15  170

//DFS InOrder: [1, 4, 6, 9, 15, 20, 170]
//DFS PreOrder: [9, 4, 1, 6, 20, 15, 170]
//DFS PostOrder: [1, 6, 4, 15, 170, 20, 9]

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

    DFSInOrder() {
        /* RECURSIVE FUNCTION */return traverseInOrder(this.root, []);
    }

    DFSPostOrder() {
        /* RECURSIVE FUNCTION */return traversePostOrder(this.root, []);
    }

    DFSPreOrder() {
        /* RECURSIVE FUNCTION */return traversePreOrder(this.root, []);
    }
  
}

function traverseInOrder(node, list) {
    console.log(node.value); //9, 4, 1, 6, 20, 15, 170

    //if the node has a left child, use recursive function to keep going left until the node has no more children 
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    //Once there's no more nodes on the left, push the leftmost node to the list
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node, list) {
    console.log(node.value); //9, 4, 1, 6, 20, 15, 170
    //Push node value to list before we get to the leftmost node - Why? We start with the parent first in preorder
    list.push(node.value); //push parent first

    //if the node has a left child, use recursive function to keep going left until the node has no more children 
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    console.log(node.value); //9, 4, 1, 6, 20, 15, 170

    //if the node has a left child, use recursive function to keep going left until the node has no more children 
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value); //Add this statement to the end of the function since we're adding the leaf nodes first and the parent node last
    return list;
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
tree.DFSInOrder(); //[1, 4, 6, 9, 15, 20, 170]
tree.DFSPreOrder(); //[9, 4, 1, 6, 20, 15, 170]
tree.DFSPostOrder(); //[1, 6, 4, 15, 170, 20, 9]