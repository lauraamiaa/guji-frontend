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
    console.log("here the action response", response.data);
    dispatch(coffeesFetched(response.data));
  } catch (e) {
    console.log(e);
  }
};
