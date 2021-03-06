import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

const loginSuccess = (customerWithToken) => {
  return {
    type: "customer/customerLoggedIn",
    payload: customerWithToken,
  };
};

const tokenStillValid = (customerWithoutToken) => ({
  type: "customer/tokenValid",
  payload: customerWithoutToken,
});

export const logOut = () => ({
  type: "customer/LoggedOut",
});

export const signUp = (
  email,
  password,
  firstName,
  lastName,
  phone,
  isAdmin
) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        email,
        password,
        firstName,
        lastName,
        phone,
        isAdmin,
      });
      dispatch(loginSuccess(response.data));
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          "YOU HAVE SUCCESSFULLY CREATED AN ACCOUNT!"
        )
      );
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("Error", error);
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "WELCOME BACK!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getCustomerWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};
