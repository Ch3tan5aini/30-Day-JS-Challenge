// Task 1
// Function Declaration 
function oddEvenFinder(a) {
    a % 2 === 0 ? console.log("Even") : console.log("Odd");
}
oddEvenFinder(2)

// Task 2
function squareFinder(a) {
    return console.log(a * a)
}
squareFinder(10)

// Function Expression 
// Task 3
const max = function (a, b) {
    a > b ? console.log(a) : console.log(b);
}
max(2, 5);
// Task 4
const concatinate = function (a, b) {
    return console.log(a + b);
}
concatinate("Hello", " World")

// Arrow Function 
// Task 5
const sum = (a, b) => {
    return console.log(a + b);
}
sum(5, 10)

// Task 6
const chrCheck = (str) => {
    str.includes("z") ? console.log(true) : console.log(false);
}
chrCheck("Hello My Name Is Chetan Saini")

// Function Parameter and default values
// Task 7
function product(a, b = 5) {
    console.log(a * b);
}
product(2)
product(2, 4)

// Task 8
function greet(name = "Guest", age = 18) {
    console.log(`Hello ${name}, Your Age is ${age}, Welcome To My Web`);
}
greet("Chetan", 17)
greet()

// Higer Order Function 
// Task 9
const Repeater = (func, times) => {
    for (let i = 1; i <= times; i++) {
        func();
    }
}
const Hello = () => {
    console.log("Hello");
}
Repeater(Hello, 5)

// Task 10
// Higher order function to create a student report card  
const ResultFinder = (func1, func2, name, valuesArray)=>{
    const Percentage = func1(valuesArray)
    const Grade = func2(Percentage)
    console.log(`Student Name: ${name} \n Percentage: ${Percentage}% \n Grade: ${Grade}`)

}

// Function to Calculate Percentage 
const percentageFinder = (subjectWiseNumber)=>{
    let totalNumber = 0;

    for (let index = 0; index < subjectWiseNumber.length; index++) {
        totalNumber += subjectWiseNumber[index]
    }
    return (totalNumber/500)*100
}

// student Grade Finder
const gradeFinder = (score)=>{
    switch (true){
        case (score <= 100 && score >= 80):
            return ("A");
            break;
        case (score < 80 && score >= 60):
            return ("B");
            break;
        case (score < 60 && score >= 40):
            return ("C");
            break;
        case (score < 40 && score >= 30):
            return ("D");
            break;
        case (score < 30 && score <= 20):
            return ("F");
            break;
        default: return ("Try Again");
            break;
    }
}

ResultFinder(percentageFinder, gradeFinder, "Chetan", [100,98,71,78,95])