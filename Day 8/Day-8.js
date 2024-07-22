// Template Literals
// Task 1
let personName = "Chetan saini"
let age = 18
console.log(`Hello ${personName}, Welcome to adulthood now your are ${age}`);
// Task 2
let poem =  `Jonny Jonny,
Yess! Papa,
Eating Suger?,
No! Papa.`
console.log(poem);
// Task 3
let numbers = [1,2,3,4,5];
let [first, second] = numbers
console.log(first, second);
// Task 4
let book = {
    title: "Atomic Habit",
    author: "James Clear",
    year: 2000
};
let {title, author, year} = book
console.log(title,"by", author);

// Spread and rest Operators
// Task 5
let moreNumbers = [...numbers, 6,7,8,9,10]
console.log(moreNumbers);
// Task 6
function sum(...numbers){
    return numbers.reduce((total, currentNum)=> total + currentNum,0)
}
console.log(sum(56,44))
// Default Parameters
// Task 7
function product(a, b = 1){
    return a*b
}
console.log(product(2));
console.log(product(2,6));

// Enhanced Object literals 
// Task 8
let obj = {
    name: "Chetan saini",
    age: 18,
    getDetails(){
        console.log(`Hello ${this.name} Your Age Is ${this.age}`);
    }
}
console.log(obj);
// Task 9
let ageProp = "Age"
let firstName = "Chetan"
let lastName = "Saini"
let obj2 = {
    firstName: firstName,
    lastName: lastName,
    [ageProp]:  age
}
console.log(obj2);