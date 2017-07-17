const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(books)
console.log(...books);


// spread operator (...) can be very useful in combining arrays
// Combining arrays using concat()
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
let produce = fruits.concat(vegetables);
console.log(produce);

produce = [fruits, vegetables]; // this adds 2 arrays into 'produce' array. instead, we need both the arrays expanded into 'produce' array
console.log(produce);

produce = [...fruits, ...vegetables]
console.log(produce)