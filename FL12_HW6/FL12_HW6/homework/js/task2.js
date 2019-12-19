let a = prompt('Please add "a" side', ''),
		b = prompt('Please add "b" side', ''),
		c = prompt('Please add "c" side', ''),
		triangle = true;

if ( !a || !b || !c || !isFinite(a) || !isFinite(b) || !isFinite(c) ) {
  triangle = false;
  alert('input values should be ONLY numbers');
} else if (parseInt(a) <= 0 || parseInt(b) <= 0 || parseInt(c) <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
}

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

if (!triangle || c > a + b || a > b + c || b > a + c) {
	console.log('Triangle doesn’t exist');
	
} else if (triangle && (a === b && b === c && c === a)) {
	console.log('Equilateral triangle');
	
} else if (
  triangle && a === b && b !== c && a !== c ||
  triangle && b !== a && c !== a && b === c ||
  triangle && c === a && a !== b && c !== b) {
	console.log('Isosceles triangle');
	
} else if (triangle) {
  console.log('Scalene triangle');
}

