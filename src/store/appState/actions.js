import { DEFAULT_MESSAGE_TIMEOUT } from "../../config/constants";

export const appLoading = () => ({ type: "appState/appLoading" });
export const appDoneLoading = () => ({ type: "appState/appDoneLoading" });
export const clearMessage = () => ({ type: "appState/clearMessage" });

export const setMessage = (variant, dismissable, text) => {
  return {
    type: "appState/setMessage",
    payload: {
      variant,
      dismissable,
      text,
    },
  };
};

export const showMessageWithTimeout = (
  variant,
  dismissable,
  text,
  timeOutMilliSeconds
) => {
  return (dispatch) => {
    dispatch(setMessage(variant, dismissable, text));

    const timeout = timeOutMilliSeconds || DEFAULT_MESSAGE_TIMEOUT;

    setTimeout(() => dispatch(clearMessage()), timeout);
  };
};
