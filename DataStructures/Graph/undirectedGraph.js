class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = []; //node is the key and [] is the value of the adjacentList object
        //Why is it an empty array? When we enter a new node, it will not have any connections initially
        this.numberOfNodes++;
    }

    addEdge(node1, node2) { //undirected graph
        //In the object, at key of node1, push node2 to the [] (values)
        this.adjacentList[node1].push(node2); 
        //Since it's an undirected graph, both values should be present for the keys
        this.adjacentList[node2].push(node1); 
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = '';
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + ' ';
            } 
            console.log(node + '-->' + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
/*
0-->
1-->
2-->
3-->
4-->
5-->
6-->
*/
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');
/*
0-->1 2
1-->3 2 0
2-->4 1 0
3-->1 4
4-->3 2 5
5-->4 6 
6-->5
*/
myGraph.showConnections();