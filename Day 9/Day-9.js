// Selecting and manipulating 
// Task 1
document.getElementById("heading").innerHTML = "Hello By Js";
// Task 2
document.querySelector(".box").style.backgroundColor = "blue";
// Creating and appending 
// Task 3
let div = document.createElement("div");
div.innerHTML = "Hello I'am Created by Js"
document.body.appendChild(div)
// Task 4
let li = document.createElement("li");
li.innerHTML = "Radha"
document.getElementById("list").appendChild(li)
// Removing Element 
// Task 5
document.getElementById("remove").hidden = "true"
// Task 6
document.getElementById("list").lastChild.remove();
// Modifying attributes and classes
// Task 7
document.getElementById("img").setAttribute('src','img2.png')
// Task 8
document.getElementById("heading").classList.add('purple')
document.getElementById("heading").classList.remove('purple')
// Event Handling
// Task 9
document.getElementById("btn").addEventListener("click", ()=>{
    let randomTxt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, impedit?"
    document.getElementById("para").innerHTML = randomTxt
})
// Task 10
document.getElementById("btn").addEventListener("mouseover", ()=>{
    document.getElementById("btn").style.border = "2px solid red"
})