const calc = require('..');

console.log('=== Using Variables ===');

console.log('\nSimple Variables:');
console.log('x + y where x=10, y=20 =', calc('x + y', { x: 10, y: 20 }));
console.log('a * 2 where a=5 =', calc('a * 2', { a: 5 }));

console.log('\nComplex Expressions:');
console.log(
  '(a + b) * c where a=2, b=3, c=4 =',
  calc('(a + b) * c', { a: 2, b: 3, c: 4 })
);
console.log(
  'sqrt(x^2 + y^2) where x=3, y=4 =',
  calc('sqrt(x^2 + y^2)', { x: 3, y: 4 })
);

console.log('\nFormulas:');
console.log('Quadratic formula: (-b + sqrt(b^2 - 4*a*c)) / (2*a)');
console.log(
  '  where a=1, b=-5, c=6 =',
  calc('(-b + sqrt(b^2 - 4*a*c)) / (2*a)', { a: 1, b: -5, c: 6 })
);
console.log(
  '  where a=1, b=-5, c=6 (other root) =',
  calc('(-b - sqrt(b^2 - 4*a*c)) / (2*a)', { a: 1, b: -5, c: 6 })
);
