const calc = require('..');

console.log('=== Basic Arithmetic ===');
console.log('1 + 1 =', calc('1 + 1'));
console.log('10 - 5 =', calc('10 - 5'));
console.log('6 * 7 =', calc('6 * 7'));
console.log('12 / 3 =', calc('12 / 3'));
console.log('2 ^ 3 =', calc('2 ^ 3'));
console.log('5! =', calc('5!'));
console.log();

console.log('=== Order of Operations ===');
console.log('2 + 3 * 4 =', calc('2 + 3 * 4'));
console.log('(2 + 3) * 4 =', calc('(2 + 3) * 4'));
console.log('12 / (2.3 + 0.7) =', calc('12 / (2.3 + 0.7)'));
console.log();

console.log('=== Advanced Math ===');
console.log('sqrt(16) =', calc('sqrt(16)'));
console.log('abs(-42) =', calc('abs(-42)'));
console.log('log(100, 10) =', calc('log(100, 10)'));
console.log('round(3.7) =', calc('round(3.7)'));
