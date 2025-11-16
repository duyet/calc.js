const calc = require('..');

/**
 * Simple benchmark utility
 */
function benchmark(name, fn, iterations = 10000) {
  const start = Date.now();
  for (let i = 0; i < iterations; i++) {
    fn();
  }
  const end = Date.now();
  const duration = end - start;
  const opsPerSec = Math.round((iterations / duration) * 1000);

  console.log(
    `${name.padEnd(40)} | ${iterations.toLocaleString().padStart(10)} ops | ${duration.toString().padStart(6)}ms | ${opsPerSec.toLocaleString().padStart(12)} ops/sec`
  );
}

console.log('=== calc.js Performance Benchmarks ===\n');
console.log(
  'Operation'.padEnd(40) +
    ' | ' +
    'Iterations'.padStart(10) +
    ' | ' +
    'Time'.padStart(6) +
    ' | ' +
    'Ops/Second'.padStart(12)
);
console.log('-'.repeat(90));

// Basic arithmetic
benchmark('Basic addition (1 + 1)', () => calc('1 + 1'));
benchmark('Basic multiplication (6 * 7)', () => calc('6 * 7'));
benchmark('Complex expression', () => calc('12 / (2.3 + 0.7)'));
benchmark('Exponentiation (2 ^ 10)', () => calc('2 ^ 10'));

// Trigonometry
benchmark('Sine (sin(45 deg))', () => calc('sin(45 deg)'));
benchmark('Cosine (cos(45 deg))', () => calc('cos(45 deg)'));

// Advanced math
benchmark('Square root (sqrt(256))', () => calc('sqrt(256)'));
benchmark('Factorial (10!)', () => calc('10!'));

// Complex numbers
benchmark('Complex addition', () => calc('(2 + 3i) + (1 - 2i)'));
benchmark('Complex multiplication', () => calc('(2 + 3i) * (1 - 2i)'));

// Matrices
benchmark('Matrix determinant', () => calc('det([-1, 2; 3, 1])'));
benchmark('Matrix multiplication', () => calc('[1, 2; 3, 4] * [2, 0; 1, 2]'));

// Variables
benchmark('With variables', () => calc('x + y', { x: 10, y: 20 }));
benchmark('Complex with variables', () =>
  calc('sqrt(x^2 + y^2)', { x: 3, y: 4 })
);

console.log('\n=== Benchmark Complete ===');
