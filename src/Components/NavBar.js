import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navigation">
      <div>
        <h1 className="store-header">BookStore</h1>
      </div>
      <div>
        <input type="text" placeholder="Search"></input>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/shopping-cart">
          Shopping Cart <span>0</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
