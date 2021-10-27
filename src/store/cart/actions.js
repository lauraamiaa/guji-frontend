export const addToCart = (data) => ({
  type: "cart/addToCart",
  payload: data,
});

export const deleteFromCart = (data) => ({
  type: "cart/deleteFromCart",
  payload: data,
});

export const increaseDecreaseCartItem = (data) => ({
  type: "cart/increaseDecreaseCartItem",
  payload: data,
});

export const resetCart = () => ({
  type: "cart/resetCart",
});
