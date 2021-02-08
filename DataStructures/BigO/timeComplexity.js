function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)

    for (let i = 0; i < input.length; i++) { //O(n)
        anotherFunction(); //O(n) - this function runs for each iteration of the for loop
        let stranger = true; //O(n)
        a++; //O(n)
    }
    return a; //O(1)
}
funChallenge();
// BIG O: 1+ 1+ 1 + n + n + n + n = 3 + 4n --> O(n)


function anotherFunChallenge(input) {
    let a = 5; //O(1)
    let b = 10; //O(1)
    let c = 50; //O(1)
    for (let i = 0; i < input.length; i++ ) { //O(n)
        let x = i + 1; //O(n)
        let y = i + 2; //O(n)
        let z = i + 3; //O(n)
    }
    for (let j = 0; j < input.length; j++) { //O(n)
        let p = j * 2; //O(n)
        let q = j * 2; //O(n)
    }
    let whoAmI = 'I don\'t know'; //O(1)
}
anotherFunChallenge();
//BIG O: 4 + 7n --> O(n)

const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; i++) {
            console.log(array[i], array[j])
        }
    }
}
logAllPairsOfArray(boxes); //BIG O: O(n * n) --> O(n^2)
/*
aa ab ac ad ae
ba bb bc bd be
ca cb cc cd ce
da db dc dd de
ea eb ec ed ee
*/