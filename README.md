# DS-Algo

| Data Structures | Algorithms |
| ----------- | ----------- |
| A way to store data | Functions that use data structures to write programs |

- Data Structures + Algorithms = Programs

## Table of Contents:
[Big O](#Big-O)

DATA STRUCTURES
1. [Arrays](#arrays)
2. [Hash Tables](#hash-tables)
3. [Linked Lists](#linked-lists)
4. [Stacks-Queues](#stacks-queues)
5. [Trees](#trees)
6. [Graphs](#graphs)

ALGORITHMS
1. [Recursion](#recursion)
2. [Sorting](#sorting)
a) [Bubble Sort](#bubble-sort)
b) [Selection Sort](#selection-sort)
c) [Insertion Sort](#insertion-sort)
d) [Merge Sort](#merge-sort)
e) [Quick Sort](#quick-sort)
f) [Other Sorts](#other-sorts)
3. [Searching](#searching)
a) [Linear Search](#linear-search)
b) [Binary Search](#binary-search)
c) [Breadth First Search](#breadth-first-search)
d) [Depth First Search](#depth-first-search)

3. [Dynamic Programming](#dynamic-programming)

## Big O
- Q. What is good code? Something that is readable and scalable(Big O)
- Runtime = how long it takes to tun a certain problem through a function/task
- Big O = as the input size increases, how much does the algorithm/function slow down? The slower it slows down, the better the operation is

Big O Rule Book:
| Rules | Explanation |
| ----------- | ----------- |
| 1. Worst Case | Always consider the worst case scenario for Big O complexity |
| 2. Remove Constants | Ex. O(n + 1) and O(2n) both become just O(n) |
| 3. Different terms for inputs | O(a + b): 2 different loops in order VS O(a * b): 2 different nested loops |
| 4. Drop Non Dominant Terms | Ex. O(n + n^2) --> O(n^2) -- As the input increases, O(n^2) is more significant than O(n) |

#### MORE ON Different terms for inputs
```javascript
function compressBoxesTwice(boxes1, boxes2) {
    boxes1.forEach(boxes => console.log(boxes));
    boxes2.forEach(boxes => console.log(boxes));
}
```

TRICK: It is not O(2n) --> O(n) since boxes1 & boxes2 are 2 different inputs
- Even though it's 2 for loops, they are not looping through the same input/array
- Big O is O(n + m) or O(boxes1 + boxes2)
- O(a + b): 2 different loops in order VS O(a * b): 2 different nested loops
- +: For steps in order VS *: For nested loops

| Time Complexity | Space Complexity |
| ----------- | ----------- |
| Speed | Memory |
| How long/many steps it takes a function to run | How much memory a function uses |

| What causes time complexity? | What causes space complexity? |
| ----------- | ----------- |
| Operations (+, -, *, /) | Variables |
| Comparisons (<, >, ===) | Data Structures |
| Loops (for, while) | Function call |
| Outside function call (function()) - a function inside of a function  | Allocations |

- When a program executes, it has 2 ways to remember things:
1. Heap: store variables 
2. Stack: tracks function calls

- n = # of inputs
- 2 separate collections; O(a + b)
- Iterating through half a collection is still O(n)

| Type | Name | Grade | Description | Example |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| O(n) | Linear | Fair | As the input increases, the # of operations increase linearly | Loops |
| O(1) | Constant | Excellent | As the input increases, the # of operations stay the same | No loops - Lookups, JS statements, etc. |
| O(log N) | Logarithmic | Excellent | xxx | Searching algorithms xxx |
| O(n*log(n)) | Log Linear | Fair | xxx | Sorting operations |
| O(n^2) | Quadratic | Horrible | As the input increases, the # of operations quadratically | Nested loops |
| O(2^n) | Exponential | Horrible | xxx | Recursion |
| O(n!) | Factorial | Horrible | xxx | Add a loop for every element |

## i) Data Structures

## Arrays
#### Overview:
- Stored in contiguous memory (ordered) --> smallest space complexity footprint of any data structure(memory)

| Static Array | Dynamic Array |
| ----------- | ----------- |
| Fixed in size (must specify # of elements array will hold ahead of time) | Can copy and rebuild an array at a new location that has more memory --> array expands as you add more elements |

NOTE: JS, Python & Java  automatically allocate memory according to the increase in array size (not C++ - we have to copy the static array at a new location and rebuild it into a dynamic array with more indices for data)

#### Picture:
#### When to use:
#### Pro vs con:
| Array PROS | Array CONS |
| ----------- | ----------- |
| Fast Lookups | Slow Inserts |
| Fast push/pop (end of array) | Slow deletes |
| Ordered | Fixed size (if using static arrays) |

#### Big O (insertion, deletion, access, search):
| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Search | O(n) | Must iterate through array to find what we're looking for |
| Lookup | O(1) | Can directly access array item (ex. array[0]) |
| Push/Pop (Insert & Delete) | O(1) | When adding/removing items from the end of the array, only the last item is affected |
| Unshift/Shift (Insert & Delete) | O(n) | When adding/removing items at the beginning of the array, the rest of the array's indices have to be shifted using iteration |
| Splice (Insert & Delete) | O(n) | Once the item is found, we must shift the remaining array's indices |

- Insert: O(n) - Worst Case
- Delete: O(n) - Worst Case
#### How to code it:

## Hash Tables
#### Overview:
- Objects in JS are a type of hash table (key: value pair --> ex. basket.grapes = 10000)
- Seen in databases and caches
- Key in hash table is used as the index of where to find the value in memory (hash function is used to find the value)
- Hash function: function that generates a value of fixed length for each input that it gets --> give it an input and the function generates some random pattern (hash)
- A hash function is 1-way: can only give input and hash, can't determine input from hash
- The input will always result in the same hash(pattern) --> a function given the same input will always have the same output
- send key through a hash function that is going to hash something quickly and then map whatever the hash came out to be into a memory address where we want to store our data

#### Picture:
#### When to use:
#### Pro vs con:

| Hash Table PRO | Hash Table CON |
| ----------- | ----------- |
| Fast data access/lookups - NOTE: Good collision resolution needed | Collision: keep adding to the same memory space which slow down our ability to access or insert info --> to check the content in memory address, must use iteration now --> Slows it down by O(n/k) - k = size of hash table|
| Fast inserts | Unordered |
| Flexible keys (instead of numbered keys like arrays) | Slow key iteration: must iterate through full memory space to grab all keys in hash table |

How to deal with collisions?
a) Linked Lists
b) 

#### Big O:
- Time complexity: O(1) - constant

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Search | O(1) | xxx |
| Lookup | O(1) | NOTE: If there is a collision, lookup will become O(n) |
| Insert | O(1) | xxx |
| Delete | O(1) | xxx |

#### How to code it:

## Linked Lists
#### Overview:
- Contains a set of nodes which have 2 elements: value of the data and a pointer to the next node in line
- 1st node: head
- last node: tail
- Linked lists are null-terminated (signifies the end of the list) --> null pointer means it's the end of the linked list
- NOTE: JS isn't pre-built with linked lists (Java is)
- Pointer = reference to another place in memory or another object or another node 

Ex. Not copying the object 
Bot obj 1 & obj2 point to the same location in memory
````javascript
let obj1 = { a: true };
let obj2 = obj1; //Pointer: obj2 will reference obj1 and they both to the same location in memory

obj1.a = 'hello'; 
console.log('1', obj1); //{a: 'hello'}
console.log('2', obj2); //{a: 'hello'}

delete obj1; 
console.log('1', obj1); //ReferenceError: obj1 is not defined
console.log('2', obj2); //{a: 'hello'} 
````

#### Picture:
#### When to use:

#### Pro vs con:
| Linked List PRO | Linked List CON |
| ----------- | ----------- |
| Loose structure that gives us ability to add/delete something in the middle of the list by resetting a few pointers (rather than every index in arrays) | Nodes are scattered in computer memory (VS arrays are sequential) --> traversing/iterating through linked lists is slower (even through they're both O(n)) |
| Fast insertion & deletion | Slow lookup |
| Ordered | More memory |
| Flexible size | |

| | Singly Linked List | Double Linked List |
| ----------- | ----------- | ----------- |
| PRO | Simpler, less memory | Iterated/traversed from front to back and back to front, fast deletion of previous node without iteration from the head |
| CON | Can't be iterated/traversed from back to front | More complex, more memory/storage (space complexity), more operations to perform because of the previous pointer (time complexity) |
| WHEN TO USE | Conserve memory, want fast insertion & deletion | No limitation on memory, want good operation for searching elements (ex. search backwards) |

#### Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Prepend | O(1) | Add to the beginning of list |
| Append | O(1) | Add to the end of the list |
| Lookup | O(n) | Go from the head and iterate/traverse the list until we find what we're looking for |
| Insert | O(n) | Iterate to find the index to insert new node there |
| Delete | O(n) | Iterate to find the index to remove pre-existing node there |

#### How to code it:

## Stacks-Queues
#### Overview:
- Both linear data structures: can traverse through data elements sequentially one by one in which only 1 data element can be directly reached

Similarity: How they are implemented
Difference: How items are removed 
USES:
- Stacks: browser history, undo and forward button
- Queues: waitlist app, printer

Stacks and queues can be built with linked lists or arrays

| | Build STACK with Array | Build STACK with Linked List |
| ----------- | ----------- | ----------- |
| PRO | Faster access because items are right next to each other | Have more dynamic memory --> can add things to the list |
| CON | Static array with a fixed amount of memory | Takes up more memory since they are scattered and have more data to hold (ex. pointers) |

| Build QUEUE with Array | Build QUEUE with Linked List |
| ----------- | ----------- | 
| Do not use since we add and remove items at the beginning (Big O is O(n) - VS O(1) with stacks since they're removed/added at the end) | O(1) to add and remove items at the beginning of the list since we're just replacing the head value |

#### Picture:
#### When to use:
#### Pro vs con:

| Stack & Queue PRO | Stack & Queue CON |
| ----------- | ----------- |
| Fast operations | Slow lookup |
| Fast peek |  |
| Ordered | |

#### Stacks & Queues Big O:
#### STACKS (LIFO - Last In First Out)

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Lookup | O(n) | xxx |
| Pop | O(1) | Remove an item from the top |
| Push | O(1) | Add an item to the top |
| Peek | O(1) | View the topmost item |

#### QUEUES (FIFO - First In First Out)

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Lookup | O(n) | xxx |
| Enqueue | O(1) | Add an item to the front (first) |
| Dequeue | O(1) | Remove first item |
| Peek | O(1) | View the first item |

#### How to code it:

## Trees
#### Overview:
- Have a hierarchical structure (not linear like others)
- Can have 0+ child nodes
- Starts with a single root node/parent node and every child of the tree descends from this root node
- Every child of a node descends from only 1 parent
- There's a parent-child relationship that is unidirectional (only goes one-way)
- Leaf nodes = end nodes of a tree with no child nodes
- Within a tree, you can have subtrees
- Tree nodes can contain any type of info that we want (similar to linked lists) --> Linked list is a type of tree, but linear (1 single path)
NOTE: In a tree, a node can only point to a child (arrows only point down - not up)

BINARY TREE:
- Each node can only have either 0, 1 or 2 nodes
- Each child can only have 1 parent

Perfect Binary Tree: 
- All the leaf nodes are full 
- A node has either 0 or 2 children
- All leaf nodes are filled 
RESULT
- More efficient - the total # of nodes on each level doubles as we move down the tree
- The # of nodes on last level is equal to the sum of the # of nodes on all the other levels + 1 --> half of our nodes are on the last level
- All child nodes in the tree to the right of the root node must be greater than the current node --> if I keep going to the right, the number of the value of the node constantly increases 
- Left: less(decrease) VS Right: greater(increase)
- A node can only have up to 2 children (binary = 2)

Full Binary Tree:
- A node has either 0 or 2 children, but never 1 child


Balanced Binary Search Tree: O(log N) performance
Unbalanced Binary Search Tree: O(N) 
- It turns into a long linked list where we have to iterate through every node 

Types of Balanced Binary Search Trees: automatically rebalances itself
a) AVL tree:
b) Red Black Tree:

BINARY HEAP
- Has 2 children for a node
- Commonly used with priority queues, data storage, sorting algorithms
- Great at doing comparative operations (ex. only want values > 33)
- They take up the least amount of space possible because it's always left to right insertion (no need to balance it)
- Memory efficient and compact (Why? Always a complete binary tree)
- Used when want to find maximum or minimum --> O(1) since the top root node is either the max or min depending on if it's a min or max heap
- Max heap = smallest numbers are at the bottom; largest number is at the top --> largest to smallest going from top to bottom
- Min heap = root node is the smallest and leaf nodes have the largest values --> smallest to largest going from top to bottom
- Lookup: O(n) - Why? It's less ordered than a binary search tree - below nodes just have to be smallest than the top node --> must check every node (traversal)
- Insert: O(log N) --> NOTE: Best case: O(1), Worst case: O(log N)
- Delete: O(log N)
- Heaps add values on the tree in order from left to right and then bubbles up if it's not in the same order or the priority order that it wants

Memory Heap !== Heap Data Structure
- Memory heap = free storage --> region in our memory where we can store arbitrary data


PRIORITY QUEUE
- Each element has a priority
- Elements with a higher priority are served before elements wih lower priorities 

TRIE/PREFIX TREE
- Specialized tree used in searching (most often with text)
- Can outperform binary search trees, hash tables and most other data structures depending on the search you're doing
- Allows you to know if a word or a part of a word exists in a body of text
- Usually has an empty root node (starting point) and from there, letters are added, where nodes can have multiple children
- Efficient at solving problems with strings
- Used for auto completion and auto suggestion on search engines, search words in a dictionary, etc.
- Big O (time complexity): O(length) --> length = length of the word --> traverse 3 nodes that are the length of the word (are)
- Big O (space complexity): the prefixes of words (beginning letter) are used once, not multiple times which saves memory

#### Picture:
#### When to use:
#### Pro vs con:

| Binary Search Tree PRO | Binary Search Tree CON |
| ----------- | ----------- |
| Better than O(n) | No O(1) operations - must use traversal for any sort of operation |
| Ordered |  |
| Flexible size - we can place the node anywhere and we can keep growing our tree |  |

| Binary Heap PRO | Binary Heap CON |
| ----------- | ----------- |
| Better than O(n) | Slow lookup |
| Priority - insertion is done in order |  |
| Flexible size |  |
| Fast insert |  |

#### Big O:

Balanced Binary Search Tree

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Lookup | O(log N) | xxx |
| Insert | O(log N) | xxx |
| Delete | O(log N) | xxx |

UnBalanced Binary Search Tree

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Lookup | O(n) | xxx |
| Insert | O(n) | xxx |
| Delete | O(n) | xxx |

#### How to code it:

## Graphs
#### Overview:
- A set of values that are related in a pair wise fashion
- Node/Vertex = items in the graph
- Nodes are connected with edges

| Directed Graphs | Undirected Graphs | 
| ----------- | ----------- | 
| Unidirectional (can only go in 1 direction) | Bidirectional (can go back and forth) |
| Pic | Pic | 

| Weighted Graphs | Unweighted Graphs | 
| ----------- | ----------- | 
| There is information in the edges of the graph (used to calculate optimal paths) | No information in the edges |
| Pic | Pic | 

| Cyclic Graphs | Acyclic Graphs | 
| ----------- | ----------- | 
| Vertices are connected in a circular fashion (cycle) --> can start from root node and go around the graph and end up at the root node again | Vertices are not connected in a circular fashion |
| Pic | Pic | 

#### Picture:
#### When to use:
#### Pro vs con:

| Graph PRO | Graph CON |
| ----------- | ----------- |
| Shows relationships | Scaling is hard |

#### Big O:

#### How to code it:

## ii) Algorithms 

## Recursion
#### Overview:
- Recursion = a function that refers to itself inside of the function
````javascript
function inception() {
    inception();
}
inception(); //Uncaught RangeError: Maximum call stack size exceeded
````
- Use recursion for tasks that have repeated subtasks to do
- Used for searching and sorting algorithms
- Every recursive function needs to have a base case/stop point 

3 Ingredients for Recursive Functions:

| Base Case | Recursive Case | Closer to Base Case & Return when needed| 
| ----------- | ----------- | ----------- | 
| When the function stops calling itself | Call the function again | Usually have 2 returns (one for each case) |


````javascript
let counter = 0;
function inception() {
    console.log(counter)
    /* BASE CASE */if (counter > 3) return 'done!'; //counter = 4, which is greater than 3 so we return out of the function
    /* Brings us closer to base case */counter++;
    /* RECURSIVE CASE */return inception();
}
inception(); // 0 1 2 3 4 done!
````

- Anything you do with recursion CAN be done iteratively (loop)
- Used for data structures where you're not sure how deep they are (don't know how many loops to go through)
- Used for tree data structures - traversal 
- Tail Call Optimization: allows for recursions to be called without increasing the call stack

#### Picture:

#### When to use:
- Traverse and search through trees/graphs
- Sorting through items
- Everytime you are using a tree or converting something into a tree, consider recursion.
1. Divided into a number of subproblems that are smaller instances of the same problem
2. Each instance of the subproblem is identical in nature
3. The solutions of each subproblem can be combined to solve the problem at hand
DIVIDE AND CONQUER USING RECURSION

#### Pro vs con:

| Recursion PROS | Recursion CONS | 
| ----------- | ----------- | 
| DRY (Don't Repeat Yourself) | Large Stack (greater space complexity) |
| Readability |  |

#### Big O:

#### How to code it:

## Sorting
````javascript
const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
letters.sort(); //['a', 'b', 'd', 'e', 'r', 'z']

const numbers = [2, 65, 34, 2, 1, 7, 8];
numbers.sort(); //[1, 2, 2, 34, 65, 7, 8] --> Not expected
/* JS converts the numbers into strings */
numbers.sort((a, b) => a - b); // [1, 2, 2, 7, 8, 34, 65 ]
````

| Comparison Sort | Non-Comparison Sort | 
| ----------- | ----------- |
| Bubble Sort | Counting Sort |
| Insertion Sort | Radix Sort |
| Selection Sort | |
| Merge Sort | |
| Quick Sort | |


| Sorting Algorithm | When To Use | Explanation |
| ----------- | ----------- | ----------- | 
| Insertion Sort | Small input size and mostly sorted data | Fast, uses little space, easy to implement in code |
| Bubble Sort | Educational purposes? | Not very efficient |
| Selection Sort | Educational purposes? | Not very efficient |
| Merge Sort | Not worried about memory usage(O(n)) and want a guarantee of O(n log(N)) for all cases | Best, average and worst time complexity cases are all O(n log(n)) |
| Quick Sort | Memory conservation, fast | O(log(n)) space complexity, but has worst time complexity case of O(n^2) whereas average time complexity is O(n log(n)) |

- FACTORS TO CONSIDER:

| Speed | Memory | Stability | Input Size | Presorted Input | Readability |

### Bubble Sort
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Bubble Sort Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Best Case (Time) | O(n) | When input is nearly sorted |
| Average Case (Time) | O(n^2) | Compare items using nested loops one at a time |
| Worst Case (Time) | O(n^2) | Nested loops |
| Worst Case (Space) | O(1) | Not creating any new data to be stored |

#### How to code it:

### Selection Sort
#### Overview:
- 
#### Picture:
#### When to use:
#### Pro vs con:
#### Selection Sort Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Best Case (Time) | O(n^2) | Nested for loops |
| Average Case (Time) | O(n^2) | Nested for loops |
| Worst Case (Time) | O(n^2) | Nested for loops |
| Worst Case (Space) | O(1) | Not creating any new data to be stored |

#### How to code it:

### Insertion Sort
#### Overview:
#### Picture:
#### When to use:
- Use when list is almost sorted or already sorted
- Use for small data sets

#### Pro vs con:
#### Insertion Sort Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Best Case (Time) | O(n) | Nearly sorted or have small input size |
| Average Case (Time) | O(n^2) | Nested for loops |
| Worst Case (Time) | O(n^2) | Nested for loops |
| Worst Case (Space) | O(1) | Not creating any new data to be stored |

#### How to code it:

### Merge Sort
#### Overview:
- 
#### Picture:
#### When to use:
#### Pro vs con:
#### Merge Sort Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Best Case (Time) | O(n log(n)) |  |
| Average Case (Time) | O(n log(n)) |  |
| Worst Case (Time) | O(n log(n)) |  |
| Worst Case (Space) | O(n) | Stores divided up list in memory |

#### How to code it:

### Quick Sort
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Quick Sort Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Best Case (Time) | O(n log(n)) |  |
| Average Case (Time) | O(n log(n)) |  |
| Worst Case (Time) | O(n^2) | Occurs when the pivot is the smallest or largest number in the list (takes a long time to sort) |
| Worst Case (Space) | O(log(n) |  |

#### How to code it:

## Searching

## Linear Search
#### Overview:
- Sequentially checks each element of the list for the target value until a match is found or until all the elements have been searched
#### Picture:
#### When to use:
#### Pro vs con:
#### Linear Search Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Time Complexity | O(n) | In worst case scenario, we must iterate through every item in the list to find what we're looking for |

#### How to code it:

## Binary Search
#### Overview:
- If it's sorted, we can do better than O(n)
- With a sorted list, we can find the target item faster since we discard half the items instead of one at a time (linear search)
- When we insert items and sort them, it gives us better performance then adding it to an unsorted list that we have to search through 
#### Picture:
#### When to use:
- When list is already sorted
#### Pro vs con:
#### Binary Search Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Time Complexity | O(log n) | If the data is presorted, we can traverse left or right depending on if the value is < or > than the current node (we eliminate half of the data each time by doing this) |

#### How to code it:

## Breadth First Search
#### Overview:
- Start with root node and move left to right across all levels of the tree
- Uses additional memory because it is necessary to track the child nodes of all the nodes on a given level while searching that level --> tracks every node and its children in order
- Keeps a reference to all the children of every node (that's why there's an extra memory)

#### Picture:
#### When to use:
- If you have additional info on the location of the target node and know that the node is likely in the upper level of a tree? Choose breadth first search
#### Pro vs con:

| Breadth First Search PRO | Breadth First Search CON | 
| ----------- | ----------- |
| Shortest path (finds shortest path between a starting point and any other reachable node because we start off with the root node and then search the closest nodes first and then the nodes further)| More memory |
| Closer nodes |  |

#### Breadth First Search Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Time Complexity | O(n) | We're traversing through every node in the tree/graph |

#### How to code it:

## Depth First Search
#### Overview:
- Search one branch of the tree down as many levels as possible until the target node is found or the end is reached
- When the search is done (reached leaf nodes), the search continues at the nearest ancestor with an unexplored child
- Has a lower memory requirement than breadth first search because it's not necessary to store all the child pointers at each level
#### Picture:
#### When to use:
- If you know that the node is likely at the lower level of a tree/graph

#### Pro vs con:

| Depth First Search PRO | Depth First Search CON | 
| ----------- | ----------- |
| Less memory | Can get slow if tree/graph is very deep |
| Does path exist? (from a source node to a target node) | Not good at finding the shortest path |

#### Depth First Search Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| Time Complexity | O(n) | We're traversing through every node in the tree/graph |

#### How to code it:

## Dynamic Programming
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

