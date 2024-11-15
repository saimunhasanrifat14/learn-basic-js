let title = document.getElementById('title');
let x = 1;

while(x<=1000){
    console.log("Count" , x);
    title.innerHTML += `Number count : ${x} </br>`;
    x++ 
}