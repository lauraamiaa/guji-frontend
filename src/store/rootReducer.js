import { combineReducers } from "redux";
import appState from "./appState/reducer";
import customer from "./customer/reducer";
import coffee from "./coffee/reducer";

export default combineReducers({
  appState,
  customer,
  coffee,
});
