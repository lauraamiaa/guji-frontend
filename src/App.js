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

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/webshop/:id" component={DetailsPage} />
        <Route path="/webshop" component={Webshop} />
        <Route path="/cart" component={Cart} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
