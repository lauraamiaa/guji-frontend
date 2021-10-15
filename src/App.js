import { Switch, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navbar/Navbar";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Webshop from "./pages/Webshop/Webshop";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Cart from "./pages/Cart/Cart";
import AdminDash from "./pages/AdminDash/AdminDash";
import AdminProductPage from "./pages/AdminProductPage/AdminProductPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/webshop/:id" component={DetailsPage} />
        <Route path="/webshop" component={Webshop} />
        <Route path="/cart" component={Cart} />
        <Route path="/admin/product/:id" component={AdminProductPage} />
        <Route path="/admin" component={AdminDash} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
