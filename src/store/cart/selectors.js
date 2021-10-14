export const getFullCartItems = (reduxState) => {
  const list = reduxState.coffee.allCoffees;
  const cart = reduxState.cart;
  return cart.map((item) => {
    return {
      ...item,
      coffee: list.find((coffee) => {
        return parseInt(coffee.id) === parseInt(item.coffeeId);
      }),
    };
  });
};
