import { combineReducers } from "redux";
import appState from "./appState/reducer";
import customer from "./customer/reducer";
import coffee from "./coffee/reducer";
import coffeeDetails from "./coffeeDetails/reducer";
import cart from "./cart/reducer";
import order from "./order/reducer";

export default combineReducers({
  appState,
  customer,
  coffee,
  coffeeDetails,
  cart,
  order,
});
