import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import Navigation from "./components/Navbar/Navbar";
import MessageBox from "./components/MessageBox/MessageBox";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Webshop from "./pages/Webshop/Webshop";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Cart from "./pages/Cart/Cart";
import AdminDash from "./pages/AdminDash/AdminDash";
import AdminProductPage from "./pages/AdminProductPage/AdminProductPage";
import AdminOrderPage from "./pages/AdminOrderPage/AdminOrderPage";
import { getCustomerWithStoredToken } from "./store/customer/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomerWithStoredToken());
  }, [dispatch]);

  console.log("api?", process.env.REACT_APP_API_URL);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      <Switch>
        <Route path="/webshop/:id" component={DetailsPage} />
        <Route path="/webshop" component={Webshop} />
        <Route path="/cart" component={Cart} />
        <Route path="/admin/product/:id" component={AdminProductPage} />
        <Route path="/admin/orders/:id" component={AdminOrderPage} />
        <Route path="/admin" component={AdminDash} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
