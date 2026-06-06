const calc = require('..');

console.log('=== Real-World Examples ===');

console.log('\nCompound Interest:');
console.log('Formula: P(1 + r)^t');
console.log('Principal: $1000, Rate: 5%, Time: 10 years');
console.log('Result: $', calc('1000 * (1 + 0.05)^10'));

console.log('\nDistance Formula:');
console.log('Formula: sqrt((x2-x1)^2 + (y2-y1)^2)');
console.log('Point 1: (1, 3), Point 2: (5, 7)');
console.log('Distance:', calc('sqrt((5-1)^2 + (7-3)^2)'));

console.log('\nBMI Calculation:');
console.log('Formula: weight(kg) / height(m)^2');
console.log('Weight: 70kg, Height: 1.75m');
console.log('BMI:', calc('70 / 1.75^2'));

console.log('\nPercentage:');
console.log('What is 25 out of 200 as a percentage?');
console.log('Result:', calc('(25 / 200) * 100'), '%');

console.log('\nTemperature Conversion:');
console.log('98.6°F to Celsius');
console.log('Result:', calc('(98.6 - 32) * 5/9'), '°C');

console.log('\nLoan Payment (Simple Interest):');
console.log('Formula: P * r * t');
console.log('Principal: $5000, Rate: 8%, Time: 3 years');
console.log('Interest: $', calc('5000 * 0.08 * 3'));
console.log('Total: $', calc('5000 + 5000 * 0.08 * 3'));

console.log('\nCircle Area:');
console.log('Formula: pi * r^2');
console.log('Radius: 5');
console.log('Area:', calc('pi * 5^2'));

console.log('\nCircle Circumference:');
console.log('Formula: 2 * pi * r');
console.log('Radius: 5');
console.log('Circumference:', calc('2 * pi * 5'));

console.log('\nSpeed, Distance, Time:');
console.log('Distance = Speed * Time');
console.log('Speed: 60 km/h, Time: 2.5 hours');
console.log('Distance:', calc('60 * 2.5'), 'km');
