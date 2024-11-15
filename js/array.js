//__ variable naming convention: rules, best prectice

// ** Single world , no gap or speace, no quote, can not start with a number, can not contain dash, should use camelCase

// math operations: -, *, /
// shorthand: -=, -=, --, --

// convert: parselnt, parseFloat

// toFixed

// remainder : vagses: %


// number type variable
// var suglassPrice = 120;

// string type variable
// var specialOneName = "Rifat";

// boolean type variable
// var isSingle = true;

// var friendsAge = [11, 34, 32, 13];
// var picnicFee = [5000, 2000, 4000, 150]
// var nayikas = ['mahi', 'opu', 'sabnur']
// var vowels = ['a', 'e', 'i', 'o']

// console.log(friendsAge)
// console.log(picnicFee);
// console.log(nayikas);
// console.log(vowels.length);

/**
 * primitive (number, string , boolean , bigint , undifined , null )
 * non primitive (array, object, function)
 */

// const myArray = new Array("Chicken", "mutton", "patoato", "Carrot");
// console.log(myArray.length);

const mern2403 = ["Nur", "Saimun", "Shakibul", "Shohel", "Nafis", "Rubel", "Ismail", "Hridoy", "Srk", "Anushka", "Aylin" , "Lawrance", "Gahangir", "Imran", "Rabbi" ]

let number = prompt("Enter a index number :");

if(+number >= mern2403.length){
    alert(`Index range 0 to ${mern2403.length}`)
}else{
    const confrimResult = confirm("Here is Your OutPut : " + mern2403[+number])
    if(confrimResult){
        window.location.reload()
    }
}

// for(let i = 0; i<mern2403.length; i++){

//     if(mern2403[i] === "Aylin" || mern2403[i] === "Anushka"){
//         console.log("Miss " + mern2403[i]);
//     }
//     else{
//         console.log("Mr. " + mern2403[i]);
//     }  
// }