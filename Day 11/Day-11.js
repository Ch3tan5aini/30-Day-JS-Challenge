// Understanding Promises
// Task 1
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved")
    }, 2000);
}).then((response) => console.log(response))
// Task 2
new Promise((resolve, reject) => {
    setTimeout(() => {
        const Error = true;
        if (Error) {
            reject("Promise Rejected")
        } else {
            resolve("Promise Resolved")
        }
    }, 2000);
})
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
// Chaining Promises
// Task 3
fetch("https://randomuser.me/api/")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log("Name 1: ", data.results[0].name);
    })
    .catch((error) => {
        console.log(error);
    });
// Again Fetching New Data
fetch("https://randomuser.me/api/")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log("Name 2: ", data.results[0].name);
    })
    .catch((error) => {
        console.log(error);
    });
// Using Async/Await 
// Task 4
async function getName() {
    let response = await fetch("https://randomuser.me/api/")
    let data = await response.json();
    console.log("Name 3: ", data.results[0].name);
}
getName();
// Task 5
async function ApiData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Error = true;
            if (Error) {
                reject("Task 5 Promise Rejected")
            } else {
                resolve("Task 5 Promise Resolved")
            }
        }, 4000);
    })
}
async function getData() {
    try {
        let data = await ApiData()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getData();
// Fetching Data From an API
// Task 6 // Already Done in Task 3
// Task 7 // Already Done in Task 4

// Concurrent Promises
// Task 8
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 8 P1 Resolved")
    }, 1000);
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 8 P2 Resolved")
    }, 2000);
})
Promise.all([promise1, promise2]).then((values) => console.log(values)).catch((err) => console.log(err));
// Task 9
Promise.race([promise1, promise2]).then((value) => console.log(value)).catch((err) => console.log(err));