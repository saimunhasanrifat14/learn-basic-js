// let items = ["item1", "item2", "item3", "item4"]
// console.log(items.slice(2,4));



// let items = ["item1", "item2", "item3", "item4"]
// let items2 = ["item1", "item2", "item3", "item4"]
// console.log(items.concat(items2));


// let items = ["item1", "item2", "item3", "item4"]
// console.log(items.join("*"));


//<-------------- pund index number --------------->
// let items = ["item1", "item2", "item3", "item4"]
// console.log(items.indexOf("item1"));
// console.log(items.indexOf("item10"));


//<-------------- add more item --------------->
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// foodItems.push("chips", "burger", "paneer", "mengo");
// console.log(foodItems);


//<-------------- delete last item --------------->
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("Deleted", deletedItem);

//<-------------- array to string convart --------------->
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);

//<-------------- add one array with anather array --------------->
// let mervelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let bdHeroes = ["sakib", "Sharukh"]
// let heroes = mervelHeroes.concat(dcHeroes, bdHeroes);
// console.log(heroes)

//<-------------- add a item on first of array --------------->
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let val = marvelHeroes.unshift("antman");
// console.log(marvelHeroes);


//<--------------delet the first item--------------->
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let val = marvelHeroes.shift();
// console.log("deleted itme", val);
// console.log(marvelHeroes);


//<--------------selacte the item what i want--------------->
// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. Dtrang"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(3 , 5));


//<--------------add element delete element replace element--------------->
// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. Dtrang"];
// marvelHeroes.splice(2 , 1, "Krish");
// marvelHeroes.splice(2 , 0, "Krish");
// console.log(marvelHeroes);


//<--------------index number retarn kore/ item na thakle -1 retarn kore (indexOf)--------------->
// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. Dtrang"];
// console.log(marvelHeroes.indexOf("antman")); 


//<---------------item ache kina ta check kore (includes)-------------->
// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. Dtrang"];
// console.log(marvelHeroes.includes("spiderman"));


//<--------------value majkhane kicu add kore (join separator)--------------->
// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. Dtrang"];
// console.log(marvelHeroes.join(" and "))


//<--------------value ke ulte dei (recerse)--------------->
// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. Dtrang"];
// console.log(marvelHeroes.reverse())


// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple") +1;
// console.log(position);

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple");
// console.log(position);


// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.includes("Apple");
// console.log(position);

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(params) {
    
// }

// Original Array অ্যাক্সেস করা
// const numbers = ["sakib", "tanbir", "abid", "srk"];
// numbers.forEach((numbers, index, array) => {
//     console.log(`
//          IndexOf: ${index}
//          Item: ${numbers} 
//          Full array: ${array}`);
// })


// Object Array-এর সাথে কাজ করা
// const info = [
//     {name : (a) => {a + 5}, age : 19},
//     {name : "Saimun", age : 23},
//     {name : 12, age : 42},
// ]
// info.forEach((info) => {
//     console.log(info.age);
// })

// const numbers = [1, 2, 3, 4];

// forEach
// const resultForEach = numbers.forEach((num) => num * 2);
// console.log(resultForEach); // Output: undefined

// map
// const resultMap = numbers.map((num) => num * 2);
// console.log(resultMap); // Output: [2, 4, 6, 8]

// reduce
// const numbers = [1, 2, 3, 4,43, 43, 56, 24, 21];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

//every
// const numbers = [2, 4, 6, 8];
// const allEven = numbers.every((number) => number % 2 === 0);
// console.log(allEven); // output true

// const numbers = [2, 4, 6, 7];
// const allEven = numbers.every((number) => number % 2 === 0);
// console.log(allEven); // output folse

// sort
// const numbers = [3, 1, 4, 2];
// numbers.sort((a, b) => a - b); // Ascending order
// console.log(numbers);
// const names = ["sakib", 'rifat', "tanbir", "abid"]
// console.log(names.sort());

