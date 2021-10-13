const initialState = {
  loading: true,
  allCoffeeDetails: null,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "coffee/coffeeDetailsFetched": {
      //   console.log("got to the reducer", payload);
      return {
        loading: false,
        allCoffeeDetails: { ...payload },
      };
    }

    default: {
      return state;
    }
  }
}
