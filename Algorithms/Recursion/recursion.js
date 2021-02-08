//Write 2 functions that find the factorial of any number
//One should use recursion, and the other should just use a for loop

/*
FACTORIAL: 
5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!
5! = 5 * 4 * 3!
5! = 5 * 4 * 3 * 2!
5! = 5 * 4 * 3 * 2 * 1!
*/

function findFactorialRecursive(number) { //Time Complexity: O(n)
    if (number === 2) {
        answer = 2;
    }
    //Could also do: if (number < 2) { return 1 }
    return number * findFactorialRecursive(number - 1);
}
findFactorialRecursive(5)
/*
1. return number * findFactorialRecursive(number - 1) --> 5 * function(5-1) --> 5 * 4!
2. return number * findFactorialRecursive(number - 1) --> 4 * function(4-1) --> 4 * 3!
3. return number * findFactorialRecursive(number - 1) --> 3 * function(3-1) --> 3 * 2!
4. return number * findFactorialRecursive(number - 1) --> number = 2 --> 2
*/


function findFactorialIterative(number) { //Time Complexity: O(n)
    let answer = 1;
    if (number === 2) {
        answer = 2; //
    }
    //i <= number includes the number in the parameter when function is called
    for (let i = 2; i <= number; i++) {
        /*
        Q. Why are we starting at 2? 
        1! = 1 and 2! = 2 (1 * 2) 
        To avoid extra looping, start i at 2
        */
       answer = answer * i;
    }
    return answer;
}