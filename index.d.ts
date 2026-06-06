/**
 * Evaluates a mathematical expression and returns the result.
 *
 * @param expression - The mathematical expression to evaluate
 * @param scope - Optional scope object containing variables and functions
 * @returns The result of the evaluated expression
 * @throws {Error} If the expression is invalid or cannot be evaluated
 *
 * @example
 * ```typescript
 * // Basic arithmetic
 * calc('12 / (2.3 + 0.7)') // Returns: 4
 *
 * // Unit conversions
 * calc('5.08 cm to inch') // Returns: Unit(2, 'inch')
 *
 * // Trigonometric functions
 * calc('sin(45 deg) ^ 2') // Returns: 0.5
 *
 * // Complex numbers
 * calc('9 / 3 + 2i') // Returns: Complex(3, 2)
 *
 * // Matrix operations
 * calc('det([-1, 2; 3, 1])') // Returns: -7
 *
 * // Using scope with variables
 * calc('x + y', { x: 10, y: 20 }) // Returns: 30
 * ```
 */
declare function calc(expression: string | number | boolean, scope?: Record<string, any>): any;

export = calc;
