import { Link, Route, Switch } from "react-router-dom";
import Avengers from "./components/Avengers";
import Home from "./components/Home";
import Avenger from "./components/Avenger";
import { useEffect, useState } from "react";
import data from "./data";

function App() {
  const [state, setState] = useState(data);

  return (
    <div className="App">
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/avengers/:id">
          <Avenger avenger={state} />
        </Route>
        <Route exact path="/avengers">
          <Avengers state={state} />
        </Route>
      </Switch>
    </div>
  );
}
// comment

export default App;
