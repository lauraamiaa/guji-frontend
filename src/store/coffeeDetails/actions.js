import axios from "axios";

import { apiUrl } from "../../config/constants";
import { selectToken } from "../customer/selectors";
import { selectAllCoffeeDetails } from "./selectors";
import { showMessageWithTimeout } from "../appState/actions";

export const coffeeDetailsFetched = (data) => {
  return {
    type: "coffee/coffeeDetailsFetched",
    payload: data,
  };
};

export const fetchCoffeeDetails = (id) => async (dispatch, getState) => {
  //   console.log(id);
  try {
    const response = await axios.get(`${apiUrl}/coffees/${id}`);
    // console.log("here the action response", response.data);
    dispatch(coffeeDetailsFetched(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const coffeeUpdated = (data) => {
  return {
    type: "coffee/coffeeUpdated",
    payload: data,
  };
};

export const updateCoffee = (data) => async (dispatch, getState) => {
  try {
    const token = selectToken(getState());
    const coffee = selectAllCoffeeDetails(getState());
    const response = await axios.patch(
      `${apiUrl}/coffees/${coffee.id}`,
      {
        name: data.name,
        price: data.price,
        longDescription: data.longDescription,
        shortDescription: data.shortDescription,
        coffeeId: data.id,
      }
      // { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch(coffeeUpdated(response.data));
    dispatch(
      showMessageWithTimeout("success", false, "SUCCESSFULLY EDITED!", 3500)
    );
  } catch (e) {
    console.log(e);
  }
};
