import axios from "axios";
import { apiUrl } from "../../config/constants";

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
