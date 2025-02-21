//loop --> forloop, while loop, dowhile loop, for of, for in
//loop with callbeck funciton --> map , foreach , entries, same

// const numbers = [12,42,23, 53,64,25]
// for(const num of numbers){
    //     console.log(num);
    // }

    
// for loop 
// for(let x = 1; x <= 100; x++){
//     console.log("looooping");  
// }

// while loop 
// let x = 1;
// while(x <= 5){
//     console.log("loooping", x);
//     x++;
// }

// for (let x = 0; x < 100; x++) {
// console.log(x);
// }

// let num = 1;
// let sum = 0;
// while(num <= 100){
//     if(num % 2 === 0){
//         sum = sum + num;
//     }
//    num++ 
// }
// console.log(sum);


// using for loop
// let sum = 0;
// for(let n = 1; n <= 10; n++){
//     sum = sum + n;
// }
// console.log("total number is", sum);


// using while loop
// let n = 1;
// let sum = 0;
// while(n <= 10){
//     sum = sum + n;
//     n++;
// }
// console.log("total number is", sum);

// let sum = 0;
// for(let n = 10; n >= 0; n--){
//     console.log(n);
//     sum = sum + n;    
// }
// console.log("total number is", sum);


// let n = 10;
// let sum = 0;
// while(n >= 0){
//     sum = sum + n;
//     console.log(n);
//     n--;
// }
// console.log("total number is", sum);



// for(let n = 1; n <= 20; n++){
//     if(n % 2 === 0){
//         console.log("odd number", n);
//     }
// }
// for(let n = 1; n <= 20; n++){
//     if(n % 2 !== 1){
//         console.log("odd number", n);
//     }
// }
// for(let n = 0; n <= 20; n += 2){
//     console.log(n);
// }


// for(let n = 0; n <= 100; n++){
//     if(n % 5 === 0){
//         console.log(n);
//     }
// }

// let sum = 0;
// for(let n = 0; n <= 200; n++){
//     if(n % 5 === 0){
//         console.log(n);
//         sum = sum + n;
//     }
// }
// console.log("sum number is ",sum);

// let sum = 0;
// for(let n = 0; n <= 200; n++){
//     console.log(n);
//     sum = sum + n;
//     if(sum >= 100){
//         break;
//     }
// }
// console.log("sum number is ",sum);

for(let n = 0; n <= 100; n++){
    console.log(n);
}

// set break point
// for(let n = 0; n <= 100; n++){
//     console.log(n);
//     if(n === 10){
//         break;
//     }  
// }

// set continue
// for(let n = 0; n <= 100; n++){
//     if(n % 2 === 1){
//         continue;
//     }  
//     console.log(n);
// }


// do while loop 
// let n = 10;
// do{
//     console.log(n);
//     n++
// }while(n < 5)


// let numbers = [13, 42,53, 64 ,35, 63,24,53];
// for(let number of numbers){
//     console.log(number); 
// }

// let i = 0;
// while (i < 50) {
//     console.log(i);
//     i++;
// }

// let sumTotal = 0;
//  for(let x = 1; x <= 100; x++){
//      console.log(`${sumTotal} + ${x} = ${sumTotal + x}`)
//      sumTotal = sumTotal + x;
//  }

// const hello = document.getElementById("hello")
// let userinput = prompt("Enter a number");
// if(isNaN(+userinput)){
//     alert("This is not a number :")
// }
// else{
//     for(let x = 1; x <= 10; x++){
//         hello.innerHTML += `${+userinput} x ${x} = ${+userinput * x} <br/>`;
//     }
// }


// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }
//----------for loop-------------
// for(let i = 1; i <= 10; i++){
//     console.log("count =",i );
// }

//-----------while loop------------
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++
// }

//-------------do while loop---------------
// let i = 1;
// do {
//     console.log(i);
//     i++
    
// } while (i <= 10);

//--------------for of loop--------------------\
// let rifat = "rifat";
// for (let i of rifat) {
//     console.log(i); 
// }

//--------------for in loop--------------------\
// let studant = {
//     name : "Saimun",
//     age : 19,
//     ispass : true
// }
// for(let i in studant){
//     console.log(i , studant[i]);
    
// }

//--------------prectice task--------------------\
// let gameNumver = 14;
// let userinput = prompt("Guess the game number : ")

// while (userinput != gameNumver) {
//     userinput = prompt("You entered wrong number, Guess  again : ")
// }

// alert("Congratulations, You entered the right number")