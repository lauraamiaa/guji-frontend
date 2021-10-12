const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  details: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "customer/customerLoggedIn":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
    case LOG_OUT:
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
