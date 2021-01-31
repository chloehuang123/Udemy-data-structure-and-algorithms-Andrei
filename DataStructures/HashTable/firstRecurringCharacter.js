//Q. What is the first number that appears again?

//Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]; It should return 2

//Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]; it should return 1

//Given an array = [2, 3, 4, 5]; it should return undefined

//SOLUTION 1 - O(n^2) with space complexity of O(1)
function firstRecurringCharacter1(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) { //i + 1: number next to the value of i - Why? We've already compared the number to the left in previous loops
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
}
//want to compare 2(i) to 5(j), then 1(j), then 2(j)
//if none found, then move onto 5(i), and compare to 
firstRecurringCharacter1([2, 5, 1, 2, 3, 5, 1, 2, 4]);


//SOLUTION 2 - O(n) but with increased space complexity of O(n)
//Why? Creating a new object that keeps track of all items in the array - worst case? goes through entire array since there is no match and stores all array info
function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]]) { //if key already exists in hash table, return the number
            //input[i] = index --> map[index] = values in array
            return input[i];
        } else {
            map[input[i]] = true;
        }
    }
    console.log(map);
    return undefined;
}
firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);
// {2: true}
// {2: true, 5: true}
// {2: true, 5: true, 1: true}