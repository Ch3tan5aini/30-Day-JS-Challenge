// If Else Statements
// Task 1
let a = Math.floor((Math.random()) * 3) - 1
if (a > 0) {
    console.log("Positive");
} else if (a === 0) {
    console.log("Zero");
} else {
    console.log("Negative");
}
// Task 2
let age = Math.floor((Math.random()) * 21)
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not Eligible to vote");
}
// Nested If else statements
// Task 3
let n1 = 15;
let n2 = 8;
let n3 = 13;
if (n1 > n2) {
    if (n1 > n3) {
        console.log("N1 is greatest");
    }
} else if (n2 > n3) {
    console.log("N2 is greatest");
}
else {
    console.log("N3 is greatest");
}
// switch case statement 
// Task 4
switch (new Date().getDay()) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default: console.log("Enter Number Between 1 to 7");
        break;
}
// Task 5
let score = Math.floor((Math.random()) * 100) + 1
switch (true) { // I didn't understand why i have to use true in the variable value dm me if you know
    case (score <= 100 && score >= 80):
        console.log("A");
        break;
    case (score < 80 && score >= 60):
        console.log("B");
        break;
    case (score < 60 && score >= 40):
        console.log("C");
        break;
    case (score < 40 && score >= 30):
        console.log("D");
        break;
    case (score < 30 && score <= 20):
        console.log("F");
        break;
    default: console.log("Try Again");
        break;
}
// Conditional ternary operator
// Task 6
console.log(score);
(score % 2) === 0 ? console.log("Even") : console.log("Odd");

// Combining Conditions
// Task 7
let N = 2004
if ((N % 4) === 0 && (N % 100) !== 0 || (N % 400) === 0) {
    console.log("Leap Year");
}
else {
    console.log("Not Leap Year");
}