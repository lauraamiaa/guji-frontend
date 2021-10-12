import { combineReducers } from "redux";
import appState from "./appState/reducer";
import customer from "./customer/reducer";

export default combineReducers({
  appState,
  customer,
});
