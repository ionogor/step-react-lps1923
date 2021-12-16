import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Item from "./Pages/Item";
import ShoppingCart from "./Pages/ShoppingCart";
import NavBar from "./Components/NavBar";
import Items from "./Pages/Items";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios("https://api.itbook.store/1.0/search/react/").then((response) => {
      setBooks(response.data.books);
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/shopping-cart">
          <ShoppingCart books={books} />
        </Route>
        <Route path="/item/:id">
          <Item books={books} />
        </Route>
        <Route path="/items">
          <Items books={books} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
