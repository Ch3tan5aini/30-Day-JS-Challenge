// Class Definition
// Task 1
class Person {
    constructor(firstname, secondname, age) {
        this.firstname = firstname,
            this.secondname = secondname,
            this.age = age
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
    // Task 2
    updateAge(correctAge) {
        this.age = correctAge
        console.log(this.age);
    }
    // Task 5
    static genericGreet() {
        console.log(`Hello Bhai/Behan`);
    }
    // Task 7
    get fullName() {
        return console.log(`FullName: ${this.firstname} ${this.secondname}`);
    }
    // Task 8 
    set changeFirstName(newFirstName) {
        if (typeof newFirstName === 'string' || newFirstName > 0) {
            return console.log(this.firstname = newFirstName)
        } else {
            return console.log("Invalid Input");
        }
    }
    set changeLastName(newLastName) {
        if (typeof newLastName === 'string' || newLastName > 0) {
            return console.log(this.secondname = newLastName)
        } else {
            return console.log("Invalid Input");
        }
    }

}
let Chetan = new Person("Chetan", "Saini", 18);
Chetan.greet()
// Task 2
console.log(Chetan);
Chetan.updateAge(19);

// class inheritance
// Task 3
class Student extends Person {

    static instance_count = 0

    constructor(studentID) {
        super()
        this.Id = studentID
        Student.instance_count++
    }
    getID() {
        return console.log(this.Id);
    }
    greet() {
        console.log(`Hello ${this.Id}`);
    }

}
const deepika = new Student(14112000)
const palalk = new Student(655265)
deepika.getID();
// Task 4
deepika.greet();
// Static Methods and Properties
// Task 5
Person.genericGreet();
// Task 6
console.log(Student.instance_count);
// Getter and Setter 
// Task 7
const geeta = new Person("Geeta", "Saini", 80);
geeta.fullName
// Task 8
geeta.changeFirstName = "Bherulal"
geeta.changeLastName = "Sharma"
geeta.fullName

// Private Feilds
// Task 9
class Account {
    #balance = 0; // Private Feild
    constructor(fullName, age) {
        this.fullName = fullName,
            this.age = age
    }
    deposit(money) {
        this.#balance += money
    }
    withdraw(money) {
        this.#balance -= money
    }
    get accountDetials() {
        return console.log(`
 Account Holder: ${this.fullName}
 Age: ${this.age}
 Balance: ${this.#balance} Rs`);
    }
}
// Task 10
const ChetanAC = new Account("Chetan Saini", 18);
ChetanAC.deposit(5000);
ChetanAC.accountDetials
ChetanAC.withdraw(3000);
ChetanAC.accountDetials