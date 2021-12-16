import React from "react";
import img from "../img/img.jpg";
import { useHistory } from "react-router";
const Home = () => {
  const history = useHistory();

  const routeToItems = () => {
    history.push("/items");
  };
  return (
    <div className="home-wrapper">
      <img className="home-image" src={img} alt="img"></img>
      <button className="shop-button md-button" onClick={routeToItems}>
        Shop
      </button>
    </div>
  );
};

export default Home;
