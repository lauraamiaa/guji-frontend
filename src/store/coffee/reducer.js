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
    case "coffee/coffeeDeleted": {
      console.log("id", payload);
      const id = payload;
      const newArrayOfCoffees = state.allCoffees.filter(
        (coffee) => coffee.id !== id
      );
      console.log(newArrayOfCoffees);
      return {
        loading: false,
        ...state,
        allCoffees: newArrayOfCoffees,
      };
    }

    default: {
      return state;
    }
  }
}
