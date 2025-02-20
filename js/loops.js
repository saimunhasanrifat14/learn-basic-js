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