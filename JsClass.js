//1. REFERENCE TYPE
[] === []; //false
[1] === [1]; //false

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2; //true --> object2 references object1 --> value is derived from Box1 address
object1 === object3; //false

object1.value = 15; //value is stored in Box1 address
object2.value; //15 --> references same address (Box1) as object1
object3.value; //10 --> value is stored in Box3 address

/*
- Objects are reference types (nonprimitive)
- They are not defined by the programming languages --> they are created by the programmer
-
 */


//2. CONTEXT VS SCOPE
/*
CONTEXT = tells us where we are within the object
- this = object environment that we're in right now (what is to the left of the decimal/dot?)
*/
console.log(this); //window object

function a() {
    console.log(this);
}
a(); //window object

const objectSample = {
    a: function () {
        console.log(this);
    }
}
objectSample.a(); //object --> this is equal to the objectSample now rather than the window object

//SCOPE = created when it sees curly brackets
function b() {
    let a = 4;
}
console.log(a); //ReferenceError: a is not defined


//3. INSTANTIATION
/*
Definition: When you make a copy of an object and reuse the code
- Make instances/multiple copies of an object
*/
class Player {
    //everytime I'm making a copy of this Player class, run constructor function first and constructor function creates name and type properties on the player object
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    //every player I create can always introduce themselves using the introduce() method
    introduce() {
        console.log(`Hi I am ${this.name}, and I am a ${this.type}`);
    }
}

//copy/extend Player class' properties onto the new Wizard class
class Wizard extends Player {
    constructor(name, type) {
        //use super() in order to gain access to Player class' name and type properties
        //super(name, type) references Player class' constructor method (lines 56-59)
        super(name, type)
    }
    play() {
        console.log(`I am a ${this.type}`);
    }
}

//Instead of creating properties for each player and having repetitive code - do this:
//new = we're creating a new wizard/player using the JS classes
const wizard1 = new Wizard('Shelly', 'Healer'); // Wizard {}
const wizard2 = new Wizard('Shawn', 'Dark Magic');
wizard1.play(); //I am a Healer
wizard1.introduce(); //Hi I am Shelly, and I am Healer






//CLASSICAL INHERITANCE
var Player = function (name, type) {
    this.name = name;
    this.type = type;
}

Player.prototype.introduce = function () {
    console.log(`Hi I am ${this.name} and I am a ${this.type}`)
}

var wizard1 = new Player('Shelly', 'Healer');
var wizard2 = new Player('Shawn', 'Dark Magic');

wizard1.play = function () {
    console.log(`I am a ${this.type}`);
}

wizard2.play = function () {
    console.log(`I am a ${this.type}`);
}