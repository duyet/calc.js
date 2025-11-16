const calc = require('..');

describe('calc.js', () => {
  describe('Basic Arithmetic Operations', () => {
    test('should evaluate simple addition', () => {
      expect(calc('1 + 1')).toBe(2);
    });

    test('should evaluate simple subtraction', () => {
      expect(calc('10 - 5')).toBe(5);
    });

    test('should evaluate simple multiplication', () => {
      expect(calc('6 * 7')).toBe(42);
    });

    test('should evaluate simple division', () => {
      expect(calc('12 / 3')).toBe(4);
    });

    test('should respect order of operations', () => {
      expect(calc('2 + 3 * 4')).toBe(14);
    });

    test('should handle parentheses correctly', () => {
      expect(calc('(2 + 3) * 4')).toBe(20);
    });

    test('should evaluate complex expression from README', () => {
      expect(calc('12 / (2.3 + 0.7)')).toBe(4);
    });

    test('should handle negative numbers', () => {
      expect(calc('-5 + 10')).toBe(5);
    });

    test('should handle decimals', () => {
      expect(calc('3.14 * 2')).toBeCloseTo(6.28, 2);
    });

    test('should handle exponentiation', () => {
      expect(calc('2 ^ 3')).toBe(8);
    });
  });

  describe('Unit Conversions', () => {
    test('should convert cm to inch', () => {
      const result = calc('5.08 cm to inch');
      // Use toMatch for floating point tolerance
      expect(result.toString()).toMatch(/2(\.\d+)? inch/);
    });

    test('should convert meters to feet', () => {
      const result = calc('1 m to ft');
      // 1 meter ≈ 3.28084 feet
      expect(parseFloat(result.toString())).toBeCloseTo(3.28084, 2);
    });

    test('should convert kg to lb', () => {
      const result = calc('1 kg to lb');
      // 1 kg ≈ 2.20462 lb
      expect(parseFloat(result.toString())).toBeCloseTo(2.20462, 2);
    });
  });

  describe('Trigonometric Functions', () => {
    test('should calculate sine of 45 degrees', () => {
      const result = calc('sin(45 deg)');
      expect(result).toBeCloseTo(Math.sqrt(2) / 2, 5);
    });

    test('should calculate sine squared from README', () => {
      const result = calc('sin(45 deg) ^ 2');
      expect(result).toBeCloseTo(0.5, 5);
    });

    test('should calculate cosine', () => {
      const result = calc('cos(0)');
      expect(result).toBe(1);
    });

    test('should calculate tangent', () => {
      const result = calc('tan(45 deg)');
      expect(result).toBeCloseTo(1, 5);
    });

    test('should work with radians', () => {
      const result = calc('sin(pi / 2)');
      expect(result).toBeCloseTo(1, 10);
    });
  });

  describe('Complex Numbers', () => {
    test('should handle complex number addition from README', () => {
      const result = calc('9 / 3 + 2i');
      expect(result.toString()).toBe('3 + 2i');
    });

    test('should handle complex number multiplication', () => {
      const result = calc('(2 + 3i) * (1 - 2i)');
      // mathjs v13 simplifies '1i' to 'i'
      expect(result.toString()).toMatch(/8 - (1i|i)/);
    });

    test('should handle complex number division', () => {
      const result = calc('(4 + 2i) / 2');
      // mathjs v13 simplifies '1i' to 'i'
      expect(result.toString()).toMatch(/2 \+ (1i|i)/);
    });
  });

  describe('Matrix Operations', () => {
    test('should calculate determinant from README', () => {
      expect(calc('det([-1, 2; 3, 1])')).toBe(-7);
    });

    test('should handle matrix addition', () => {
      const result = calc('[1, 2; 3, 4] + [5, 6; 7, 8]');
      expect(result.toString()).toBe('[[6, 8], [10, 12]]');
    });

    test('should handle matrix multiplication', () => {
      const result = calc('[1, 2; 3, 4] * [2, 0; 1, 2]');
      expect(result.toString()).toBe('[[4, 4], [10, 8]]');
    });
  });

  describe('Variable Scope', () => {
    test('should evaluate expression with variables', () => {
      expect(calc('x + y', { x: 10, y: 20 })).toBe(30);
    });

    test('should evaluate expression with single variable', () => {
      expect(calc('a * 2', { a: 5 })).toBe(10);
    });

    test('should handle complex scope', () => {
      const result = calc('(a + b) * c', { a: 2, b: 3, c: 4 });
      expect(result).toBe(20);
    });
  });

  describe('Advanced Mathematical Functions', () => {
    test('should calculate square root', () => {
      expect(calc('sqrt(16)')).toBe(4);
    });

    test('should calculate logarithm', () => {
      const result = calc('log(100, 10)');
      expect(result).toBeCloseTo(2, 10);
    });

    test('should calculate natural logarithm', () => {
      const result = calc('log(e)');
      expect(result).toBeCloseTo(1, 10);
    });

    test('should calculate absolute value', () => {
      expect(calc('abs(-42)')).toBe(42);
    });

    test('should calculate factorial', () => {
      expect(calc('5!')).toBe(120);
    });
  });

  describe('Constants', () => {
    test('should support pi constant', () => {
      const result = calc('pi');
      expect(result).toBeCloseTo(Math.PI, 10);
    });

    test('should support e constant', () => {
      const result = calc('e');
      expect(result).toBeCloseTo(Math.E, 10);
    });

    test('should support tau constant', () => {
      const result = calc('tau');
      expect(result).toBeCloseTo(Math.PI * 2, 10);
    });
  });

  describe('Input Validation', () => {
    test('should throw error for null input', () => {
      expect(() => calc(null)).toThrow(
        'Invalid expression: expression cannot be null or undefined'
      );
    });

    test('should throw error for undefined input', () => {
      expect(() => calc(undefined)).toThrow(
        'Invalid expression: expression cannot be null or undefined'
      );
    });

    test('should throw error for empty string', () => {
      expect(() => calc('')).toThrow(
        'Invalid expression: expression cannot be empty'
      );
    });

    test('should throw error for whitespace-only string', () => {
      expect(() => calc('   ')).toThrow(
        'Invalid expression: expression cannot be empty'
      );
    });

    test('should throw error for invalid scope type', () => {
      expect(() => calc('x + 1', 'invalid')).toThrow(
        'Invalid scope: scope must be an object'
      );
    });

    test('should throw error for invalid scope type (number)', () => {
      expect(() => calc('x + 1', 123)).toThrow(
        'Invalid scope: scope must be an object'
      );
    });
  });

  describe('Error Handling', () => {
    test('should provide helpful error for syntax errors', () => {
      expect(() => calc('2 +')).toThrow(/Failed to evaluate expression/);
    });

    test('should provide helpful error for undefined variables', () => {
      expect(() => calc('x + 1')).toThrow(/Failed to evaluate expression/);
    });

    test('should provide helpful error for invalid functions', () => {
      expect(() => calc('invalidFunc(1)')).toThrow(
        /Failed to evaluate expression/
      );
    });

    test('should include the expression in error message', () => {
      expect(() => calc('invalid * * expression')).toThrow(
        /invalid \* \* expression/
      );
    });
  });

  describe('Type Coercion', () => {
    test('should handle number input', () => {
      expect(calc(42)).toBe(42);
    });

    test('should handle boolean input', () => {
      expect(calc(true)).toBe(true);
    });

    test('should coerce number to string', () => {
      expect(calc(123)).toBe(123);
    });
  });

  describe('Edge Cases', () => {
    test('should handle very large numbers', () => {
      const result = calc('10^100');
      expect(result).toBeDefined();
    });

    test('should handle very small numbers', () => {
      const result = calc('0.000001');
      expect(result).toBe(0.000001);
    });

    test('should handle division by zero', () => {
      const result = calc('1/0');
      expect(result).toBe(Infinity);
    });

    test('should handle negative division by zero', () => {
      const result = calc('-1/0');
      expect(result).toBe(-Infinity);
    });
  });

  describe('Real-World Use Cases', () => {
    test('should calculate compound interest', () => {
      // P(1 + r)^t where P=1000, r=0.05, t=10
      const result = calc('1000 * (1 + 0.05)^10');
      expect(result).toBeCloseTo(1628.89, 2);
    });

    test('should calculate distance formula', () => {
      // sqrt((x2-x1)^2 + (y2-y1)^2)
      const result = calc('sqrt((5-1)^2 + (7-3)^2)');
      expect(result).toBeCloseTo(5.657, 2);
    });

    test('should calculate BMI', () => {
      // weight(kg) / height(m)^2
      const result = calc('70 / 1.75^2');
      expect(result).toBeCloseTo(22.86, 2);
    });

    test('should calculate percentage', () => {
      const result = calc('(25 / 200) * 100');
      expect(result).toBe(12.5);
    });
  });
});
