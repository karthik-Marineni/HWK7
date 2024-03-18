const calculateVelocity = require('./velocityCalculator');

describe('calculateVelocity', () => {
    test('calculates average velocity with positive integers', () => {
        expect(calculateVelocity([10, 20, 30])).toBe(20);
    });

    test('calculates average velocity with floating-point numbers', () => {
        expect(calculateVelocity([10.5, 20.5, 30.5])).toBeCloseTo(20.5);
    });

    test('calculates average velocity with a mix of integers and floats', () => {
        expect(calculateVelocity([10, 20.5, 30])).toBeCloseTo(20.1666667);
    });

    test('handles zero points correctly', () => {
        expect(calculateVelocity([0, 0, 0])).toBe(0);
    });

    test('handles a single sprint point', () => {
        expect(calculateVelocity([25])).toBe(25);
    });

    test('throws an error for an empty array', () => {
        expect(() => calculateVelocity([])).toThrow("Array cannot be empty");
    });
});