import axios from "axios";

import { apiUrl } from "../../config/constants";

export const coffeesFetched = (data) => {
  return {
    type: "coffee/coffeesFetched",
    payload: data,
  };
};

export const fetchCoffees = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/coffees`);
    dispatch(coffeesFetched(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const coffeeDeleted = (data) => {
  return {
    type: "coffee/coffeeDeleted",
    payload: data,
  };
};

export const deleteCoffee = (id) => async (dispatch, getState) => {
  try {
    // checking which id we have
    console.log("actions id", id);
    const response = await axios.delete(`${apiUrl}/coffees/${id}`);
    console.log(response);

    dispatch(coffeeDeleted(id));
  } catch (e) {
    console.log(e);
  }
};
