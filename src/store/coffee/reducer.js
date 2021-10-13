const initialState = {
  loading: true,
  allCoffees: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "coffee/coffeesFetched": {
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
