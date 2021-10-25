import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AbtSX5TsMePR90XHuni3QefomDKcT8FOnVdaPDAR79bBkewIph462N2o-C8JyXw0e3jATrL4zRLggiO_",
          currency: "EUR",
        }}
      />
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
