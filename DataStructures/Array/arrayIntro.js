const strings = ['a', 'b', 'c', 'd'];

//Lookup - O(1)
strings[2] //'c'

//Insert at the end (push) - O(1)
//NOTE: Could be O(n) when dealing with static arrays
strings.push('e'); //['a', 'b', 'c', 'd', 'e' ]
//Not looping through anything - just adding 1 item to end of array

//Delete at the end(pop) - O(1)
strings.pop(); //['a', 'b', 'c', 'd']
//Not looping through anything - just removing last item in array

//Insert at the beginning(unshift) - O(n)
strings.unshift('x'); //['x', 'a', 'b', 'c', 'd'];
//All preexisting items will be shifted 1 down and have an index of i + 1
//This is achieved through looping/iteration
/*
BEFORE:
        ['a' , 'b' , 'c' , 'd'  ]
Index     0     1     2     3

AFTER:
        ['x' , 'a' , 'b' , 'c' , 'd' ]
Index     0     1     2     3     4
*/

//Delete at the beginning(shift) - O(n)
strings.shift('x'); //['a', 'b', 'c', 'd'];

//Insert in the middle (splice) - O(n)
//starting index = 2, delete count = 0, what to add = 'hello'
strings.splice(2, 0, 'hello'); //['x', 'a', 'hello', 'b', 'c', 'd' ]