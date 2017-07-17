// 1. from array
const point = [10, 25, -34];
const [x, y, z] = point;
console.log(x, y, z);


// 2. from object
const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};
const {type, color, karat} = gemstone;
console.log(type, color, karat);


const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

let {radius, getArea, getCircumference} = circle;
console.log(getArea()) // Keep in mind! getArea() in this case doesn't have access to 'this' in 'circle'
console.log(circle.getArea())