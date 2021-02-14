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
3. [Searching](#searching)
a) [Linear Search](#linear-search)
b) [Binary Search](#binary-search)
c) [Breadth First Search](#breadth-first-search)
d) [Depth First Search](#depth-first-search)

4. [Dynamic Programming](#dynamic-programming)

## Big O
- Q. What is good code? Something that is readable and scalable(Big O)
- Runtime = how long it takes to run a certain problem through a function/task
- Big O = as the input size increases, how much does the algorithm/function slow down? The slower it slows down, the better the operation is

Big O Rule Book:
| Rules | Explanation |
| ----------- | ----------- |
| **1. Worst Case** | Always consider the worst case scenario for Big O complexity |
| **2. Remove Constants** | Ex. O(n + 1) and O(2n) both become just O(n) |
| **3. Different terms for inputs** | O(a + b): 2 different loops in order VS O(a * b): 2 different nested loops |
| **4. Drop Non Dominant Terms** | Ex. O(n + n^2) --> O(n^2) -- As the input increases, O(n^2) is more significant than O(n) |

#### MORE ON Different terms for inputs
```javascript
function compressBoxesTwice(boxes1, boxes2) {
    boxes1.forEach(boxes => console.log(boxes));
    boxes2.forEach(boxes => console.log(boxes));
}
```

NOTE: It is not O(2n) --> it's O(n) since boxes1 & boxes2 are 2 different inputs
- Even though it's 2 for loops, they are not looping through the same input/array
- Big O is O(n + m) or O(boxes1 + boxes2)
- O(a + b): 2 different loops in order VS O(a * b): 2 different nested loops
- **+: For steps in order VS *: For nested loops**

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
| **O(n)** | Linear | Fair | As the input increases, the # of operations increase linearly | Loops, Iteration |
| **O(1)** | Constant | Excellent | As the input increases, the # of operations stay the same | No loops - Lookups, JS statements, etc. |
| **O(log N)** | Logarithmic | Excellent | Cuts the problem in half each time since data is presorted | Searching algorithms |
| **O(n*log(n))** | Log Linear | Fair | xxx | Sorting operations |
| **O(n^2)** | Quadratic | Horrible | As the input increases, the # of operations quadratically (N^N = N^2) | Nested loops |
| **O(2^n)** | Exponential | Horrible | xxx | Recursion |
| **O(n!)** | Factorial | Horrible | Ex. 3! = 3 * 2 * 1 --> As the input increases, the # of operations increase by ALOT - Avoid at all costs! | Add a loop for every element |

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

#### Array Big O:
| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| **Search** | **O(n)** | Must iterate through array to find what we're looking for |
| **Lookup** | **O(1)** | Can directly access array item (ex. array[0]) |
| **Push/Pop** (Insert & Delete) | **O(1)** | When adding/removing items from the end of the array, only the last item is affected |
| **Unshift/Shift** (Insert & Delete) | **O(n)** | When adding/removing items at the beginning of the array, the rest of the array's indices have to be shifted using iteration |
| **Splice** (Insert & Delete) | **O(n)** | Once the item is found, we must shift the remaining array's indices |

- Insert: O(n) - Worst Case
- Delete: O(n) - Worst Case
#### How to code it:

## Hash Tables
#### Overview:
- Objects in JS are a type of hash table (key: value pair --> ex. basket.grapes = 10000)
- Seen in databases and caches
- Key in hash table is used as the index of where to find the value in memory (hash function is used to find the value)
- Hash function: function that generates a value of fixed length for each input that it gets --> give it an input and the function generates some random pattern (hash)

1. A hash function is 1-way: can only give input and hash, can't determine input from hash
2. The input will always result in the same hash (pattern) --> a function given the same input will always have the same output
- Send key through a hash function that is going to hash something quickly and then map whatever the hash came out to be into a memory address where we want to store our data

#### Picture:

#### When to use:
#### Pro vs con:

| Hash Table PRO | Hash Table CON |
| ----------- | ----------- |
| Fast data access/lookups - NOTE: Good collision resolution needed | Collision: keep adding to the same memory space which slow down our ability to access or insert info --> to check the content in memory address, must use iteration now --> Slows it down by O(n/k) - k = size of hash table|
| Fast inserts | Unordered |
| Flexible keys (instead of numbered keys like arrays) | Slow key iteration: must iterate through full memory space to grab all keys in hash table |

Q. How to deal with collisions? Linked Lists

#### Big O:
- Time complexity: O(1) - constant

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| **Search** | **O(1)** | A value can be searched using its key (ex. object.key = value) - There's no iteration |
| **Lookup** | **O(1)** | Lookup a value by doing object.key = value - NOTE: If there is a collision, lookup will become O(n) |
| **Insert** | **O(1)** | Insert a value by assigning it a key - no iteration |
| **Delete** | **O(1)** | delete object.key -- no iteration |

NOTE: If there's is >1 value in the key, it's a linked list and we have to iteration to find, insert, or delete what we want --> O(n)

#### How to code it:

## Linked Lists
#### Overview:
- Contains a set of nodes which have 2 elements: value of the data and a pointer to the next node in line
- 1st node: head
- Last node: tail
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
| **Prepend** | **O(1)** | Add to the beginning of list - change the value of the this.head and add a pointer |
| **Append** | **O(1)** | Add to the end of the list - the previous node has a pointer to the new node and the new node has a value of null|
| **Lookup** | **O(n)** | Go from the head and iterate/traverse the list until we find what we're looking for |
| **Insert** | **O(n)** | Iterate to find the index to insert new node there |
| **Delete** | **O(n)** | Iterate to find the index to remove pre-existing node there |

#### How to code it:

## Stacks-Queues
#### Overview:
- Both linear data structures: can traverse through data elements sequentially one by one in which only 1 data element can be directly reached

Similarity: How they are implemented
Difference: How items are removed 

| Stack uses | Queue uses |
| ----------- | ----------- |
| Ex. Browser history, undo and forward button | Waitlist app, printer queue |

- Stacks and queues can be built with linked lists or arrays

| | Build STACK with Array | Build STACK with Linked List |
| ----------- | ----------- | ----------- |
| PRO | Faster access because items are right next to each other | Have more dynamic memory -- can add things to the list |
| CON | Static array with a fixed amount of memory | Takes up more memory since they are scattered and have more data to hold (ex. pointers) |

| Build QUEUE with Array | Build QUEUE with Linked List |
| ----------- | ----------- | 
| DO NOT use since we add and remove items at the beginning (Big O is O(n) - VS O(1) with stacks since they're removed/added at the end) | O(1) to add and remove items at the beginning of the list since we're just replacing the head value |

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
| **Lookup** | **O(n)** | Must iterate through the stack to find what we're looking for |
| **Pop** | **O(1)** | Remove an item from the top - no iteration |
| **Push** | **O(1)** | Add an item to the top - no iteration |
| **Peek** | **O(1)** | View the topmost item - no iteration |

#### QUEUES (FIFO - First In First Out)

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| **Lookup** | **O(n)** | Must iterate to find what we're looking for |
| **Enqueue** | **O(1)** | Add an item to the front (first) - the new node is this.head and points to next node -- no iteration |
| **Dequeue** | **O(1)** | Remove first item - the 2nd value is now this.head -- no iteration |
| **Peek** | **O(1)** | View the first item - this.head.value - no iteration |

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

**Balanced Binary Search Tree**

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| **Lookup** | **O(log N)** | Only traversing/iterating half of the tree -- to the left is less than the value we're looking for and to the right is greater than the value we're looking for |
| **Insert** | **O(log N)** | Only traversing half of the tree |
| **Delete** | **O(log N)** | Only traversing half of the tree to find the node we want to remove |

**UnBalanced Binary Search Tree**

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| **Lookup** | **O(n)** | We iterate through every node to find what we're looking for |
| **Insert** | **O(n)** | Iteration through every node |
| **Delete** | **O(n)** | Iterate through every node |

#### How to code it:

## Graphs
#### Overview:
- A set of values that are related in a pair wise fashion
- Node/Vertex = items in the graph
- Nodes are connected with edges

| Directed Graphs | Undirected Graphs | 
| ----------- | ----------- | 
| Unidirectional (can only go in 1 direction) | Bidirectional (can go back and forth) |
| ![image](https://user-images.githubusercontent.com/62129720/107446376-508b0600-6b0c-11eb-8a5c-1406ec6dde9e.png) | ![image](https://user-images.githubusercontent.com/62129720/107447242-16baff00-6b0e-11eb-9f56-9deaa143e643.png) | 

| Weighted Graphs | Unweighted Graphs | 
| ----------- | ----------- | 
| There is information in the edges of the graph (used to calculate optimal paths) | No information in the edges |
| ![image](https://user-images.githubusercontent.com/62129720/107447549-7dd8b380-6b0e-11eb-8311-43a70d5262a2.png) | ![image](https://user-images.githubusercontent.com/62129720/107447369-6994b680-6b0e-11eb-93e8-9a5126f82684.png) | 

| Cyclic Graphs | Acyclic Graphs | 
| ----------- | ----------- | 
| Vertices are connected in a circular fashion (cycle) --> can start from root node and go around the graph and end up at the root node again | Vertices are not connected in a circular fashion |
| ![image](https://user-images.githubusercontent.com/62129720/107447921-9cd74580-6b0e-11eb-8c83-2266ddf9b4dd.png) | ![image](https://user-images.githubusercontent.com/62129720/107447952-acef2500-6b0e-11eb-9f5c-27eee8488554.png) | 

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
| **Insertion Sort** | Small input size and mostly sorted data | Fast, uses little space, easy to implement in code |
| **Bubble Sort** | Educational purposes? | Not very efficient |
| **Selection Sort** | Educational purposes? | Not very efficient |
| **Merge Sort** | Not worried about memory usage(O(n)) and want a guarantee of O(n log(N)) for all cases | Best, average and worst time complexity cases are all O(n log(n)) |
| **Quick Sort**| Memory conservation, fast | O(log(n)) space complexity, but has worst time complexity case of O(n^2) whereas average time complexity is O(n log(n)) |

- FACTORS TO CONSIDER:

| Speed | Memory | Stability | Input Size | Presorted Input | Readability |

### Bubble Sort
#### Overview:

| Picture | Bubble Sort Explanation |
| ----------- | ----------- | 
| ![image](https://user-images.githubusercontent.com/62129720/107448335-7b2a8e00-6b0f-11eb-9842-e9fd9c33ee08.png) | Compare first 2 values - smaller value goes first | 
| ![image](https://user-images.githubusercontent.com/62129720/107448396-99908980-6b0f-11eb-84da-0809be0d8651.png) | 6 > 5 so switch them | 
| ![image](https://user-images.githubusercontent.com/62129720/107448578-e96f5080-6b0f-11eb-9340-ae53d1e532eb.png) | 6 > 3 so swap their places |
| ![image](https://user-images.githubusercontent.com/62129720/107448548-dc526180-6b0f-11eb-942d-eedc5f5e7f70.png) | 6 > 1 so swap them too (NOTE: If the values are in the correct order, keep them the way they are) |  
| ![image](https://user-images.githubusercontent.com/62129720/107861828-710dd580-6e16-11eb-9523-3a4e00fb6baf.png) | This is how the data looks after the first iteration over all the values | 
| ![image](https://user-images.githubusercontent.com/62129720/107861856-a0bcdd80-6e16-11eb-87fe-701e767636d6.png)| We bubble up the highest number (8) and iterate over the list again |
| ![image](https://user-images.githubusercontent.com/62129720/107861899-ec6f8700-6e16-11eb-98c6-fd40d04fdf92.png) | After 2nd iteration, we bubble up the second largest number (7) | 
| ![image](https://user-images.githubusercontent.com/62129720/107861918-07da9200-6e17-11eb-8d25-b474ee0f8ba2.png) | Keep comparing and bubbling up the highest number until you get a sorted list |

#### When to use:
#### Pro vs con:
#### Bubble Sort Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| **Best Case (Time)** | **O(n)** | When input is nearly sorted |
| **Average Case (Time)** | **O(n^2)** | Compare items using nested loops one at a time |
| **Worst Case (Time)** | **O(n^2)** | Nested loops |
| **Worst Case (Space)** | **O(1)** | Not creating any new data to be stored |

#### How to code it:

### Selection Sort
#### Overview:
Scan the list for the smallest element and then swap that element for the 1st position 

- Red = smallest item we've seen so far
- Blue = scanning ahead to find the smallest item

| Picture | Selection Sort Explanation |
| ----------- | ----------- | 
| ![image](https://user-images.githubusercontent.com/62129720/107862605-ca2c3800-6e1b-11eb-8afc-d1976528d75c.png) | Find the smallest item in the list using iteration | 
| ![image](https://user-images.githubusercontent.com/62129720/107862621-eb8d2400-6e1b-11eb-8778-bb163a358786.png) | 0 is the smallest item in the list | 
| ![image](https://user-images.githubusercontent.com/62129720/107862636-fb0c6d00-6e1b-11eb-90f8-0b916eb222b6.png) | Move 0 (smallest value) to the 1st index of the list | 
| ![image](https://user-images.githubusercontent.com/62129720/107862645-0bbce300-6e1c-11eb-8394-b1034bcdaae6.png) | Find the smallest item in the list  - Place 1 in the 2nd index of the list| 
| ![image](https://user-images.githubusercontent.com/62129720/107862656-1ecfb300-6e1c-11eb-8945-fecdaab1da13.png) | Keep doing this until our list is sorted | 

#### Picture:
#### When to use:
#### Pro vs con:
#### Selection Sort Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| **Best Case (Time)** | **O(n^2)** | Nested for loops |
| **Average Case (Time)** | **O(n^2)** | Nested for loops |
| **Worst Case (Time)** | **O(n^2)** | Nested for loops |
| **Worst Case (Space)** | **O(1)** | Not creating any new data to be stored |

#### How to code it:

### Insertion Sort
#### Overview:

| Picture | Insertion Sort Explanation |
| ----------- | ----------- | 
| ![image](https://user-images.githubusercontent.com/62129720/107862730-b33a1580-6e1c-11eb-9f8d-e5fe4374dbdc.png) | 5 < 6 so swap them | 
| ![image](https://user-images.githubusercontent.com/62129720/107862736-c0ef9b00-6e1c-11eb-91a2-e728b55524df.png) | 3 < 5 & 6 so it goes at the beginning | 
| ![image](https://user-images.githubusercontent.com/62129720/107862745-ce0c8a00-6e1c-11eb-81eb-ad044b3b471a.png) | 1 is less than all of them so it goes at the front of the list | 
| ![image](https://user-images.githubusercontent.com/62129720/107862754-db297900-6e1c-11eb-85cb-1a56bb435f79.png) | Attach 8 to the end since it's larger than all those numbers | 
| ![image](https://user-images.githubusercontent.com/62129720/107862760-eb415880-6e1c-11eb-8761-568a78008e39.png) | 7 goes in between 6 & 8 | 
| ![image](https://user-images.githubusercontent.com/62129720/107862768-f85e4780-6e1c-11eb-86cb-4c6853797752.png) | 2 goes in between 1 & 3 | 
| ![image](https://user-images.githubusercontent.com/62129720/107862770-0744fa00-6e1d-11eb-9f9d-238e22338920.png) | Place 4 between 3 & 5 | 
| ![image](https://user-images.githubusercontent.com/62129720/107862781-26dc2280-6e1d-11eb-9c74-034ec3c13735.png) | List is now sorted! | 

#### Picture:
#### When to use:
- Use when list is almost sorted or already sorted
- Use for small data sets

#### Pro vs con:
#### Insertion Sort Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| **Best Case (Time)** | **O(n)** | Nearly sorted or have small input size |
| **Average Case (Time)** | **O(n^2)** | Nested for loops |
| **Worst Case (Time)** | **O(n^2)** | Nested for loops |
| **Worst Case (Space)** | **O(1)** | Not creating any new data to be stored |

#### How to code it:

### Merge Sort
#### Overview:

| Picture | Merge Sort Explanation |
| ----------- | ----------- | 
| ![image](https://user-images.githubusercontent.com/62129720/107862920-3b6cea80-6e1e-11eb-95b6-a14cd67ba196.png) | Divide the list in half | 
| ![image](https://user-images.githubusercontent.com/62129720/107862932-50497e00-6e1e-11eb-9a0b-c2c4460866e4.png) | Divide the subsets into half again | 
| ![image](https://user-images.githubusercontent.com/62129720/107862943-5c354000-6e1e-11eb-9222-3619e3b976b6.png) | Divide it in half again until we have 1 item | 
| ![image](https://user-images.githubusercontent.com/62129720/107862949-6c4d1f80-6e1e-11eb-8f5e-e343e6f4a557.png) | Now let's compare the first 2 items | 
| ![image](https://user-images.githubusercontent.com/62129720/107862959-7d962c00-6e1e-11eb-8eb1-38295146a674.png) | 5 < 6 so put 5 first | 
| ![image](https://user-images.githubusercontent.com/62129720/107862965-8d157500-6e1e-11eb-9784-495d6bf538e3.png) | We're putting the data back together slowly | 
| ![image](https://user-images.githubusercontent.com/62129720/107862985-b9c98c80-6e1e-11eb-9196-3f5cce64ad5f.png) | 1 < 3 so 1 goes first | 
| ![image](https://user-images.githubusercontent.com/62129720/107863001-d82f8800-6e1e-11eb-8e2a-af11a55dd9a1.png) | Keep going until the pairs are sorted - 7 < 8 and 2 < 4 | 
| ![image](https://user-images.githubusercontent.com/62129720/107863010-e8dffe00-6e1e-11eb-8221-08ce3a4bd66b.png) | Compare the first 2 blocks: 1 < 5 so put 1 | 
| ![image](https://user-images.githubusercontent.com/62129720/107863019-f72e1a00-6e1e-11eb-9b26-d48f40aafe78.png) | 3 < 5 so put 3 | 
| ![image](https://user-images.githubusercontent.com/62129720/107863045-19c03300-6e1f-11eb-9fc2-ce8edcd05f7d.png) | 5 < 6 so put 5 first, then 6 -- We now have 1 3 5 6 | 
| ![image](https://user-images.githubusercontent.com/62129720/107863047-23e23180-6e1f-11eb-89ba-76b14c8041a9.png) | Do the same thing with the other half: Compare 2 & 7 | 
| ![image](https://user-images.githubusercontent.com/62129720/107863054-2d6b9980-6e1f-11eb-99ef-4043f57bb193.png) | Compare 4 & 7: 4 goes first | 
| ![image](https://user-images.githubusercontent.com/62129720/107863063-39575b80-6e1f-11eb-8278-a1da98b4f618.png) | We now have 2 halves that need to be merged together | 
| ![image](https://user-images.githubusercontent.com/62129720/107863070-41af9680-6e1f-11eb-8225-d3289e49692a.png) | Compare the first item: 1 < 2 so 1 goes first | 
| ![image](https://user-images.githubusercontent.com/62129720/107863074-483e0e00-6e1f-11eb-9ae4-54b9d6534c3a.png) | Compare 2 & 3 - 2 goes first, compare 3 & 4 - 3 goes first, compare 4 & 5 - 4 goes first | 
| ![image](https://user-images.githubusercontent.com/62129720/107863084-53913980-6e1f-11eb-9b22-92fa0bb17348.png) | Compare 5 & 7 - 7 goes first, compare 6 & 7 - 6 goes first, then 7 & 8 (they're already sorted - no need to compare) |  

#### Picture:
#### When to use:
#### Pro vs con:
#### Merge Sort Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| **Best Case (Time)** | **O(n log(n))** |  |
| **Average Case (Time)** | **O(n log(n))** |  |
| **Worst Case (Time)** | **O(n log(n))** |  |
| **Worst Case (Space)** | **O(n)** | Stores divided up list in memory |

#### How to code it:

### Quick Sort
#### Overview:
![image](https://user-images.githubusercontent.com/62129720/107865790-4b91c380-6e38-11eb-8a77-c81f96e744fe.png)

| Picture | Quick Sort Explanation |
| ----------- | ----------- | 
| ![image](https://user-images.githubusercontent.com/62129720/107865804-682dfb80-6e38-11eb-8561-0ff484b3af40.png) | Pick a pivot (usually the last or first number - in this case, it's 4) | 
| ![image](https://user-images.githubusercontent.com/62129720/107865821-809e1600-6e38-11eb-83b4-bd298d986351.png) | We want all numbers less than the pivot to be on its left and all numbers greater than the pivot to be on its right --> Start from the beginning: 3 < 4 (pivot) so it stays on the left, 7 > 4 (picot) so bring 7 to 4's right side | 
| ![image](https://user-images.githubusercontent.com/62129720/107865830-8e539b80-6e38-11eb-9464-790b2b297173.png) | Move 4 to the left position to make space for 7 -- swap 5 into 7's position and 4 takes 5's position and 7 is at the end | 
| ![image](https://user-images.githubusercontent.com/62129720/107865847-b4793b80-6e38-11eb-92cc-75ed9855c6f7.png) | 5 > 4: 9 takes 5's position and 4 moves to the left to make room for 5 | 
| ![image](https://user-images.githubusercontent.com/62129720/107865851-c529b180-6e38-11eb-9cb5-3be9c2b30f88.png) | 9 > 4 and 8 > 4: both go to the right of 4 | 
| ![image](https://user-images.githubusercontent.com/62129720/107865856-d5da2780-6e38-11eb-85be-63858f66b39d.png) | 4 & 5 switch places | 
| ![image](https://user-images.githubusercontent.com/62129720/107865870-f0ac9c00-6e38-11eb-8d6b-38ec57563e14.png) | 4 will be in that position in the list, but the numbers to the left and right of 4 still need to be sorted | 
| ![image](https://user-images.githubusercontent.com/62129720/107865956-fd7dbf80-6e39-11eb-835d-9983cacad00f.png) | Use divide & conquer strategy for the numbers on the left and right: Choose a pivot (in this case, at the end) and numbers less than the pivot should be on the left and numbers greater should be on the right  | 

#### Picture:
#### When to use:
#### Pro vs con:
#### Quick Sort Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| **Best Case (Time)** | **O(n log(n))** |  |
| **Average Case (Time)** | **O(n log(n))** |  |
| **Worst Case (Time)** | **O(n^2)** | Occurs when the pivot is the smallest or largest number in the list (takes a long time to sort) |
| **Worst Case (Space)** | **O(log(n)** |  |

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
| **Time Complexity** | **O(n)** | In worst case scenario, we must iterate through every item in the list to find what we're looking for |

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
| **Time Complexity** | **O(log n)** | If the data is presorted, we can traverse left or right depending on if the value is < or > than the current node (we eliminate half of the data each time by doing this) |

#### How to code it:

| Breadth First Search | Depth First Search | 
| ----------- | ----------- |
| Use to find the shortest path (what's the closest to our node? ) | Use to check to see if node exists |

## Breadth First Search
#### Overview:
- Start with root node and move left to right across all levels of the tree
- Uses additional memory because it is necessary to track the child nodes of all the nodes on a given level while searching that level --> tracks every node and its children in order
- Keeps a reference to all the children of every node (that's why there's an extra memory)

#### Picture:
#### When to use:
- If you have additional info on the location of the target node and know that the node is likely in the upper level of a tree? Choose breadth first search

- NOTE: Use Bellman-Ford and Dijkstra algorithms to find the shortest path between 2 nodes in a weighted graph
- What about breadth-first search in graphs? It assumes that each path has the same weight (depth-first and breadth-first search don't take the weight into account)

| | Dijkstra Algorithm | Bellman-Ford | 
| ----------- | ----------- | ----------- |
| PRO | Faster & more efficient | Better at solving shortest path because it can accomodate negative weights |
| CON | It can't accomodate for negative weights in between nodes | Takes long time to run O(n^2) --> not very efficient |
#### Pro vs con:

| Breadth First Search PRO | Breadth First Search CON | 
| ----------- | ----------- |
| Determine shortest path between 2 nodes (finds shortest path between a starting point and any other reachable node because we start off with the root node and then search the closest nodes first and then the nodes further)| More memory to keep track of parent and children nodes|
| Looks at closer nodes first |  |

#### Breadth First Search Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| **Time Complexity** | **O(n)** | We're traversing through every node in the tree/graph |

#### How to code it:

## Depth First Search
#### Overview:
- Search one branch of the tree down as many levels as possible until the target node is found or the end is reached
- When the search is done (reached leaf nodes), the search continues at the nearest ancestor with an unexplored child
- Has a lower memory requirement than breadth first search because it's not necessary to store all the child pointers at each level
- The height of the tree will tell us how much memory we'll need since the height of the tree will match the deepest recursive function --> that's what's going to be added to the stack as memory
- Memory consumption: O(h) --> h = height of tree

- 3 Ways to Implement Depth First Search

| Inorder | Preorder | Postorder |
| ----------- | ----------- | ----------- |
| Start from bottom left and then going from top and bottom, left to right | Start with parent node and then grab child nodes from left to right | Search children before parent: search bottom left and its parent, then the bottom right and its parent|
| Pic | Pic | Pic |
|  | Used to recreate a tree |  |

#### Picture:
#### When to use:
- If you know that the node is likely at the lower level of a tree/graph

#### Pro vs con:

| Depth First Search PRO | Depth First Search CON | 
| ----------- | ----------- |
| Less memory | Can get slow if tree/graph is very deep --> the deeper the tree/graph, the more recurisve calls --> more space complexity added to keep track of function calls on a stack  |
| Does the path exist? (from a source node to a target node) | Not good at finding the shortest path |

#### Depth First Search Big O:

| Type | Big O | Explanation |
| ----------- | ----------- | ----------- |
| **Time Complexity** | **O(n)** | We're traversing through every node in the tree/graph |

#### How to code it:

## Dynamic Programming
#### Overview:
- Dynamic Programming = Divide & Conquer (Recursion) + Memoization (Reuse - Caching)

- Dynamic programming = optimization technique using caching
- If you have something to cache, you can use dynamic programming
- A way to solve problems by breaking it down into a collection of subproblems - solving each of those subproblems just once and storing their solutions in case next time the subproblem occurs

- Caching = store values so you can use them later on
- It speeds up programs and holds some data in an easily accessible box
- Memoization = specific form of caching that involves caching the return value of a function (return value of a function based on its parameters)
- If the parameter of a function doesn't change, then it's memoized (=uses the cache because it's calculated the same thing before with the same parameter and it will return a cached version of the function)
- If the parameter changes, then it will calculate both times
- Memoization = way to remember a solution to a solved problem so you don't have to calculate it again

#### Picture:
#### When to use:
- Answer these questions:
1. Can the problem be divided into subproblems? --> Recursive problem
3. Are there repetitive subproblems? Same calculations over and over again --> Memoize subproblems

#### Pro vs con:
#### Big O:
#### How to code it: