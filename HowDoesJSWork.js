/*
JavaScript is a single-threaded language that can be nonblocking
- Single-threaded = JS only has 1 call stack --> can only do 1 thing at a time
-Multi-threaded = multiple call stacks

What is a program?
- Allocates memory (or else we wouldn't be able to ahve variables or even have a file on our computer)
- Parse and execute scripts (read and run commands)
*/

/*
Memory leak = occurs when you have unused memory filling up memory heap

Memory heap = stores data (ex. global variables)

Call stack = reads and executes our scripts

Stack Overflow = call stack doesn't have enough space anymore (ex. recursive functions- functions that call themselves)
*/
console.log('1')
console.log('2')
console.log('3')
//1
//2
//3

const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}
one();

/*
CALL STACK:
console.log('4') //3 //4-prints the number 4 //5-Removed from call stack
two() //2 //6-Removed from call stack
one() //1 //7-Removed from call stack
*/

console.log('1')
setTimeout(() => {
    console.log('2')
}, 2000)
console.log('3')
//1
//3
//2


//CALL STACK:
console.log('2') //8-removed from stack after being run
callback() //7
console.log('3') //4

setTimeout(() => { //2-triggers web API
    console.log('2')
}, 2000)

console.log('1') //1-log onto browser

//WEB API:
setTimeout() //3-in 2 secs, I have to do something

//CALLBACK QUEUE:
callback() //5-setTimout is a callback and we're reading to run it 

//EVENT LOOP-checks to see if the callstack is empty 
//6-if call stack is empty, it then checks the callback queue to see if anything is there 

