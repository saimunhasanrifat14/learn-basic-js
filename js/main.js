// variable declarations
/** 
 * var
 * let
 * const
*/

// Console API / Console methods

//Console.log()
console.log("hello world");

//console.error()
console.error("There is a error");

//console.warn()
console.warn("This is also a message like console.log");

//console.info()
console.info("Its also work like console.log")

//console.debug()
console.debug("Its also work like console.log");

//console.clear()
// console.clear();

//console.table()
const person = [{ name: "Saimun", age: 19}, {name: "tanbir", age: 18}]
console.table(person)

//console.group() / console.groupEnd()
console.group("group 1");
console.log("group 2");
console.log("group 3");
console.groupEnd()

//console.time() / console.time/End()
console.time("timer");
console.timeEnd("timer")

//console.assert()
console.assert(5 > 10, "This will print an error message.");

//console.count() / console.countReset()
console.count("counter");
console.count("counter");
console.countReset("counter");

//console.trace()
function func1() {
    func2();
}
function func2(){
    console.trace("trace message");
}
func1();

//data types
const message = "Hello"; // string
const number = 5; // number
const isstudent = true; //boolean
const colors = ["red", "blue", "greet"]; // array
const Id = { name: "saimun", age: 19}; // object


function FirstH1(){
    document.getElementById("firsth1").innerHTML = "First h1"
}
function SecondH1() {
    document.getElementById("secoundH1").innerHTML = "Second h1"
}

var numberOne = 50;
var numberOne = 30; // value changed
console.log(numberOne)

let number1 = 5;
number1 = 15; // value changed
let number2 = 10;
console.log(number1 + number2)

console.log(40 + 80); 
console.log(40 - 80); 
console.log(40 * 80); 
console.log(40 / 80); 
console.log(40 % 80); 

let number_one = 40;
let number_two = 80;
const result = number_one + number_two;
// const result = number_one - number_two;
// const result = number_one * number_two;
// const result = number_one / number_two;
// const result = number_one % number_two;
console.log(result)

let name = "saimun";
let age = 18;
let isBCS = true;
let sellary = 20000;

