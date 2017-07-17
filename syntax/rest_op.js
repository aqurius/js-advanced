// rest operator (...) is similar to spread operation. but it appears on the LHS of '='.
// So, it does the opposite. bundle multiple elements back into an array
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);


// sum of indefinite number of arguments
function sum() {
  let total = 0;  
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}
console.log(sum(-23, 30, 40))

// now the same sum() using spread. easier to read!
function sum(...numbers) {
  let total = 0;  
  for(const number of numbers) {
    total += number;
  }
  return total;
}
console.log(sum(-23, 30, 40))