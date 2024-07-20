// For Loop
// Task 1
for(let i=1; i<=10; i++){
    console.log(i);
}

// Task 2
for(let i=1; i<=10; i++){
    console.log(5*i);
}

// While loop
// Task 3
let index = 1;
let sum = 0;
while (index<=10) {
    sum += index
    index++
}
console.log(sum);

// Task 4
let index2 = 10
while(index2>0){
    console.log(index2)
    index2--
}

// Do While Loop
// Task 5
let index3 = 1
do {
    console.log(index3);
    index3++
} while (index3<=5);

// Task 6
let nth = 6;
let result = 1
let i = 1
do {
    result *= i
    i++
} while (i <= nth);
console.log(result);

// Nested loops
// Task 7

let star = "*";
for(let i=1; i<=5; i++){
    console.log(star)
    star += " *"
}

// Loop control statements
// Task 8

for(let i = 1; i<= 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

// Task 9

for(let i = 1; i<= 10; i++){
    if(i === 7){
        break;
    }
    console.log(i);
}