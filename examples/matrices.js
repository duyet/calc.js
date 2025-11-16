const calc = require('..');

console.log('=== Matrix Operations ===');

console.log('\nMatrix Creation:');
console.log('[1, 2; 3, 4] =', calc('[1, 2; 3, 4]'));

console.log('\nMatrix Addition:');
console.log(
  '[1, 2; 3, 4] + [5, 6; 7, 8] =',
  calc('[1, 2; 3, 4] + [5, 6; 7, 8]')
);

console.log('\nMatrix Multiplication:');
console.log(
  '[1, 2; 3, 4] * [2, 0; 1, 2] =',
  calc('[1, 2; 3, 4] * [2, 0; 1, 2]')
);

console.log('\nDeterminant:');
console.log('det([-1, 2; 3, 1]) =', calc('det([-1, 2; 3, 1])'));
console.log('det([1, 2; 3, 4]) =', calc('det([1, 2; 3, 4])'));

console.log('\nTranspose:');
console.log('transpose([1, 2; 3, 4]) =', calc('transpose([1, 2; 3, 4])'));

console.log('\nIdentity Matrix:');
console.log('eye(3) =', calc('eye(3)'));
