// Basic Event Handling
// Task 1
let btn = document.getElementById("btn");
let para = document.getElementById("para")
btn.addEventListener('click', () => {
    para.innerHTML = "You Clicked The Button"
})
// Task 2
let img = document.getElementById("image");
img.addEventListener('dblclick', () => {
    if (image.style.visibility === 'visible') {
        image.style.visibility = 'hidden';
    } else {
        image.style.visibility = 'visible';
    }
}); // if it gets hidden how can i double click agian ? idk the solution
// Mouse Events 
// Task 3
let box = document.getElementById("box");
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "blue";
})
// Task 4
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "red";
})

// KeyboardEvent 
// Task 5
let inputbox = document.getElementById("input");
inputbox.addEventListener("keydown", (e) => {
    console.log(e.key);
})
// Task 6
let inputbox2 = document.getElementById("input2");
let para2 = document.getElementById("para2")
inputbox2.addEventListener("keyup", (event) => {
    para2.innerHTML = `You Pressed ` + event.key
})

// Form Events 
// Task 7
let form = document.getElementById("form");
let submitBtn = document.getElementById("formbtn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(form.elements.formInput.value);
})

// Task 8
let dropDown = document.getElementById("dropdown");
let para3 = document.getElementById("para3");
dropDown.addEventListener("change", (e) => {
    para3.innerHTML = dropDown.value
})

// Event Delegation
// Task 9
document.getElementById("list").addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
})
// Task 10
let carBtn = document.getElementById("addCar")
let carInput = document.getElementById("carInput")
let list2 = document.getElementById("list2")
list2.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
})
carBtn.addEventListener("click", () => {
    let li = document.createElement("li")
    li.innerHTML = carInput.value
    list2.appendChild(li)
    carInput.value = ""
})

