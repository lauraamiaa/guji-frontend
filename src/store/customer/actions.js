import axios from "axios";

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
  address,
  isAdmin
) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`http://localhost:4000/signup`, {
        email,
        password,
        firstName,
        lastName,
        phone,
        address,
        isAdmin,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
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
