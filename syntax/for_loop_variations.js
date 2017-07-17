console.log('for loop with control over indexing')
let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}


console.log('for..in loop')
digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// no need to increment index. no exit condition for indexing
for (const index in digits) {
  console.log(digits[index]);
}

console.log('Problem with for..in loop')
// Adding additional properties to array's prototype also appears in the loop!
Array.prototype.decimalfy = function() { // this function also appears in the for loop
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};
digits = [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
for (const index in digits) {
  console.log(digits[index]);
}

console.log('for..of loop. this loops over "iterable" data')
for (const digit of digits) { // you can drop the 'index'
	console.log(digit)
}