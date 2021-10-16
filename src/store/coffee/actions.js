import axios from "axios";

import { apiUrl } from "../../config/constants";
import { selectToken } from "../customer/selectors";

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
    const token = selectToken(getState());
    const response = await axios.delete(`${apiUrl}/coffees/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);

    dispatch(coffeeDeleted(id));
  } catch (e) {
    console.log(e);
  }
};

export const coffeeCreated = (data) => {
  return {
    type: "coffee/coffeeCreated",
    payload: data,
  };
};

export const createCoffee = (data) => async (dispatch, getState) => {
  try {
    const token = selectToken(getState());
    const response = await axios.post(
      `${apiUrl}/coffees`,
      {
        name: data.name,
        imageUrl: data.imageUrl,
        price: data.price,
        longDescription: data.longDescription,
        shortDescription: data.shortDescription,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response);
    dispatch(coffeeCreated(response.data));
    // dispatch(
    //   showMessageWithTimeout("success", false, "successfully posted!", 3500)
    // );
  } catch (e) {
    console.log(e);
  }
};
