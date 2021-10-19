export function selectAllOrders(reduxState) {
  return reduxState.order.allOrders;
}

export function selectOrdersDetails(reduxState) {
  return reduxState.order.orderDetails;
}
