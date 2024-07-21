// Array Creation and access 
// Task 1
let array = [1,2,3,4,5]
console.log(array);
// Task 2
console.log(array[0]);
console.log(array[array.length-1]);

// Array Methods easy
// Task 3
array.push(6)
console.log(array);
// Task 4
array.pop()
console.log(array);
// Task 5
array.shift()
console.log(array);
// Task 6
array.unshift(1)
console.log(array);

// Array Methods Intermediate
// Task 7
let double = array.map(function(each){
    return each * 2
})
console.log(double);
// Task 8
let evenNumbers = array.filter(function(each){
    return each%2 === 0
})
console.log(evenNumbers);
// Task 9
let total  = array.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
},0)
console.log(total);
// Task 10
for(let i = 0; i<array.length; i++){
    console.log(array[i]);
}
// Task 11
array.forEach(element => {
    console.log(element);
});

// Multi-dimensional Arrays
// Task 12
const matrix = [
    [1,2,3,4],
    [5,6,7,8]
]
console.log(matrix);
console.log(matrix[1][2]); //I want 7
