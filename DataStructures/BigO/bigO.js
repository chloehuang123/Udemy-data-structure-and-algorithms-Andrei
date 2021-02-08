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