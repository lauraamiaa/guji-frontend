export const addToCart = (data) => ({
  type: "cart/addToCart",
  payload: data,
});

export const deleteFromCart = (data) => ({
  type: "cart/deleteFromCart",
  payload: data,
});
