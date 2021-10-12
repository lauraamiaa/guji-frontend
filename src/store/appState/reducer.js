const initialState = {
  loading: false,
  message: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "appState/appLoading":
      return { ...state, loading: true };

    case "appState/appDoneLoading":
      return { ...state, loading: false };

    case "appState/setMessage":
      return { ...state, message: action.payload };

    case "appState/clearMessage":
      return { ...state, message: null };

    default:
      return state;
  }
}
