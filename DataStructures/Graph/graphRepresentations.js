// 1. EDGE LIST 
/*
- Shows the connection (edges) between nodes
 */
const graph1 = [
    [0, 2], //node 0 is connected to node 2
    [2, 3], //node 2 is connected to node 3
    [2, 1],
    [1, 3],
];

//2. ADJACENT LIST
/*
- The index of the array is the value of the actual graph node
- Index is the node and the value is the node's neighbors
- Can use arrays, objects or linked lists to implement 
 */
const graph2 = [
    [2], //index 0/node 0 is connected to node 2
    [2, 3], //index 1/node 1 is connected to 2, 3
    [0, 1, 3], //index 2/node 2 is connected to 0, 1, 3
    [1, 2], //index 3/node 3 is connected to 1, 2
]

const graph2a = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2],
}

//3. ADJACENT MATRIX
/*
- Have 0s and 1s indicating whether the node X has a conenction to node y
- 0 = no connection VS 1 = there is a connection
- Can become a weighted graph by substituting the numbers rather than using 0 & 1
*/
const graph3 = [
    [0, 0, 1, 0], //index 0 has a connection with 2
    [0, 0, 1, 1], //index 1 has a connection to 2, 3
    [1, 1, 0, 1], //index 2 has a connection to 0, 1, 3
    [0, 1, 1, 0], //index 3 has a connection to 1, 2
]

const graph3a = {
    0: [0, 0, 1, 0], 
    1: [0, 0, 1, 1], 
    2: [1, 1, 0, 1], 
    3: [0, 1, 1, 0], 
}