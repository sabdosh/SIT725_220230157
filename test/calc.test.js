const { expect } = require('chai');
const { calculateTotalPrice } = require('../Week5database/utils/calc');

describe('calculateTotalPrice()', () => {
  it('should calculate total correctly', () => {
    const result = calculateTotalPrice(10, 2);
    expect(result).to.equal(20);
  });

  it('should return 0 when quantity is 0', () => {
    const result = calculateTotalPrice(10, 0);
    expect(result).to.equal(0);
  });

  it('should throw error for negative values', () => {
    expect(() => calculateTotalPrice(-5, 2)).to.throw();
  });
});
