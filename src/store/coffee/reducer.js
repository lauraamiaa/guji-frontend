const initialState = {
  loading: true,
  allCoffees: [],
  details: null,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "coffee/coffeesFetched": {
      console.log("got to the reducer", payload);
      return {
        loading: false,
        allCoffees: [...payload],
      };
    }

    default: {
      return state;
    }
  }
}
