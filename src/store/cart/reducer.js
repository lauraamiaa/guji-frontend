const initialState = [];

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "cart/addToCart":
      return [
        ...state,
        {
          ...payload,
        },
      ];
    case "cart/deleteFromCart":
      state.splice(parseInt(payload), 1);
      return [...state];
    case "cart/reduceCartItem":
      return;
    case "cart/increaseDecreaseCartItem":
      const newState = state.map((item, index) => {
        if (parseInt(index) !== parseInt(payload.index)) return item;
        else {
          return { ...item, quantity: payload.quantity };
        }
      });
      return newState;
    default:
      return state;
  }
}
