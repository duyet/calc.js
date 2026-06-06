const math = require('mathjs');

/**
 * Evaluates a mathematical expression and returns the result.
 *
 * @param {string} expression - The mathematical expression to evaluate
 * @param {Object} [scope={}] - Optional scope object containing variables and functions
 * @returns {*} The result of the evaluated expression
 * @throws {Error} If the expression is invalid or cannot be evaluated
 *
 * @example
 * // Basic arithmetic
 * calc('12 / (2.3 + 0.7)') // Returns: 4
 *
 * @example
 * // Unit conversions
 * calc('5.08 cm to inch') // Returns: 2 inch
 *
 * @example
 * // Trigonometric functions
 * calc('sin(45 deg) ^ 2') // Returns: 0.5
 *
 * @example
 * // Complex numbers
 * calc('9 / 3 + 2i') // Returns: 3 + 2i
 *
 * @example
 * // Matrix operations
 * calc('det([-1, 2; 3, 1])') // Returns: -7
 *
 * @example
 * // Using scope with variables
 * calc('x + y', { x: 10, y: 20 }) // Returns: 30
 */
function calc(expression, scope) {
  // Input validation
  if (expression === null || expression === undefined) {
    throw new Error(
      'Invalid expression: expression cannot be null or undefined'
    );
  }

  // Convert to string if not already
  const expr = String(expression);

  // Check for empty expression
  if (expr.trim() === '') {
    throw new Error('Invalid expression: expression cannot be empty');
  }

  // Validate scope if provided
  if (scope !== undefined && typeof scope !== 'object') {
    throw new Error('Invalid scope: scope must be an object');
  }

  try {
    // Use empty object if scope is undefined for mathjs v13 compatibility
    return math.evaluate(expr, scope || {});
  } catch (error) {
    // Enhance error message with context
    throw new Error(
      `Failed to evaluate expression "${expr}": ${error.message}`
    );
  }
}

module.exports = calc;
