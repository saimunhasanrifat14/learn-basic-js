// const salary =25000;
// const isBCS = true;
// const height =68;
// const hasCar =false;

// if((salary > 25000 && hasCar == true) || isBCS == true){
//     console.log("su patro")
// }
// else{
//     console.log('ja bag')
// }


// let userinput = prompt("Enter your buying price");
// let price = +userinput;
// console.log(price)
// if (price >= 5000){
//     alert("Get 50% off!")
// }else if(price >= 4000){
//     alert("Get 40% off!")
// }else if(price >= 3000){
//     alert("Get 30% off!")
// }else if(price >= 2000){
//     alert("Get 20% off!")
// }else if(price >= 1000){
//     alert("Get 10% off!")
// }else(alert("You will pay full payment"))


// let userinput = prompt("Enter your number ")
// let number = +userinput;
// console.log(number)
// if ( number % 2 == 0) {
//     alert("It is an even number")
// }else(
//     alert("It is an odd number")
// )


// let userinput = prompt("Enter your age")
// let age = +userinput;
// console.log(age)
// if (age >= 18 && age <= 80){
//     alert("tumi bot dite parba")
// }
// else(
//     alert("tumi bot dite parba na")
// )


let day = prompt("Enter a day");
let convert = day.toLowerCase();

switch(convert){
    case "sunday":{
        alert("It`s a sunny day")
        break;
    }
    case "tuesday":{
        alert("The day is middle of a week")
        break;
    }
    case "wednesday":{
        alert("Weekend is near")
        break;
    }
    case "thursday":{
        alert("To day is 2nd last day of a week")
        break;
    }
    case "friday":{
        alert("Finally we are in weekend")
        break;
    }
    case "seturday":{
        alert("It`s first day of a week")
        break;
    }
    default:{
        alert("You are out of network")
        break;
    } 

}

