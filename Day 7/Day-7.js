// Object creation and access 
// Task 1
let book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2000,
    changeYear(year){
        book.year = year
        return book
    },
    
    getDetails(){
        return `${this.title} by ${this.author} in ${this.year}`
    }
}
console.log(book);
// Task 2
console.log(book.title, book.author);

// Object Methods 
// Task 3
console.log(book.getDetails());
// Task 4
console.log(book.changeYear(2006));

// Nested Objects 
// Task 5
let library = {
    name: "Chetan Saini",
    books: [
        {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2000,
        },
        {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        year: 2006,
        },
        {
        title: "Ikigai",
        author: "Hector Gargia",
        year: 2007,
        }
]
}
// Task 6
console.log(library.name);
library.books.map(book => console.log(book.title))
library.books[2]
// Task 7
console.log(book.getDetails());
// Task 8
for (const key in book) {
    if (Object.hasOwnProperty.call(book, key)) {
        const element = book[key];
        console.log(key, ":" , element);
    }
}

// Task 9
const keys = Object.keys(book)
const values = Object.values(book)

for(let key of keys){
    for(let value of values){
        console.log(key ,":" ,value);
    }
}

