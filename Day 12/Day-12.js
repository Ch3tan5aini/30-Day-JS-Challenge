// Basic Error handling
// Task 1
function sum(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Entered Wrong DataType")
    } else {
        return console.log(a + b);
    }
}
try {
    sum(o, 2);
} catch (error) {
    console.log("ERROR: " , error.message);
}
// Task 2
function divide(a, b) {
    if (b === 0) {
        throw new Error("Denominator Is Zero")
    }
    else {
        return console.log(a / b);
    }
}
try {
    divide(4, 0)
} catch (error) {
    console.log(error.message);
}
// Finally Block 
// Task 3
function multiply(a, b) {
    return console.log(a * b);
}
try {
    multiply(j, 2)
} catch (error) {
    console.log(error.message);
} finally{
    console.log("Task 3 Completed");
}
// Custom error Objects
// Task 4
// I Didn't Understand
// Task 5
function checker(input){
    if(!input){
        throw new Error("No input found")
    }else{
        return console.log(input);
    }
}
try {
    checker();
} catch (error) {
    console.log(error.name, error.message);
}
// Error handling in promise 
// Task 6
new Promise((resolve, reject)=>{
    let age = Math.floor(Math.random()*6)+15
    setTimeout(() => {
        if(age<18){
            reject("Age is below 18")
        }else{
            resolve("You are in")
        }
    }, 2000);
}).then((response)=>{
    console.log(response);
}).catch((err)=>{
    console.log(err);
})
// Task 7 
async function task (){
    try{
        let data = await new Promise((resolve, reject)=>{
            let age = Math.floor(Math.random()*6)+15
            setTimeout(() => {
                if(age<18){
                    reject(new Error("Task 7 Rejected"))
                }else{
                    resolve("Task 7 Resolved")
                }
            }, 4000);
        })
        console.log(data);
    }catch(error){
        console.log(error.message);
    }
}
task()
// Error handling in fetch 
// Task 8
fetch("https://randomser.me/api/")
.then((response)=>{
    console.log(response);
})
.catch((err)=>{
    console.log("ERROR FETCHING :", err.name, err.message);
})
// Task 9
async function fetchAPI(){
    try {
        let response = await fetch("https://randomser.me/api/");
        console.log(response);
    } catch (error) {
        console.log("ERROR TASK 9",error.name, error.message);
    }
}
fetchAPI();