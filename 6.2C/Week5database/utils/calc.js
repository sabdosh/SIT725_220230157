function calculateTotalPrice(price, quantity) {
  
    // Check for invalid input
  if (price < 0 || quantity < 0) {
    throw new Error('Price and quantity must be positive numbers');
  }

  // Calculate total
  const total = price * quantity;

  // Return the result
  return total;
}

module.exports = {
  calculateTotalPrice
};
