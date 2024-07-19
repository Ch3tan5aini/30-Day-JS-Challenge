// Activity 1
// Task 1
function sum(a,b){
    return a+b
}
console.log(sum(5,6));
// Task 2
function subtract(a,b){
    return a-b
}
console.log(subtract(5,6));
// Task 3
function multiply(a,b){
    return a*b
}
console.log(multiply(5,6));
// Task 4
function divide(a,b){
    return a/b
}
console.log(divide(5,6));
// Task 5
function remainder(a,b){
    return a%b
}
console.log(remainder(10,2));

// Assignment Operator
// Task 6
let a = 5;
let b = 6;
let c = 5;
let d = "5";
a += 1 // plus one in a
console.log(a);
// Task 7
a -= 1 // minus one in a
console.log(a);

// Comparision Operator
// Task 8
console.log(b>a);
console.log(b<a);
// Task 9
console.log(a >= c ) // first it will check if a is greater than c then if a is equal to c 
console.log(a <= b ) // same as above

// Task 10
console.log( a == d ) // it will just check the value not its data type
console.log(a === d) // it will also check the datatype

// Logical Operator
// Task 11
if(a == c && a == d){ // use to add multiple conditions
    console.log("Same Same but different datatype")
}

// Task 12
if(a === d || a == c){ // use to add or , first condition is flase but second is true
    console.log("success");
}

// Task 13
if(a != b){
    console.log("success");
}

// Task 14
a>0 ? console.log("Positive") : console.log("Negative");