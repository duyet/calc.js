const calc = require('..');

console.log('=== Trigonometric Functions ===');

console.log('\nDegrees:');
console.log('sin(30 deg) =', calc('sin(30 deg)'));
console.log('sin(45 deg) =', calc('sin(45 deg)'));
console.log('sin(90 deg) =', calc('sin(90 deg)'));
console.log('cos(0 deg) =', calc('cos(0 deg)'));
console.log('cos(180 deg) =', calc('cos(180 deg)'));
console.log('tan(45 deg) =', calc('tan(45 deg)'));

console.log('\nRadians:');
console.log('sin(pi / 6) =', calc('sin(pi / 6)'));
console.log('sin(pi / 4) =', calc('sin(pi / 4)'));
console.log('sin(pi / 2) =', calc('sin(pi / 2)'));
console.log('cos(0) =', calc('cos(0)'));
console.log('cos(pi) =', calc('cos(pi)'));

console.log('\nPythagorean Identity:');
console.log('sin(45 deg) ^ 2 =', calc('sin(45 deg) ^ 2'));
console.log('cos(45 deg) ^ 2 =', calc('cos(45 deg) ^ 2'));
console.log(
  'sin(45 deg)^2 + cos(45 deg)^2 =',
  calc('sin(45 deg)^2 + cos(45 deg)^2')
);
