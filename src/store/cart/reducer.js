const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "cart/addToCart":
      return [...state, payload];
    case "cart/removeFromCart":
      const newState = state.splice(payload, 1);
      return newState;

    default:
      return state;
  }
};
