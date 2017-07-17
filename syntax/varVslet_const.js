function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    // variables declared using 'var' are 'hoisted'. so, freezing is undefined here.
    console.log(freezing);
  }
}

function getClothing_let(isCold) {
  if (isCold) {
    let freezing = 'Grab a jacket!';
  } else {
    let hot = 'It’s a shorts kind of day.';
    // freezing can't be accessed here because it's not defined in this block
    console.log(freezing);
  }
}

function constCantBeReassigned() {
	const name = 'Daisy'
	name = 'Debora' // this is not allowed
	console.log(name)
}

constCantBeReassigned()