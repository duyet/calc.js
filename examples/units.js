const calc = require('..');

console.log('=== Unit Conversions ===');

console.log('\nLength:');
console.log('5.08 cm to inch =', calc('5.08 cm to inch'));
console.log('1 m to ft =', calc('1 m to ft'));
console.log('1 mile to km =', calc('1 mile to km'));

console.log('\nMass:');
console.log('1 kg to lb =', calc('1 kg to lb'));
console.log('1 ton to kg =', calc('1 ton to kg'));

console.log('\nTime:');
console.log('1 hour to minutes =', calc('1 hour to minutes'));
console.log('1 day to hours =', calc('1 day to hours'));

console.log('\nArea:');
console.log('1 m^2 to ft^2 =', calc('1 m^2 to ft^2'));

console.log('\nVolume:');
console.log('1 liter to gallon =', calc('1 liter to gallon'));
