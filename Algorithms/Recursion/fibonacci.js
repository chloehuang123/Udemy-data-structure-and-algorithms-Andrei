// Given a number N, return the index value of the Fibonacci sequence, where the sequence is:
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

//The pattern of the sequence is that each value is the sum of the 2 previous values: N = 5 --> 2 + 3

//Time Complexity: O(n)
function fibonacciIterative(n) {
    let array = [0, 1]; //first 2 items of the sequence
    for (let i = 2; i < n + 1; i++) { //can also do 'i <= n'
        array.push(array[i - 2] + array[i - 1]);
    }
    return array[n]
}
fibonacciIterative(3);

 
//Time Complexity: O(2^n) - Exponential
function fibonacciRecursive(n) { //n = index value of the Fibonacci sequence
    if (n < 2) {
        //if n = 0 (index), the answer is 0
        //if n = 1(index), the answer is 1
        //if n = 2 (index), the answer is 1 --> so if n < 2, just return n since it's the same value
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    //The sum is always the answers before it
    //Ex. fibonacciRecursive(4) --> 1 + 2 = 3 (value 3 is at the index of 4)
}
fibonacciRecursive(3);