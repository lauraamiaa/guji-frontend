const initialState = {
  loading: true,
  allOrders: [],
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
        loading: false,
        allOrders: { ...payload },
      };
    }

    default: {
      return state;
    }
  }
}
