//1. If you know a solution is not far from the root of the tree
Breadth first

//2. If the tree is very deep and solutions are rare
Breadth first
- Why? Depth first search will take a long time because the tree is very deep 
- Solutions are also rare so it's most likely going to repeat that step over and over 

//3. If the tree is very wide
Depth first
- Why? Breadth first search will use up too much memory
- BFS keeps track of the nodes and the current level in a queue 

//4. If solutions are frequent but located deep in the tree
Depth first --> to find an answer quicker

//5. Determining whether a path exists between 2 nodes
Depth first 

//6. Finding the shortest path
Breadth first