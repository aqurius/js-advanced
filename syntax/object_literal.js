let type = 'quartz';
let color = 'rose';
let carat = 21.29;

let gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);

gemstone = {type, color, carat} // <- object literal shorthand. property names are same as the variable names that are assigned
console.log(gemstone);