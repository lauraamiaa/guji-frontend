const initialState = [];

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "cart/addToCart":
      return [...state, payload];
    case "cart/removeFromCart":
      const newState = state.splice(payload, 1);
      return newState;

    default:
      return state;
  }
}
