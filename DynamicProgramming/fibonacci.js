//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

function fibonacci(n) { //Time complexity: O(2^n)
    calculations++;
    if (n < 2) {
        return n;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}
fibonacci(6); //8
//Time complexity: O(n^2)
//Space complexity: recursion where every nested function call adds to the stack 

//Q. How can we make it more efficient? Yes! Use memoization - how? the solution to each subproblem is optimal (we do the same problems repeatedly)

let calculations = 0;
function fibonacciMemoized() { //Time Complexity: O(n)
    let cache = {}; 
    //To not reset the cache object to empty every time we run this function, return new function below
    return function fib(n) {
        calculations++;
        if (n in cache) {
            return cache[n];
        } else {

            if (n < 2) {
                return n;
            } else {
                //Add result to cache object so 
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}
//Time complexity: O(n)
//Space complexity: higher because we created new memory due to cache hash table/object

let fasterFib = fibonacciMemoized();
console.log('slowerFib', fibonacci(10)); //55
console.log(`We did ${calculations} calculations`); //We did 177 calculations

console.log('fasterFib', fasterFib(10)); //55
console.log(`We did ${calculations} calculations`); //We did 19 calculations


//Another way
function fibonacciAlternative(n) {
    let answer = [0, 1];
    for (let i = 0; i <= n; i++) {
        answer.push(answer[i-2] + answer[i-1]);
    }
    return answer.pop();
}
console.log('fibAlternative', fibonacciAlternative(10)); //55
//This function avoids recursion
//Called bottom up --> start from the simplest solution and work your way up to harder problems 