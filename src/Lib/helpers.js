export function calculateTotalPrice(quantity, price, weight) {
  switch (weight) {
    case "250 GR": {
      const total = Number(price) * parseInt(quantity);
      return total;
    }
    case "1 KG": {
      const total = Number(price) * 3.9 * parseInt(quantity);
      return total;
    }
    default:
      break;
  }
}
