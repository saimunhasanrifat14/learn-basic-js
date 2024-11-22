// function --> (general function , normal, normal function, IIFE , arrow, anonymous)

// function greet() {
//     console.log("Saimun")
// }
// function greet(name){
//     console.log("Hello" + name)
// }

// const name = ("Saimun");
// function greet(name){
//     console.log("Hello" + name)
// }
// function name(name){

// }

//syntex
// function myFirstFunction () {
//     alert("Hello mern 2403")
// }
// myFirstFunction();


// function gretting(name, surname = "") {
//     if(name === "Aylin") {
//         const addingname = `Welcome to your mern stack journey miss ${name} ${surname}`;
//         alert(addingname)
//     }else{
//         const addingname = `Welcome to your mern stack journey mr ${name} ${surname}`;
//         alert(addingname)
//     }
// }


// let allName = ["Lawrance", "Rubel", "Aylin", "nur", "Nafis", "Shohel",
//     "Tanjil", "Gahangir", "Saimun", "Imran", "sk", "Hridoy", "Taufik"
// ]

// for(let name of allName){
//     gretting(name) 
// }  


// function sum(number1, number2){
//      const sumResult = number1 + number2;
//      return sumResult;
// }

// const result = sum(23 , 42);
// console.log(result);

// let allFunArr = [sum, substraction, multiply, divison, expo, modulus]
// for(let i = 0 ; i < allFunArr.length; i++){
//     console.log(allFunArr[i](Unum1, Unum2, Unum3));
// }


function sum(number1 = 0, number2 = 0, number3 = 0){
    return `your sum result is ${number1 + number2 + number3}`;
}
function substraction(number1 = 0, number2 = 0, number3 = 0){
    return `your substraction result is ${number1 - number2 - number3}`;
}
function multiply(number1 = 0, number2 = 0, number3 = 0){
    return `your multiply result is ${number1 * number2 * number3}`;
}
function divison(number1 = 0, number2 = 0, number3 = 0){
    return `your divison result is ${number1 / number2 / number3}`;
}
function expo(number1 = 0, number2 = 0, number3 = 0){
    return `your expo result is ${number1 ** number2 ** number3}`;
}
function modulus(number1 = 0, number2 = 0, number3 = 0){
    return `your modulus result is ${number1 % number2 % number3}`;
}

const Unum1 = +prompt("Enter your first number")
const Unum2 = +prompt("Enter your secound number")
const Unum3 = +prompt("Enter your third number")

document.getElementById("number1").innerHTML = Unum1;
document.getElementById("number2").innerHTML = Unum2;
document.getElementById("number3").innerHTML = Unum3;

document.getElementById("result").innerHTML = sum(Unum1, Unum2, Unum3) + "<br>";
document.getElementById("result").innerHTML += substraction(Unum1, Unum2, Unum3) + "<br>";
document.getElementById("result").innerHTML += multiply(Unum1, Unum2, Unum3) + "<br>";
document.getElementById("result").innerHTML += divison(Unum1, Unum2, Unum3) + "<br>";
document.getElementById("result").innerHTML += expo(Unum1, Unum2, Unum3) + "<br>";
document.getElementById("result").innerHTML += modulus(Unum1, Unum2, Unum3);