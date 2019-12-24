let a = prompt('Enter value for variable "a"', ''),
    b = prompt('Enter value for variable "b"', ''),
		c = prompt('Enter value for variable "c"', ''),
		errors = false;

const two = 2,
			four = 4;

if (!isFinite(a) || !isFinite(b) || !isFinite(c) || !a || !b || !c || parseFloat(a) === 0) {
  errors = true;
  console.log('Invalid input data');
}

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c); 
const d = Math.pow(b, two) - four * a * c;

if (errors) {
	console.log('no solution')

} else if (d > 0) {
  const x1 = Math.round((-b + Math.sqrt(d)) / two * a),
				x2 = Math.round((-b - Math.sqrt(d)) / two * a);
	console.log('x1 = ', x1, ' and x2 = ', x2);
	
} else if (d === 0) {
  const x = Math.round(-b / two * a);
	console.log('x = ', x);
	
} else { 
  console.log('No solution') 
}

