// Task 1
export function sum(a, b) {
    return console.log(a + b);
}

// Task 2
export const person = {
    name: "Chetan Saini",
    age: 18,
    getDetails() {
        return console.log(`name: ${this.name}
age: ${this.age}`)
    }
}

// Task 3
export function multiply(a,b){
    return console.log(a*b);
}
export function divide(a,b){
    return console.log(a/b);
}

// Task 4
export default function print(){
    return console.log("Hello World");
}