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
- Overview 
- Picture
- When to use (what is it optimized for?)
- Pro vs con
#### Big O (insertion, deletion, access, search):
- Search: O(n)
- Lookup: O(1)
- Push: O(1) - NOTE: .push() & .pop() are O(1), but .shift() & .unshift() are O(n) since you're adding/removing an item at the beginning of the array and the rest of the array's indices have to be shifted
- Insert: O(n)
- Delete: O(n)

- How to code it

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
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

## Stacks-Queues
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

## Trees
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

## Graphs
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

## ii) Algorithms 

## Recursion
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

## Sorting

### Bubble Sort
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

### Selection Sort
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

### Insertion Sort
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

### Merge Sort
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

### Quick Sort
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

### Other Sorts
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

## Searching

## Linear Search
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

## Binary Search
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

## Breadth First Search
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

## Depth First Search
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

## Dynamic Programming
- Overview 
- Picture
- When to use 
- Pro vs con
- Big O 
- How to code it

