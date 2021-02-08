function sayHello(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('hello!');
    }
}
sayHello([1, 2, 3, 4, 5]);
/*
hello!
hello!
hello!
hello!
hello!
*/

//Time Complexity: O(n)
//Space Complexity: O(1)

//NOTE: For space complexity, don't include space taken up by the inputs - only talking about additional space
//We don't have any control over the input, we have control over what happens inside of the function
//In the sayHello function, we're not adding any more memory --> we're just creating i = 0 variable

function sayHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}
sayHiNTimes(6); //['hi', 'hi', 'hi', 'hi', 'hi', 'hi']

//Time Complexity: O(n)
//Space Complexity: O(n)

//What takes up memory? variables (i = 0) and data structures (arrays - we created a new hiArray for this function)
//We created a new data structure and adding addiitonal memory --> each item is an additional memory space on our computers