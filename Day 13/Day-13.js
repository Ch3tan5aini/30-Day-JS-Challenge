// Creating and Exporting Modules
// Task 1
import { sum } from "./utility.js";
sum(5,9)
// Task 2
import { person } from "./utility.js";
console.log(person);
person.getDetails();
// Named and Default Exports
// Task 3
import { multiply, divide } from "./utility.js";
multiply(4,3);
divide(4,6)
// Task 4
import Hello from "./utility.js";
Hello();
// Task 5
import * as utility from "./utility.js"
utility.default();
utility.sum(8, 9);
// Using Third Pary Modules
// Task 6
import lodash from "lodash"
const a = "hello world"
console.log(lodash.snakeCase(a));
console.log(lodash.upperFirst(a));
// Task 7
import axios from "axios";
async function req (){
    let response = await axios.get("https://randomuser.me/api/")
    let data = response.data
    console.log(data);
}
req();
// Task 8
// Will Learn Tomorrow