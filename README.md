# DS-Algo

## Table of Contents:
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

## i) Data Structures

## Arrays
#### Overview:
- Stored in contiguous memory (ordered) --> smallest space complexity footprint of any data structure(memory)

Static arrays:
CON
- fixed in size (must specify # of elements array will hold ahead of time)

Dynamic arrays: 
- can copy and rebuild an array at a new location that has more memory
- array expands as you add more elements 
NOTE: JS, Python & Java  automatically allocate memory according to the increase in array size (not C++ - we have to copy the static array at a new location and rebuild it into a dynamic array with more indices for data)
#### Picture:
#### When to use:
#### Pro vs con:
PRO
- Fast lookups
- Fast push/pop (end of array)
- Ordered

CON
- Slow inserts
- Slow deletes
- Fixed size (if using static arrays)

#### Big O (insertion, deletion, access, search):
- Search: O(n)
- Lookup: O(1)
INSERT/DELETE
- Push/Pop: O(1) - NOTE: .push() & .pop() are O(1), but .shift() & .unshift() are O(n) since you're adding/removing an item at the beginning of the array and the rest of the array's indices have to be shifted
- Shift/Unshift: O(n)
- Splice: O(n)

- Insert: O(n)
- Delete: O(n)
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
PRO
- Fast data access/lookups - NOTE: Good collision resolution needed
- Fast inserts
- Flexible keys (instead of numbered keys like arrays)

CON
- Collision: keep adding to the same memory space which slows down our ability to access or insert info
To check the content into the memory address, you must use iteration now 
Slows it down by O(n/k) - k = size of your hash table
- Unordered
- Slow key iteration: must iterate through full memory space to grab all keys in hash table

How to deal with collisions?
a) Linked Lists
b) 

#### Big O:
- Time complexity: O(1) - constant

- Insert: O(1)
- Lookup: O(1) - NOTE: If there is a collision, lookup will become O(n)
- Delete: O(1)
- Search: O(1)

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
`let obj1 = { a: true };`
`let obj2 = obj1;` //Pointer: obj2 will reference obj1 and they both to the same location in memory
`obj1.a = 'hello` 
`console.log('1', obj1);` //{a: 'hello'}
`console.log('2', obj2);` //{a: 'hello'}

`delete obj1;` 
`console.log('1', obj1);` //ReferenceError: obj1 is not defined
`console.log('2', obj2);` //{a: 'hello'} 

#### Picture:
#### When to use:

#### Pro vs con:
PRO
- Loose structure that gives us the ability to add/delete something in the middle of the list by resetting a few pointers (rather than every index in arrays)
- Fast insertion
- Fast deletion
- Ordered
- Flexible Size

CON
- Nodes are scattered in computer memory (VS arrays are sequential) --> traversing/iterating through linked lists is slower (even though they're both O(n))
- Slow lookup
- More memory

- Singly Linked List:
PRO: simpler, lesser memory, 
CON: can't be iterated/travesed from back to front
WHEN TO USE: Conserve memory, want fast insertion and deletion 
- Doubly Linked List: 
PRO: Iterated/traversed from front to back and back to front, fast deletion of previous node without iteration from the head
CON: more complex, more memory/storage (space complexity), more operations to perform because of the previous pointer(time complexity)
- WHEN TO USE: No limitation on memory, want good oepration for searching elements (ex. search backwards)

#### Big O:
- Prepend: O(1) --> add to beginning of list
- Append: O(1) --> add to end of list
- Lookup/Traversal/Iteration: O(n) --> go from the head all the way until we find what we're looking for 
- Insert: O(n) --> iterate to find the index to insert new node there
- Delete: O(n)

#### How to code it:

## Stacks-Queues
#### Overview:
- Both linear data structures: can traverse through data elements sequentially one by one in which only 1 data element can be directly reached

Similarity: How they are implemented
Difference: How items are removed 
USES:
- Stacks: browser history, undo and forward button
- Queues: waitlist app, printer

#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
STACKS (LIFO - Last In First Out)
- Lookup: O(n)
- Pop: O(1) - remove an item from the top
- Push: O(1) - add an item to the top
- Peek: O(1) - view the topmost item

QUEUES (FIFO - First In First Out)
- Lookup: O(n)
- Enqueue: O(1) - add a first item
- Dequeue: O(1) - remove the first item
- Peek: O(1) - view the first item

#### How to code it:

## Trees
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

## Graphs
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

## ii) Algorithms 

## Recursion
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

## Sorting

### Bubble Sort
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

### Selection Sort
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

### Insertion Sort
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

### Merge Sort
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

### Quick Sort
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

### Other Sorts
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

## Searching

## Linear Search
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

## Binary Search
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

## Breadth First Search
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

## Depth First Search
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

## Dynamic Programming
#### Overview:
#### Picture:
#### When to use:
#### Pro vs con:
#### Big O:
#### How to code it:

