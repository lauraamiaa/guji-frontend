const initialState = {
  loading: true,
  allOrders: [],
  orderDetails: null,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "order/ordersFetched": {
      return {
        loading: false,
        allOrders: [...payload],
      };
    }
    case "order/orderDetailsFetched": {
      return {
        ...state,
        loading: false,
        orderDetails: { ...payload },
      };
    }

    default: {
      return state;
    }
  }
}
