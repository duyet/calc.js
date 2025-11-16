# calc.js

[![CI](https://github.com/duyetdev/calc.js/workflows/CI/badge.svg)](https://github.com/duyetdev/calc.js/actions)
[![npm version](https://img.shields.io/npm/v/calc.js.svg)](https://www.npmjs.com/package/calc.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful, flexible expression parser that offers an integrated solution to work with numbers, big numbers, complex numbers, units, and matrices. Simple API, powerful capabilities.

## Features

- **Simple API**: One function call to evaluate any mathematical expression
- **Comprehensive**: Support for arithmetic, algebra, trigonometry, statistics, and more
- **Unit Conversions**: Built-in support for unit conversions (length, mass, time, etc.)
- **Complex Numbers**: Full support for complex number operations
- **Matrix Operations**: Matrix arithmetic, determinants, and more
- **TypeScript Support**: Full TypeScript definitions included
- **Well Tested**: Comprehensive test suite with high coverage
- **Safe**: Input validation and error handling built-in
- **Zero Config**: Works out of the box

## Installation

```bash
npm install calc.js
```

## Quick Start

```javascript
const calc = require('calc.js');

// Basic arithmetic
calc('2 + 2'); // 4
calc('12 / (2.3 + 0.7)'); // 4

// Unit conversions
calc('5.08 cm to inch'); // 2 inch
calc('1 kg to lb'); // 2.20462 lb

// Trigonometry
calc('sin(45 deg)'); // 0.7071...
calc('sin(45 deg) ^ 2'); // 0.5

// Complex numbers
calc('9 / 3 + 2i'); // 3 + 2i
calc('(2 + 3i) * (1 - 2i)'); // 8 - 1i

// Matrices
calc('det([-1, 2; 3, 1])'); // -7
calc('[1, 2; 3, 4] * [2, 0; 1, 2]'); // [[4, 4], [10, 8]]

// Variables
calc('x + y', { x: 10, y: 20 }); // 30
```

## Usage

### Basic Arithmetic

```javascript
const calc = require('calc.js');

calc('1 + 1'); // 2
calc('10 - 5'); // 5
calc('6 * 7'); // 42
calc('12 / 3'); // 4
calc('2 ^ 3'); // 8 (exponentiation)
calc('5!'); // 120 (factorial)
```

### Advanced Math Functions

```javascript
// Square root
calc('sqrt(16)'); // 4

// Logarithms
calc('log(100, 10)'); // 2
calc('ln(e)'); // 1

// Absolute value
calc('abs(-42)'); // 42

// Rounding
calc('round(3.7)'); // 4
calc('ceil(3.2)'); // 4
calc('floor(3.8)'); // 3
```

### Trigonometry

```javascript
// Degrees
calc('sin(90 deg)'); // 1
calc('cos(180 deg)'); // -1
calc('tan(45 deg)'); // 1

// Radians (default)
calc('sin(pi / 2)'); // 1
calc('cos(pi)'); // -1
```

### Unit Conversions

```javascript
// Length
calc('5.08 cm to inch'); // 2 inch
calc('1 m to ft'); // 3.28084 ft

// Mass
calc('1 kg to lb'); // 2.20462 lb

// Temperature
calc('100 celsius to fahrenheit'); // 212 fahrenheit

// Time
calc('1 hour to minutes'); // 60 minutes
```

### Complex Numbers

```javascript
// Basic operations
calc('2 + 3i'); // 2 + 3i
calc('(2 + 3i) + (1 - 2i)'); // 3 + 1i
calc('(2 + 3i) * (1 - 2i)'); // 8 - 1i
calc('(4 + 2i) / 2'); // 2 + 1i

// Complex functions
calc('sqrt(-4)'); // 2i
calc('abs(3 + 4i)'); // 5
```

### Matrices

```javascript
// Matrix creation
calc('[1, 2; 3, 4]'); // [[1, 2], [3, 4]]

// Matrix operations
calc('[1, 2; 3, 4] + [5, 6; 7, 8]'); // [[6, 8], [10, 12]]
calc('[1, 2; 3, 4] * [2, 0; 1, 2]'); // [[4, 4], [10, 8]]

// Determinant
calc('det([-1, 2; 3, 1])'); // -7

// Transpose
calc('transpose([1, 2; 3, 4])'); // [[1, 3], [2, 4]]
```

### Variables and Scope

```javascript
// Simple variables
calc('x + y', { x: 10, y: 20 }); // 30
calc('a * 2', { a: 5 }); // 10

// Complex expressions with variables
calc('(a + b) * c', { a: 2, b: 3, c: 4 }); // 20
calc('sqrt(x^2 + y^2)', { x: 3, y: 4 }); // 5
```

### Constants

```javascript
// Mathematical constants
calc('pi'); // 3.14159...
calc('e'); // 2.71828...
calc('tau'); // 6.28318...

// Using constants in expressions
calc('2 * pi'); // 6.28318...
calc('e ^ 2'); // 7.38905...
```

## Real-World Examples

```javascript
// Calculate compound interest: P(1 + r)^t
calc('1000 * (1 + 0.05)^10'); // 1628.89

// Distance formula: sqrt((x2-x1)^2 + (y2-y1)^2)
calc('sqrt((5-1)^2 + (7-3)^2)'); // 5.657

// BMI calculation: weight(kg) / height(m)^2
calc('70 / 1.75^2'); // 22.86

// Percentage calculation
calc('(25 / 200) * 100'); // 12.5

// Temperature conversion
calc('(98.6 - 32) * 5/9'); // 37 (Fahrenheit to Celsius)
```

## API

### calc(expression, scope?)

Evaluates a mathematical expression and returns the result.

**Parameters:**

- `expression` (string | number | boolean): The mathematical expression to evaluate
- `scope` (object, optional): Object containing variables and their values

**Returns:**

- The result of the evaluated expression (type varies based on expression)

**Throws:**

- `Error` if the expression is null, undefined, empty, or invalid
- `Error` if the scope parameter is not an object

**Examples:**

```javascript
// Basic usage
calc('2 + 2'); // 4

// With variables
calc('x * 2', { x: 5 }); // 10

// Error handling
try {
  calc('invalid expression');
} catch (error) {
  console.error(error.message);
  // "Failed to evaluate expression "invalid expression": ..."
}
```

## TypeScript

Full TypeScript support is included:

```typescript
import calc = require('calc.js');

const result: number = calc('2 + 2');
const withVars: number = calc('x + y', { x: 10, y: 20 });
```

## Error Handling

calc.js provides helpful error messages:

```javascript
// Invalid input
calc(null); // Error: Invalid expression: expression cannot be null or undefined
calc(''); // Error: Invalid expression: expression cannot be empty

// Invalid syntax
calc('2 +'); // Error: Failed to evaluate expression "2 +": ...

// Invalid scope
calc('x + 1', 'invalid'); // Error: Invalid scope: scope must be an object
```

## Development

### Setup

```bash
git clone https://github.com/duyetdev/calc.js.git
cd calc.js
npm install
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Linting and Formatting

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting
npm run format:check
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Contribution Guide

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`npm test && npm run lint`)
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Security

Please see our [Security Policy](SECURITY.md) for reporting vulnerabilities.

## Credits

Built on top of the excellent [mathjs](https://github.com/josdejong/mathjs) library.

## License

MIT License

Copyright (c) 2016 Van-Duyet Le

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Links

- [GitHub Repository](https://github.com/duyetdev/calc.js)
- [npm Package](https://www.npmjs.com/package/calc.js)
- [Issue Tracker](https://github.com/duyetdev/calc.js/issues)
- [Changelog](CHANGELOG.md)
