//Create a function that reverses a string

//SOLUTION 1
function reverseString1(str) {
    //check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Invalid input';
    }
    const backwardsString = [];
    const stringLength = str.length - 1; //# of items in the string
    for (let i = stringLength; i >= 0; i--) {
        backwardsString.push(str[i]);
    }
    console.log(backwards); //['a', 'v', 'E']
    return backwards.join('');
}
reverseString1('Eva') //avE

//SOLUTION 2
reverseString2(str) {
    return str.split('').reverse().join('');
}
reverseString2('Eva') //avE

//SOLUTION 3
const reverseString3 = str => str.split('').reverse().join('');

//SOLUTION 4
const reverseString4 = str => [...str].reverse().join('');