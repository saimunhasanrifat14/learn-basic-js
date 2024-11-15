//loop --> forloop, while loop, dowhile loop, for of, for in
//loop with callbeck funciton --> map , foreach , entries, same

// let i = 0;
// while (i < 50) {
//     console.log(i);
//     i++;
// }

let sumTotal = 0;
 for(let x = 1; x <= 100; x++){
     console.log(`${sumTotal} + ${x} = ${sumTotal + x}`)
     sumTotal = sumTotal + x;
 }

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