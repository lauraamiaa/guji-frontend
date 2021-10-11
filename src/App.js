import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Navigation from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
