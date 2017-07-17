const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};

const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}

// old way of concatenating strings. we can also use String's concat() method in place of '+'. That doesn't make it better though
let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';
console.log(message)

// new way: using template literals (enclosed with back-ticks). this is neat!
message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
console.log(message)



// multi-line strings: using '+'
let note = teacher.name + ',\n\n' +
  'Please excuse ' + student.name + '.\n' +
  'He is recovering from the flu.\n\n' +
  'Thank you,\n' +
  student.guardian;
console.log(note)

// multi-line strings: using template literals
note = `${teacher.name},

  Please excuse ${student.name}.
  He is recovering from the flu.

  Thank you,
  ${student.guardian}`;
console.log(note)