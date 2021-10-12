import { Switch, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Navigation from "./components/Navbar/Navbar";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
