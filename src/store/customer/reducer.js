const initialState = {
  token: localStorage.getItem("token"),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "customer/customerLoggedIn":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
    case "customer/LoggedOut":
      localStorage.removeItem("token");
      return { ...initialState, token: null };
    case "customer/tokenValid":
      localStorage.removeItem("token");
      return { ...state, ...action.payload };
    default: {
      return state;
    }
  }
}
