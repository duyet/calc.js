const calc = require('..');

console.log('=== Complex Numbers ===');

console.log('\nBasic Complex Numbers:');
console.log('2 + 3i =', calc('2 + 3i'));
console.log('9 / 3 + 2i =', calc('9 / 3 + 2i'));

console.log('\nComplex Arithmetic:');
console.log('(2 + 3i) + (1 - 2i) =', calc('(2 + 3i) + (1 - 2i)'));
console.log('(2 + 3i) - (1 - 2i) =', calc('(2 + 3i) - (1 - 2i)'));
console.log('(2 + 3i) * (1 - 2i) =', calc('(2 + 3i) * (1 - 2i)'));
console.log('(4 + 2i) / 2 =', calc('(4 + 2i) / 2'));

console.log('\nComplex Functions:');
console.log('sqrt(-4) =', calc('sqrt(-4)'));
console.log('abs(3 + 4i) =', calc('abs(3 + 4i)'));
console.log('conj(2 + 3i) =', calc('conj(2 + 3i)'));

console.log('\nEulers Formula: e^(i*pi) + 1 = 0');
console.log('e^(i*pi) + 1 =', calc('e^(i*pi) + 1'));
