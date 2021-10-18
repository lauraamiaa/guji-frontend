import axios from "axios";

import { apiUrl } from "../../config/constants";

export const ordersFetched = (data) => {
  return {
    type: "order/ordersFetched",
    payload: data,
  };
};

export const fetchOrders = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/orders`);
    dispatch(ordersFetched(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const orderDetailsFetched = (data) => {
  return {
    type: "order/orderDetailsFetched",
    payload: data,
  };
};

export const fetchOrderDetails = (order) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/orders/${order.id}`);
    dispatch(orderDetailsFetched(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const createOrder = (shippingData) => async (dispatch, getState) => {
  try {
    const {
      cart,
      customer: { token },
    } = getState();
    const response = await axios.post(
      `${apiUrl}/orders`,
      {
        cart,
        shippingData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response);
  } catch (e) {
    console.log(e.message);
  }
};
